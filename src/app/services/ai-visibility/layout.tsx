import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO & AI Visibility — Get Recommended by AI | Driftlss",
  description:
    "Generative Engine Optimization for therapy practices. Get your practice recommended when parents ask ChatGPT, Perplexity, or Google AI for therapy providers.",
  openGraph: {
    title: "GEO & AI Visibility for Therapy Practices | Driftlss",
    description:
      "Get your practice recommended when parents ask ChatGPT, Perplexity, or Google AI for therapy providers.",
    url: "https://www.driftlss.com/services/ai-visibility",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO & AI Visibility for Therapy Practices | Driftlss",
    description:
      "Get your practice recommended when parents ask ChatGPT, Perplexity, or Google AI for therapy providers.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/ai-visibility",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "GEO & AI Visibility", item: "https://www.driftlss.com/services/ai-visibility" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO & AI Visibility",
  description:
    "Generative Engine Optimization — AI platform audit, schema & structured data, citation building, provider directory listings, and AI-optimized content.",
  provider: {
    "@type": "ProfessionalService",
    name: "Driftlss",
    url: "https://www.driftlss.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "N3456 Oakwood Ave",
      addressLocality: "New London",
      addressRegion: "WI",
      postalCode: "54961",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Generative Engine Optimization",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
