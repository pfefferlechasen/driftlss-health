import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for ABA Therapy Clinics | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for ABA therapy clinics. Help more families find your practice and streamline intake.",
  openGraph: {
    title: "Websites & AI for ABA Therapy Clinics | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for ABA therapy clinics.",
    url: "https://www.driftlss.com/industries/aba-therapy",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for ABA Therapy Clinics | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for ABA therapy clinics.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/industries/aba-therapy",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites & AI for ABA Therapy Clinics",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for ABA therapy clinics. Help more families find your practice and streamline intake.",
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
  serviceType: "Web Design & AI Automation for ABA Therapy",
  audience: {
    "@type": "Audience",
    audienceType: "ABA Therapy Clinics",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "ABA Therapy", item: "https://www.driftlss.com/industries/aba-therapy" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an ABA practice website cost?",
      acceptedAnswer: { "@type": "Answer", text: "Custom ABA practice websites start at $3,000 depending on the number of pages, features like AI chatbot integration, and whether you need custom insurance guides. We'll give you a clear quote after a free 15-minute call." },
    },
    {
      "@type": "Question",
      name: "Can you help us manage our waitlist online?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We build online intake forms and AI-powered chatbots that qualify families, collect the right information upfront, and add them to your waitlist automatically — no more phone tag." },
    },
    {
      "@type": "Question",
      name: "What should our insurance page include?",
      acceptedAnswer: { "@type": "Answer", text: "We build insurance pages that explain coverage in plain language, list accepted plans, walk parents through the authorization process, and answer common funding questions — all designed to reduce your intake team's workload." },
    },
    {
      "@type": "Question",
      name: "Is the website HIPAA compliant?",
      acceptedAnswer: { "@type": "Answer", text: "We don't store protected health information on the website itself. Contact forms and chatbots are configured to collect only non-PHI intake information. For anything requiring HIPAA compliance, we integrate with your existing secure systems." },
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
