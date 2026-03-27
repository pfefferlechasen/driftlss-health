import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Driftlss — Websites & AI for Therapy Practices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Driftlss
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.4,
              maxWidth: 800,
            }}
          >
            Websites & AI for Therapy Practices
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              marginTop: 32,
              letterSpacing: "0.05em",
            }}
          >
            driftlss.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
