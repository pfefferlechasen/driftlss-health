import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data-Driven SEO & Analytics | Driftlss",
  description:
    "Google Search Console, GA4, Semrush, keyword tracking — we handle all of it so you can focus on helping kids. Zero guesswork SEO for therapy practices.",
  openGraph: {
    title: "Data-Driven SEO & Analytics | Driftlss",
    description:
      "Google Search Console, GA4, Semrush, keyword tracking — we handle all of it so you can focus on helping kids.",
    url: "https://www.driftlss.com/why-us/seo",
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data-Driven SEO & Analytics | Driftlss",
    description:
      "Google Search Console, GA4, Semrush, keyword tracking — we handle all of it so you can focus on helping kids.",
    images: ["/images/share.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/seo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
