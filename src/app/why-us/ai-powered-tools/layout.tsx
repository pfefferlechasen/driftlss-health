import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Tools for Therapy Practices | Driftlss",
  description:
    "AI chatbots, phone agents, CRM integrations, and automated workflows built specifically for therapy practices. Your website works 24/7 so your team doesn't have to.",
  openGraph: {
    title: "AI-Powered Tools for Therapy Practices | Driftlss",
    description:
      "AI chatbots, phone agents, CRM integrations, and automated workflows built specifically for therapy practices.",
    url: "https://www.driftlss.com/why-us/ai-powered-tools",
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Tools for Therapy Practices | Driftlss",
    description:
      "AI chatbots, phone agents, CRM integrations, and automated workflows built specifically for therapy practices.",
    images: ["/images/share.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/ai-powered-tools",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
