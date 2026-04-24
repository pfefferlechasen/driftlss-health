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
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO & AI Visibility for Therapy Practices | Driftlss",
    description:
      "Generative Engine Optimization ensures your practice gets cited by ChatGPT, Claude, and Google AI Overviews.",
    images: ["/images/share.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/geo-ai-visibility",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
