import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO & AI Visibility for Therapy Practices | Driftlss",
  description:
    "Generative Engine Optimization ensures your practice gets cited by ChatGPT, Claude, and Google AI Overviews. Traditional SEO isn't enough anymore.",
  openGraph: {
    title: "GEO & AI Visibility for Therapy Practices | Driftlss",
    description:
      "Generative Engine Optimization ensures your practice gets cited by ChatGPT, Claude, and Google AI Overviews.",
    url: "https://www.driftlss.com/why-us/geo-ai-visibility",
    images: [{ url: "/api/og?title=GEO%20%26%20AI%20Visibility%20for%20Therapy%20Practices%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO & AI Visibility for Therapy Practices | Driftlss",
    description:
      "Generative Engine Optimization ensures your practice gets cited by ChatGPT, Claude, and Google AI Overviews.",
    images: ["/api/og?title=GEO%20%26%20AI%20Visibility%20for%20Therapy%20Practices%20%7C%20Driftlss"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/geo-ai-visibility",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
