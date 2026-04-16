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
    images: [{ url: "/api/og?title=Why%20We%20Build%20on%20Next.js%2C%20Not%20WordPress%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Build on Next.js, Not WordPress | Driftlss",
    description:
      "Next.js sites captured 70% of all AI citations in our 99-site study. Faster load times, better architecture, and zero plugin bloat.",
    images: ["/api/og?title=Why%20We%20Build%20on%20Next.js%2C%20Not%20WordPress%20%7C%20Driftlss"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/nextjs-over-wordpress",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
