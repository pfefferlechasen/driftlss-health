import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy SEO — Get Found by Families | Driftlss",
  description:
    "Therapy-specific SEO so your practice ranks when families search for ABA, OT, or SLP near them. Keyword research, technical SEO, and content strategy.",
  openGraph: {
    title: "Therapy SEO — Get Found by Families | Driftlss",
    description:
      "Therapy-specific SEO so your practice ranks when families search for services near them.",
    url: "https://www.driftlss.com/services/therapy-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy SEO — Get Found by Families | Driftlss",
    description:
      "Therapy-specific SEO so your practice ranks when families search for services near them.",
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/therapy-seo",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "Therapy SEO", item: "https://www.driftlss.com/services/therapy-seo" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO for Therapy Practices",
  description:
    "Therapy-specific keyword research, technical SEO, content strategy, Google Business Profile optimization, and monthly reporting.",
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
  serviceType: "Search Engine Optimization",
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
