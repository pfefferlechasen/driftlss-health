import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Sensory Gyms | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric sensory facilities. Showcase your space and fill your schedule.",
  openGraph: {
    title: "Websites & AI for Sensory Gyms | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric facilities.",
    url: "https://www.driftlss.com/industries/sensory-gyms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Sensory Gyms | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric facilities.",
  },
  alternates: {
    canonical: "https://www.driftlss.com/industries/sensory-gyms",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites & AI for Sensory Gyms",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric sensory facilities. Showcase your space and fill your schedule.",
  provider: {
    "@type": "ProfessionalService",
    name: "Driftlss",
    url: "https://www.driftlss.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Web Design & AI Automation for Sensory Gyms",
  audience: {
    "@type": "Audience",
    audienceType: "Sensory Gyms & Pediatric Sensory Facilities",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Sensory Gyms", item: "https://www.driftlss.com/industries/sensory-gyms" },
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
