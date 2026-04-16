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
    images: [{ url: "/api/og?title=Our%20Work%20%E2%80%94%20Case%20Studies%20%26%20Results%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  alternates: {
    canonical: "https://www.driftlss.com/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Case Studies & Results | Driftlss",
    description:
      "See how we've helped therapy practices grow with custom websites, AI chatbots, and automation. Real results, real practices.",
    images: ["/api/og?title=Our%20Work%20%E2%80%94%20Case%20Studies%20%26%20Results%20%7C%20Driftlss"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
