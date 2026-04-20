import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Phone Agent — Never Miss a Parent's Call | Driftlss",
  description:
    "AI-powered phone agent that answers calls with your practice's voice, handles FAQs, and routes urgent calls to your team. After-hours coverage for therapy practices.",
  openGraph: {
    title: "AI Phone Agent for Therapy Practices | Driftlss",
    description:
      "AI-powered phone agent that answers calls, handles FAQs, and routes urgent calls. Never miss a parent's call.",
    url: "https://www.driftlss.com/services/ai-phone-agent",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Phone Agent for Therapy Practices | Driftlss",
    description:
      "AI-powered phone agent that answers calls, handles FAQs, and routes urgent calls. Never miss a parent's call.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/ai-phone-agent",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "AI Phone Agent", item: "https://www.driftlss.com/services/ai-phone-agent" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Phone Agent",
  description:
    "AI-powered phone agent with natural voice, after-hours call handling, FAQ handling, call routing & prioritization, and message capture.",
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
  serviceType: "AI Phone Answering",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does it actually sound natural?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We use the latest voice AI that sounds conversational, not robotic. We train it on your practice's terminology, common questions, and preferred tone. Most callers don't realize they're talking to AI." },
    },
    {
      "@type": "Question",
      name: "How does it handle emergencies?",
      acceptedAnswer: { "@type": "Answer", text: "Any call flagged as urgent — a distressed parent, a safety concern, or a request for immediate help — gets routed to your on-call team member instantly. The AI is trained to recognize urgency cues and never tries to handle emergencies itself." },
    },
    {
      "@type": "Question",
      name: "How much does the AI phone agent cost?",
      acceptedAnswer: { "@type": "Answer", text: "Typically $400–$900/month depending on call volume and customization. Most practices see a positive ROI within the first month from recovered missed calls alone." },
    },
    {
      "@type": "Question",
      name: "Does it support languages other than English?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We can configure your AI agent to handle calls in Spanish, and additional languages are available on request. Bilingual support is especially valuable for practices serving diverse communities." },
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
