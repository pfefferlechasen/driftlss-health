import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Driftless — Websites & AI for Therapy Practices",
  description:
    "We build websites, AI chatbots, and automation systems specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  icons: {
    icon: [
      { url: "/driftlss-app-icon-static.svg", type: "image/svg+xml" },
    ],
    apple: "/driftlss-app-icon-static.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
