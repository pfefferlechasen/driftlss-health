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
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Speech Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for speech-language pathology practices.",
    images: ["/opengraph-image.png"],
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an SLP practice website cost?",
      acceptedAnswer: { "@type": "Answer", text: "Custom SLP practice websites start at $3,000 depending on the number of service pages, teletherapy booking integration, and AI chatbot features. We'll give you a clear quote after a free 15-minute call." },
    },
    {
      "@type": "Question",
      name: "Can you integrate telehealth booking?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We build dedicated teletherapy pages with online scheduling that connects to your existing booking system — making it easy for parents to book virtual sessions without a phone call." },
    },
    {
      "@type": "Question",
      name: "What about parent resources and milestones content?",
      acceptedAnswer: { "@type": "Answer", text: "We create parent-facing milestone guides, downloadable resources, and blog-style content that positions your practice as the local expert in speech-language development — and helps you rank in search results." },
    },
    {
      "@type": "Question",
      name: "Can you build the site in multiple languages?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We can build bilingual or multilingual versions of your key pages to reach more families in your community. This is especially valuable for practices in diverse areas." },
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
