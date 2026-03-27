import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Websites — Custom Sites for Therapy Practices | Driftlss",
  description:
    "Custom-designed, fast-loading websites that showcase your therapy team, services, and philosophy. Built to convert visitors into booked intakes for ABA, OT, SLP, and pediatric practices.",
  openGraph: {
    title: "Practice Websites for Therapy Practices | Driftlss",
    description:
      "Custom-designed websites built to convert visitors into booked intakes for therapy practices.",
    url: "https://www.driftlss.com/services/practice-websites",
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/practice-websites",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practice Website Design & Development",
  description:
    "Custom-designed, fast-loading websites that showcase your therapy team, services, and philosophy. Built to convert visitors into booked intakes.",
  provider: {
    "@type": "ProfessionalService",
    name: "Driftlss",
    url: "https://www.driftlss.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Web Design",
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
