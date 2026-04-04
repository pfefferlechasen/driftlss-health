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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for ABA Therapy Clinics | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for ABA therapy clinics.",
    images: ["/opengraph-image"],
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
