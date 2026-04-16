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
    images: [{ url: "/api/og?title=Data-Driven%20SEO%20%26%20Analytics%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data-Driven SEO & Analytics | Driftlss",
    description:
      "Google Search Console, GA4, Semrush, keyword tracking — we handle all of it so you can focus on helping kids.",
    images: ["/api/og?title=Data-Driven%20SEO%20%26%20Analytics%20%7C%20Driftlss"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/seo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
