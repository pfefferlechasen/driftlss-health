import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights for Therapy Practice Growth | Driftlss",
  description:
    "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for ABA clinics, OT practices, SLP centers, and pediatric therapy businesses.",
  openGraph: {
    title: "Blog — Insights for Therapy Practice Growth | Driftlss",
    description:
      "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for therapy practices.",
    url: "https://www.driftlss.com/blog",
    images: [{ url: "/api/og?title=Blog%20%E2%80%94%20Insights%20for%20Therapy%20Practice%20Growth%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  alternates: {
    canonical: "https://www.driftlss.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Insights for Therapy Practice Growth | Driftlss",
    description:
      "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for therapy practices.",
    images: ["/api/og?title=Blog%20%E2%80%94%20Insights%20for%20Therapy%20Practice%20Growth%20%7C%20Driftlss"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
