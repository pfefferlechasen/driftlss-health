import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights for Therapy Practice Growth | Driftlss",
  description:
    "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for ABA clinics, OT practices, SLP centers, and pediatric therapy businesses.",
  openGraph: {
    title: "Blog — Insights for Therapy Practice Growth | Driftlss",
    description:
      "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for therapy practices.",
    url: "https://driftlss.com/blog",
  },
  twitter: {
    title: "Blog — Insights for Therapy Practice Growth | Driftlss",
    description:
      "Practical marketing tips, SEO strategies, AI guides, and growth insights built specifically for therapy practices.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
