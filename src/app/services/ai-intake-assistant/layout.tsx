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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Intake Chatbot for Therapy Practices | Driftlss",
    description:
      "A 24/7 AI chatbot that answers parent questions, explains your services, and captures leads.",
    images: ["/opengraph-image"],
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
      streetAddress: "N3456 Oakwood Ave",
      addressLocality: "New London",
      addressRegion: "WI",
      postalCode: "54961",
      addressCountry: "US",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
