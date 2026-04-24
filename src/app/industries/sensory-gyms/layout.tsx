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
    images: [{ url: "/images/share.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & AI for Sensory Gyms | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric facilities.",
    images: ["/images/share.png"],
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Appleton",
      addressRegion: "WI",
      addressCountry: "US",
    },
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a sensory gym website cost?",
      acceptedAnswer: { "@type": "Answer", text: "Custom sensory gym websites start at $3,000 depending on program pages, virtual tour integration, and online booking features. We'll give you a clear quote after a free 15-minute call." },
    },
    {
      "@type": "Question",
      name: "Can you add a virtual tour to our site?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We integrate 360-degree virtual tours, video walkthroughs, and immersive photo galleries that showcase your space in a way that static images never could." },
    },
    {
      "@type": "Question",
      name: "What about online booking integration?",
      acceptedAnswer: { "@type": "Answer", text: "We build integrated scheduling systems for classes, open gym, birthday parties, and private sessions — connected to your existing calendar so families can book instantly without calling." },
    },
    {
      "@type": "Question",
      name: "How do we showcase all our different equipment?",
      acceptedAnswer: { "@type": "Answer", text: "We create dedicated sections highlighting your equipment — swings, climbing walls, ball pits, trampolines — with photos, descriptions, and explanations of how each supports sensory development." },
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
