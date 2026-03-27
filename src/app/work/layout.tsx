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
  },
  alternates: {
    canonical: "https://www.driftlss.com/work",
  },
  twitter: {
    title: "Our Work — Case Studies & Results | Driftlss",
    description:
      "See how we've helped therapy practices grow with custom websites, AI chatbots, and automation. Real results, real practices.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
