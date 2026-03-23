import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are the Driftlss AI assistant. "Driftlss" has no "e". We build websites, AI tools, and automation for therapy practices.

CRITICAL: Keep every response to 1-2 short sentences max. Talk like a real person texting, not a sales bot. Be chill and helpful.

What we do: custom websites, AI intake assistants, SEO, and automation for ABA clinics, sensory gyms, OT/PT, SLP practices. We get the therapy world. Projects start around $5k with retainer options.

Rules:
- 1-2 sentences per response. Never write a paragraph.
- No markdown, no bold, no bullets, no headers, no em-dashes
- Sound human. Short. Casual but professional.
- If you don't know something, say "I'd love to connect you with our team for that."

Contact form: When someone wants to get started, asks about pricing, or wants a quote, call show_contact_form. Keep it brief like "Let me grab a quick form for you." Don't push it on people just asking questions.`;

const TOOLS: Anthropic.Tool[] = [
  {
    name: "show_contact_form",
    description:
      "Show an inline contact form in the chat when the visitor is interested in working together or wants to get started.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
];

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        let currentMessages = [...messages];

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const stream = client.messages.stream({
            model: "claude-haiku-4-5",
            max_tokens: 256,
            system: SYSTEM_PROMPT,
            tools: TOOLS,
            messages: currentMessages,
          });

          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ text: event.delta.text })}\n\n`
                )
              );
            }
          }

          const finalMessage = await stream.finalMessage();

          if (finalMessage.stop_reason !== "tool_use") break;

          currentMessages.push({
            role: "assistant",
            content: finalMessage.content,
          });

          const toolResults: Anthropic.ToolResultBlockParam[] = [];

          for (const block of finalMessage.content) {
            if (block.type === "tool_use" && block.name === "show_contact_form") {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ show_form: true })}\n\n`
                )
              );
              toolResults.push({
                type: "tool_result",
                tool_use_id: block.id,
                content: "Contact form is now visible to the visitor.",
              });
            }
          }

          currentMessages.push({ role: "user", content: toolResults });
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (error) {
        if (error instanceof Anthropic.AuthenticationError) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "API key not configured." })}\n\n`
            )
          );
        } else {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "Something went wrong. Please try again." })}\n\n`
            )
          );
        }
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
