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
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Websites for Therapy Clinics | Driftlss",
    description:
      "Custom websites that convert visitors into booked intakes for therapy practices.",
    images: ["/images/share.png"],
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
      addressLocality: "Appleton",
      addressRegion: "WI",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Web Design",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I own the website?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, you own everything. We build on your domain, your hosting. It's yours from day one." },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: { "@type": "Answer", text: "Most therapy practices have a Wix or Squarespace template that looks like every other clinic in town. We rebuild it to reflect YOUR practice's unique approach and philosophy." },
    },
    {
      "@type": "Question",
      name: "Can I update it myself?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we can set up a simple CMS for adding new therapist bios, updating insurance lists, posting parent resources." },
    },
    {
      "@type": "Question",
      name: "How much does a practice website cost?",
      acceptedAnswer: { "@type": "Answer", text: "Custom practice websites start at $3,000 depending on pages, features, and complexity. We'll give you a clear quote after learning about your practice." },
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
