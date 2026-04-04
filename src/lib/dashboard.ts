const DASHBOARD_URL = process.env.DASHBOARD_URL;
const CLIENT_ID = process.env.DASHBOARD_CLIENT_ID;
const LOG_KEY = process.env.DASHBOARD_LOG_KEY;

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${LOG_KEY}`,
});

export interface ChatbotConfig {
  system_prompt: string;
  welcome_message: string;
  knowledge_base: string[];
  widget_color: string;
  widget_position: string;
  is_active: boolean;
  anonymous_visitors: boolean;
}

let configCache: { data: ChatbotConfig; fetchedAt: number } | null = null;
const CONFIG_TTL = 5 * 60 * 1000;

export async function fetchChatbotConfig(): Promise<ChatbotConfig | null> {
  if (!DASHBOARD_URL || !CLIENT_ID || !LOG_KEY) return null;

  if (configCache && Date.now() - configCache.fetchedAt < CONFIG_TTL) {
    return configCache.data;
  }

  try {
    const res = await fetch(
      `${DASHBOARD_URL}/api/chatbot/config?client_id=${CLIENT_ID}`,
      { headers: { Authorization: `Bearer ${LOG_KEY}` } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    configCache = { data, fetchedAt: Date.now() };
    return data;
  } catch {
    return null;
  }
}

export async function logConversation(body: Record<string, unknown>) {
  if (!DASHBOARD_URL || !LOG_KEY) return;

  try {
    await fetch(`${DASHBOARD_URL}/api/chatbot/log`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ client_id: CLIENT_ID, ...body }),
    });
  } catch (err) {
    console.error("Chatbot log failed:", err);
  }
}

export async function logChatbotError(body: Record<string, unknown>) {
  if (!DASHBOARD_URL || !LOG_KEY) return;

  try {
    await fetch(`${DASHBOARD_URL}/api/chatbot/error`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ client_id: CLIENT_ID, ...body }),
    });
  } catch (err) {
    console.error("Chatbot error log failed:", err);
  }
}
