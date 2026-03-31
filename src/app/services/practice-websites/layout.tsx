import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Websites for Therapy Clinics | Driftlss",
  description:
    "Custom websites that showcase your therapy team and convert visitors into booked intakes. Built for ABA, OT, SLP, and pediatric practices.",
  openGraph: {
    title: "Practice Websites for Therapy Clinics | Driftlss",
    description:
      "Custom websites that convert visitors into booked intakes for therapy practices.",
    url: "https://www.driftlss.com/services/practice-websites",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Websites for Therapy Clinics | Driftlss",
    description:
      "Custom websites that convert visitors into booked intakes for therapy practices.",
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/practice-websites",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "Practice Websites", item: "https://www.driftlss.com/services/practice-websites" },
  ],
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
  serviceType: "Web Design",
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
