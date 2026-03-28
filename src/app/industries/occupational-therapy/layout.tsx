import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Occupational Therapy Practices | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for OT and pediatric occupational therapy practices. Help families find and choose your clinic.",
  openGraph: {
    title: "Websites & AI for Occupational Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for occupational therapy practices.",
    url: "https://www.driftlss.com/industries/occupational-therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Occupational Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for occupational therapy practices.",
  },
  alternates: {
    canonical: "https://www.driftlss.com/industries/occupational-therapy",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites & AI for Occupational Therapy Practices",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for OT and pediatric occupational therapy practices. Help families find and choose your clinic.",
  provider: {
    "@type": "ProfessionalService",
    name: "Driftlss",
    url: "https://www.driftlss.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Web Design & AI Automation for Occupational Therapy",
  audience: {
    "@type": "Audience",
    audienceType: "Occupational Therapy Practices",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Occupational Therapy", item: "https://www.driftlss.com/industries/occupational-therapy" },
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
      {children}
    </>
  );
}
