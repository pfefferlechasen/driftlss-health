import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Speech Therapy Practices | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for SLP and speech-language pathology practices. Connect with more families online.",
  openGraph: {
    title: "Websites & AI for Speech Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for speech-language pathology practices.",
    url: "https://www.driftlss.com/industries/speech-therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Speech Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for speech-language pathology practices.",
  },
  alternates: {
    canonical: "https://www.driftlss.com/industries/speech-therapy",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites & AI for Speech Therapy Practices",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for SLP and speech-language pathology practices. Connect with more families online.",
  provider: {
    "@type": "ProfessionalService",
    name: "Driftlss",
    url: "https://www.driftlss.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Web Design & AI Automation for Speech Therapy",
  audience: {
    "@type": "Audience",
    audienceType: "Speech-Language Pathology Practices",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Speech Therapy", item: "https://www.driftlss.com/industries/speech-therapy" },
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
