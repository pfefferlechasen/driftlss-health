import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Results | Driftlss",
  description:
    "See how we've helped therapy practices and pediatric care centers grow with custom websites, AI chatbots, and automation systems. Real results, real practices.",
  openGraph: {
    title: "Our Work — Case Studies & Results | Driftlss",
    description:
      "See how we've helped therapy practices grow with custom websites, AI chatbots, and automation. Real results, real practices.",
    url: "https://www.driftlss.com/work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  alternates: {
    canonical: "https://www.driftlss.com/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Case Studies & Results | Driftlss",
    description:
      "See how we've helped therapy practices grow with custom websites, AI chatbots, and automation. Real results, real practices.",
    images: ["/opengraph-image"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
