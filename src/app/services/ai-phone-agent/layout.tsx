import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Phone Agent — Never Miss a Parent's Call | Driftlss",
  description:
    "AI-powered phone agent that answers calls with your practice's voice, handles FAQs, and routes urgent calls to your team. After-hours coverage for therapy practices.",
  openGraph: {
    title: "AI Phone Agent for Therapy Practices | Driftlss",
    description:
      "AI-powered phone agent that answers calls, handles FAQs, and routes urgent calls. Never miss a parent's call.",
    url: "https://driftlss.com/services/ai-phone-agent",
  },
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
    url: "https://driftlss.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "AI Phone Answering",
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
