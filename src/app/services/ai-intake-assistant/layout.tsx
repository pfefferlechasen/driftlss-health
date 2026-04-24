import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Intake Chatbot for Therapy Practices | Driftlss",
  description:
    "A 24/7 AI chatbot that answers parent questions, explains your therapy services, and captures leads — even at midnight. Live in under 48 hours.",
  openGraph: {
    title: "AI Intake Chatbot for Therapy Practices | Driftlss",
    description:
      "A 24/7 AI chatbot that answers parent questions, explains your services, and captures leads.",
    url: "https://www.driftlss.com/services/ai-intake-assistant",
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Intake Chatbot for Therapy Practices | Driftlss",
    description:
      "A 24/7 AI chatbot that answers parent questions, explains your services, and captures leads.",
    images: ["/images/share.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/ai-intake-assistant",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "AI Intake Assistant", item: "https://www.driftlss.com/services/ai-intake-assistant" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Intake Assistant",
  description:
    "A 24/7 AI chatbot trained on your practice details that answers parent questions, explains services, and captures leads.",
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
  serviceType: "AI Chatbot",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will it replace my intake team?",
      acceptedAnswer: { "@type": "Answer", text: "No. It handles the repetitive questions (insurance, waitlist, location, hours) so your intake team can focus on the conversations that need a human — like walking a nervous parent through what to expect at their first visit." },
    },
    {
      "@type": "Question",
      name: "What happens when it can't answer?",
      acceptedAnswer: { "@type": "Answer", text: "If a parent asks something clinical the bot shouldn't answer, it gracefully captures their info and routes to your team." },
    },
    {
      "@type": "Question",
      name: "How is it trained?",
      acceptedAnswer: { "@type": "Answer", text: "We train it on your specific practice — your services, insurance, locations, philosophy, FAQs, and intake process." },
    },
    {
      "@type": "Question",
      name: "Can parents book appointments through it?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, if you use an online scheduling system, we can integrate direct booking." },
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
