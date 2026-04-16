import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Built Exclusively for Therapy Practices | Driftlss",
  description:
    "We don't build websites for restaurants and law firms on the side. Every design, feature, and strategy is informed by how therapy practices operate and how families choose one.",
  openGraph: {
    title: "Built Exclusively for Therapy Practices | Driftlss",
    description:
      "Every design, feature, and strategy is informed by how therapy practices operate and how families choose one.",
    url: "https://www.driftlss.com/why-us/built-for-therapy",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Exclusively for Therapy Practices | Driftlss",
    description:
      "Every design, feature, and strategy is informed by how therapy practices operate and how families choose one.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/built-for-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
