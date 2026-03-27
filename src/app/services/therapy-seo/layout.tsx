import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO for Therapy Practices — Get Found by Families | Driftlss",
  description:
    "Therapy-specific SEO so your practice ranks first when families search 'ABA therapy near me' or 'occupational therapy for kids.' Keyword research, technical SEO, content strategy, and Google Business Profile optimization.",
  openGraph: {
    title: "SEO for Therapy Practices | Driftlss",
    description:
      "Therapy-specific SEO so your practice ranks first when families search for services near them.",
    url: "https://driftlss.com/services/therapy-seo",
  },
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
    url: "https://driftlss.com",
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
      {children}
    </>
  );
}
