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
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  alternates: {
    canonical: "https://www.driftlss.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Websites & AI for Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, SEO, GEO, automation, and AI phone agents built exclusively for therapy practices.",
    images: ["/images/share.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
