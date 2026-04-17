import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why We Build on Next.js, Not WordPress | Driftlss",
  description:
    "Next.js sites captured 70% of all AI citations in our 99-site study. Faster load times, better architecture, and zero plugin bloat. Here's why it matters for your practice.",
  openGraph: {
    title: "Why We Build on Next.js, Not WordPress | Driftlss",
    description:
      "Next.js sites captured 70% of all AI citations in our 99-site study. Faster load times, better architecture, and zero plugin bloat.",
    url: "https://www.driftlss.com/why-us/nextjs-over-wordpress",
    images: [{ url: "/images/pages/next-vs-word/nextjswordpress.png", width: 1030, height: 630, alt: "WordPress vs Next.js — It's time to move on" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Build on Next.js, Not WordPress | Driftlss",
    description:
      "Next.js sites captured 70% of all AI citations in our 99-site study. Faster load times, better architecture, and zero plugin bloat.",
    images: ["/images/pages/next-vs-word/nextjswordpress.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/nextjs-over-wordpress",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
