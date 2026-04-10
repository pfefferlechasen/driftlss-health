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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Driftlss — What Makes Us Different | Driftlss",
    description:
      "Next.js architecture, AI-powered tools, GEO visibility, and therapy-specific expertise. See why practices choose Driftlss over templates and WordPress agencies.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us",
  },
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
