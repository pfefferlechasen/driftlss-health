import { ImageResponse } from "next/og";

export const runtime = "edge";

function trimTitle(title: string): string {
  if (!title) return "Websites & AI for Therapy Practices";
  if (title.length <= 80) return title;
  return `${title.slice(0, 79).trimEnd()}…`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = trimTitle(searchParams.get("title") ?? "");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0D2A26 0%, #184D44 50%, #1F6358 100%)",
          color: "#FFFDF9",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 30,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "#3EA88E",
            }}
          />
          driftlss
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: 900,
              letterSpacing: "-0.01em",
              color: "#FFFDF9",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 26, opacity: 0.7, color: "#A8DBCC" }}>
            driftlss.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
