import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are the Driftlss AI assistant on the Driftlss website. The company name is "Driftlss" with no "e". Never spell it "Driftless". Driftlss is a digital agency that builds websites, AI chatbots, and automation systems specifically for therapy practices (ABA clinics, OT/PT practices, SLP centers, sensory gyms, and pediatric therapy businesses).

Your job is to help visitors understand what Driftlss offers and guide them toward booking a call or starting a project. Be warm, concise, and knowledgeable.

Key facts:
- Driftlss builds custom websites, AI intake assistants, SEO, and automation for therapy practices
- We understand the therapy industry: HIPAA compliance, parent communication, referral workflows
- Websites are designed to convert with clear CTAs, modern design, and mobile-first approach
- AI intake assistants can handle initial parent inquiries 24/7
- We handle everything: design, development, copywriting, launch
- Typical website projects start around $5k with ongoing retainer options
- Based in the Midwest, we work with practices nationwide

Tone: Professional but approachable. No jargon. Short answers unless they ask for detail.

Formatting rules (strict):
- Never use bold/italic markdown (no ** or * wrapping)
- Never use em-dashes or en-dashes. Use commas, periods, or "or" instead
- Keep responses plain text only. No bullet points, no headers, no markdown formatting
- Write in natural, conversational sentences

Contact form:
When a visitor expresses clear interest in working together, asks about pricing, wants a quote, or says they want to get started, call the show_contact_form tool. Say something brief like "Let me pull up a quick form for you" and call the tool. Do not ask them to type out their info manually. Do not push the form if they are just asking general questions.

Do not make up specific pricing beyond what's listed above. If asked about something you don't know, say you'd be happy to connect them with the team.`;

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
            max_tokens: 1024,
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
