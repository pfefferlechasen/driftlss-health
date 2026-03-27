import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Websites & AI for Therapy Practices | Driftlss",
  description:
    "Custom websites, AI chatbots, SEO, GEO/AI visibility, workflow automation, and AI phone agents built exclusively for ABA clinics, OT/PT practices, SLP centers, and sensory gyms.",
  openGraph: {
    title: "Services — Websites & AI for Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, SEO, GEO, automation, and AI phone agents built exclusively for therapy practices.",
    url: "https://www.driftlss.com/services",
  },
  alternates: {
    canonical: "https://www.driftlss.com/services",
  },
  twitter: {
    title: "Services — Websites & AI for Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, SEO, GEO, automation, and AI phone agents built exclusively for therapy practices.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
