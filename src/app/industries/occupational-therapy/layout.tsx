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
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Occupational Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for occupational therapy practices.",
    images: ["/images/share.png"],
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Appleton",
      addressRegion: "WI",
      addressCountry: "US",
    },
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do we explain OT services online?",
      acceptedAnswer: { "@type": "Answer", text: "We write service pages in parent-friendly language that connect your clinical expertise to real-world concerns — things like 'my child can't hold a pencil' or 'my toddler won't eat solid foods.' We meet parents where they are." },
    },
    {
      "@type": "Question",
      name: "How much does an OT practice website cost?",
      acceptedAnswer: { "@type": "Answer", text: "Custom OT practice websites start at $3,000 depending on the number of service pages, features like virtual tours, and AI chatbot integration. We'll give you a clear quote after a free 15-minute call." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build?",
      acceptedAnswer: { "@type": "Answer", text: "Most OT practice websites go live within days, not weeks. We move fast because we've built this exact type of site before — we know the content structure, the features, and the design patterns that work." },
    },
    {
      "@type": "Question",
      name: "Can you help with insurance questions on the site?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We build dedicated insurance pages that list your accepted plans, explain the referral process, and help parents understand coverage — reducing the number of phone calls your front desk handles." },
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
