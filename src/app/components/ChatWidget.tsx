"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, CheckCircle } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant" | "form";
  content: string;
  timestamp: string;
}

interface WidgetConfig {
  welcome_message: string;
  widget_color: string;
  widget_position: string;
  is_active: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

function InlineContactForm({
  color,
  onSubmitted,
}: {
  color: string;
  onSubmitted: () => void;
}) {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.interest,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        onSubmitted();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="self-start w-full max-w-[90%] px-4 py-4 flex items-center gap-2 text-sm"
        style={{
          borderRadius: "16px",
          backgroundColor: "#EFF8F5",
          color,
          fontFamily: "var(--font-body)",
        }}
      >
        <CheckCircle size={16} />
        Submitted! The team will be in touch soon.
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: "#FFFDF9",
    color: "#2D2A26",
    fontFamily: "var(--font-body)",
    border: "1px solid #E8DFD2",
    borderRadius: "8px",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-start w-full max-w-[90%] flex flex-col gap-2.5 px-4 py-4"
      style={{
        borderRadius: "16px",
        backgroundColor: "#F3EDE4",
        fontFamily: "var(--font-body)",
      }}
    >
      <input
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-teal-400"
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-teal-400"
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="Phone number"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-teal-400"
        style={inputStyle}
      />
      <textarea
        placeholder="What are you looking for?"
        required
        rows={2}
        value={form.interest}
        onChange={(e) => setForm({ ...form, interest: e.target.value })}
        className="w-full px-3 py-2 text-sm outline-none resize-none focus:ring-1 focus:ring-teal-400"
        style={inputStyle}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-60"
        style={{ backgroundColor: color, color: "#FAF7F2" }}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status === "error" && (
        <p className="text-xs" style={{ color: "#D4623B" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

const DEFAULT_CONFIG: WidgetConfig = {
  welcome_message: "Have a question about our services? We're here to help.",
  widget_color: "#2A7D6E",
  widget_position: "bottom-right",
  is_active: true,
};

export default function ChatWidget() {
  const [config, setConfig] = useState<WidgetConfig>(DEFAULT_CONFIG);
  const [configLoaded, setConfigLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const conversationIdRef = useRef("");
  const visitorInfoRef = useRef({ page: "", referrer: "", ua: "" });
  const leadCapturedRef = useRef(false);

  // Init: fetch config, set up session
  useEffect(() => {
    const stored = sessionStorage.getItem("driftlss_conversation_id");
    conversationIdRef.current = stored || crypto.randomUUID();
    if (!stored)
      sessionStorage.setItem(
        "driftlss_conversation_id",
        conversationIdRef.current
      );

    visitorInfoRef.current = {
      page: window.location.href,
      referrer: document.referrer,
      ua: navigator.userAgent,
    };

    fetch("/api/chatbot/config")
      .then((res) => res.json())
      .then((data) => {
        setConfig({ ...DEFAULT_CONFIG, ...data });
        setConfigLoaded(true);
      })
      .catch(() => {
        setConfigLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const logToDashboard = useCallback(
    (msgs: ChatMessage[], status: string, leadCaptured: boolean) => {
      const logMessages = msgs
        .filter((m) => m.role !== "form")
        .map((m) => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp,
        }));

      fetch("/api/chatbot/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation_id: conversationIdRef.current,
          messages: logMessages,
          status,
          visitor_info: visitorInfoRef.current,
          lead_captured: leadCaptured,
        }),
      }).catch(() => {});
    },
    []
  );

  const logError = useCallback(
    (errorType: string, message: string) => {
      fetch("/api/chatbot/error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation_id: conversationIdRef.current,
          error_type: errorType,
          message,
          metadata: {},
        }),
      }).catch(() => {});
    },
    []
  );

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || streaming) return;

    const now = new Date().toISOString();
    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
      timestamp: now,
    };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setStreaming(true);

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: "",
      timestamp: new Date().toISOString(),
    };
    setMessages([...updated, assistantMessage]);

    const apiMessages = updated
      .filter((m) => m.role !== "form")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          conversation_id: conversationIdRef.current,
        }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.show_form) {
                  setMessages((prev) => [
                    ...prev,
                    {
                      role: "form",
                      content: "",
                      timestamp: new Date().toISOString(),
                    },
                  ]);
                } else if (parsed.error) {
                  accumulated = parsed.error;
                  setMessages((prev) => {
                    const copy = [...prev];
                    const lastAssistant = copy.findLastIndex(
                      (m) => m.role === "assistant"
                    );
                    if (lastAssistant !== -1) {
                      copy[lastAssistant] = {
                        ...copy[lastAssistant],
                        content: accumulated,
                      };
                    }
                    return copy;
                  });
                } else if (parsed.text) {
                  accumulated += parsed.text;
                  setMessages((prev) => {
                    const copy = [...prev];
                    const lastAssistant = copy.findLastIndex(
                      (m) => m.role === "assistant"
                    );
                    if (lastAssistant !== -1) {
                      copy[lastAssistant] = {
                        ...copy[lastAssistant],
                        content: accumulated,
                      };
                    }
                    return copy;
                  });
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        }
      }

      // Log after exchange completes
      setMessages((final) => {
        logToDashboard(
          final,
          leadCapturedRef.current ? "lead_captured" : "open",
          leadCapturedRef.current
        );
        return final;
      });
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Connection error";
      logError("api_failure", errorMsg);

      setMessages((prev) => {
        const copy = [...prev];
        const lastAssistant = copy.findLastIndex(
          (m) => m.role === "assistant"
        );
        if (lastAssistant !== -1) {
          copy[lastAssistant] = {
            ...copy[lastAssistant],
            content: "Connection error. Please try again.",
          };
        }
        return copy;
      });
    }

    setStreaming(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function handleFormSubmitted() {
    leadCapturedRef.current = true;
    const followUp: ChatMessage = {
      role: "assistant",
      content:
        "Got it, the team will reach out to you soon. Is there anything else I can help with in the meantime?",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => {
      const next = [...prev, followUp];
      logToDashboard(next, "lead_captured", true);
      return next;
    });
  }

  if (!configLoaded || !config.is_active) return null;

  const color = config.widget_color;
  const isLeft = config.widget_position === "bottom-left";

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${isLeft ? "left-6" : "right-6"}`}
        style={{ backgroundColor: open ? "#3D3935" : color }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X size={22} color="#FAF7F2" />
        ) : (
          <MessageCircle size={22} color="#FAF7F2" />
        )}
      </button>

      {open && (
        <div
          className={`fixed bottom-24 z-50 flex flex-col overflow-hidden shadow-2xl ${isLeft ? "left-6" : "right-6"}`}
          style={{
            width: "min(400px, calc(100vw - 48px))",
            height: "min(560px, calc(100vh - 140px))",
            borderRadius: "16px",
            backgroundColor: "#FAF7F2",
          }}
        >
          <div
            className="flex items-center gap-3 px-5 py-4 shrink-0"
            style={{ backgroundColor: "#2D2A26" }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: color }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "#FAF7F2", fontFamily: "var(--font-body)" }}
            >
              Driftlss AI
            </span>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
          >
            {messages.length === 0 && (
              <div className="flex-1 flex items-center justify-center">
                <p
                  className="text-sm text-center leading-relaxed"
                  style={{ color: "#8A8580", maxWidth: "240px" }}
                >
                  {config.welcome_message}
                </p>
              </div>
            )}

            {messages.map((msg, i) => {
              if (msg.role === "form") {
                return (
                  <InlineContactForm
                    key={i}
                    color={color}
                    onSubmitted={handleFormSubmitted}
                  />
                );
              }

              if (
                msg.role === "assistant" &&
                msg.content === "" &&
                !streaming
              ) {
                return null;
              }

              return (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user" ? "self-end" : "self-start"
                  }`}
                  style={{
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    backgroundColor:
                      msg.role === "user" ? color : "#F3EDE4",
                    color: msg.role === "user" ? "#FAF7F2" : "#2D2A26",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {msg.content}
                  {streaming &&
                    i === messages.length - 1 &&
                    msg.role === "assistant" &&
                    msg.content === "" && (
                      <Loader2
                        size={14}
                        className="animate-spin"
                        style={{ color: "#8A8580" }}
                      />
                    )}
                </div>
              );
            })}
          </div>

          <div
            className="shrink-0 px-4 pb-4 pt-2"
            style={{ borderTop: "1px solid #E8DFD2" }}
          >
            <div
              className="flex items-end gap-2 rounded-xl px-4 py-2"
              style={{ backgroundColor: "#F3EDE4" }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask us anything..."
                rows={1}
                className="flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-charcoal-300"
                style={{
                  color: "#2D2A26",
                  fontFamily: "var(--font-body)",
                  maxHeight: "80px",
                }}
              />
              <button
                onClick={send}
                disabled={!input.trim() || streaming}
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor:
                    input.trim() && !streaming ? color : "transparent",
                }}
                aria-label="Send message"
              >
                <Send
                  size={14}
                  color={
                    input.trim() && !streaming ? "#FAF7F2" : "#8A8580"
                  }
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
