const DASHBOARD_URL = process.env.DASHBOARD_URL;

export function postLeadWebhook(
  platform: string,
  data: Record<string, unknown>
) {
  if (!DASHBOARD_URL) return;

  fetch(`${DASHBOARD_URL}/api/webhooks/driftlss/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-platform": platform,
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.error("Lead webhook failed:", err);
  });
}
