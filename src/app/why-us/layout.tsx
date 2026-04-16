import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Driftlss — What Makes Us Different | Driftlss",
  description:
    "Next.js architecture, AI-powered tools, GEO visibility, and therapy-specific expertise. See why practices choose Driftlss over templates and WordPress agencies.",
  openGraph: {
    title: "Why Driftlss — What Makes Us Different | Driftlss",
    description:
      "Next.js architecture, AI-powered tools, GEO visibility, and therapy-specific expertise. See why practices choose Driftlss over templates and WordPress agencies.",
    url: "https://www.driftlss.com/why-us",
    images: [{ url: "/api/og?title=Why%20Driftlss%20%E2%80%94%20What%20Makes%20Us%20Different%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Driftlss — What Makes Us Different | Driftlss",
    description:
      "Next.js architecture, AI-powered tools, GEO visibility, and therapy-specific expertise. See why practices choose Driftlss over templates and WordPress agencies.",
    images: ["/api/og?title=Why%20Driftlss%20%E2%80%94%20What%20Makes%20Us%20Different%20%7C%20Driftlss"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us",
  },
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
