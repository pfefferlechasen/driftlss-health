import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://driftlss.com"),
  title: "Driftlss — Websites & AI for Therapy Practices",
  description:
    "We build websites, AI chatbots, and automation systems specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  icons: {
    icon: [
      { url: "/driftlss-app-icon-static.svg", type: "image/svg+xml" },
    ],
    apple: "/driftlss-app-icon-static.svg",
  },
  openGraph: {
    title: "Driftlss — Websites & AI for Therapy Practices",
    description: "Premium websites, AI-powered tools, and growth systems built exclusively for pediatric therapy practices.",
    url: "https://driftlss.com",
    siteName: "Driftlss",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftlss — Websites & AI for Therapy Practices",
    description: "Premium websites, AI-powered tools, and growth systems built exclusively for pediatric therapy practices.",
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
      <body className="grain">
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
