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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy SEO — Get Found by Families | Driftlss",
    description:
      "Therapy-specific SEO so your practice ranks when families search for services near them.",
    images: ["/opengraph-image"],
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long until I see results?",
      acceptedAnswer: { "@type": "Answer", text: "SEO is a long game — meaningful ranking improvements typically take 3–6 months. But within 30 days you'll see your content indexed and early movement on long-tail therapy keywords." },
    },
    {
      "@type": "Question",
      name: "Do you understand therapy-specific keywords?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We know the difference between how a BCBA searches and how a parent searches. We optimize for both — clinical professionals who might refer, and the families looking for help." },
    },
    {
      "@type": "Question",
      name: "Do I need to write blog posts?",
      acceptedAnswer: { "@type": "Answer", text: "No. We handle the content strategy and writing. We just need your clinical expertise for accuracy." },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
