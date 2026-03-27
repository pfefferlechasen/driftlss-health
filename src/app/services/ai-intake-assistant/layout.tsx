import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Intake Assistant — 24/7 Chatbot for Therapy Practices | Driftlss",
  description:
    "A 24/7 AI chatbot that answers parent questions, explains your therapy services, and captures leads — even at midnight. Live in under 48 hours.",
  openGraph: {
    title: "AI Intake Assistant for Therapy Practices | Driftlss",
    description:
      "A 24/7 AI chatbot that answers parent questions, explains your services, and captures leads for your therapy practice.",
    url: "https://www.driftlss.com/services/ai-intake-assistant",
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/ai-intake-assistant",
  },
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
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "AI Chatbot",
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
