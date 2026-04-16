import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Automation — Automate Your Practice Admin | Driftlss",
  description:
    "Automated appointment reminders, intake form routing, review requests, and follow-up workflows for therapy practices. Less admin work, more time with clients.",
  openGraph: {
    title: "Workflow Automation for Therapy Practices | Driftlss",
    description:
      "Automated appointment reminders, intake routing, review requests, and follow-ups. Less admin, more client time.",
    url: "https://www.driftlss.com/services/workflow-automation",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation for Therapy Practices | Driftlss",
    description:
      "Automated appointment reminders, intake routing, review requests, and follow-ups. Less admin, more client time.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/workflow-automation",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.driftlss.com/services" },
    { "@type": "ListItem", position: 3, name: "Workflow Automation", item: "https://www.driftlss.com/services/workflow-automation" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Automation",
  description:
    "Automated appointment reminders, intake form routing, review request sequences, follow-up workflows, CRM integration, and custom reporting.",
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
  serviceType: "Business Process Automation",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly gets automated?",
      acceptedAnswer: { "@type": "Answer", text: "Appointment reminders (SMS + email), intake form collection and routing, review requests after sessions, waitlist follow-ups, and re-engagement sequences for families who haven't booked in a while. We customize everything to your practice's workflow." },
    },
    {
      "@type": "Question",
      name: "Does this integrate with our EHR system?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate with most major EHR and practice management systems including TherapyNotes, SimplePractice, CentralReach, and others. If your system has an API or supports Zapier, we can connect it." },
    },
    {
      "@type": "Question",
      name: "How much does workflow automation cost?",
      acceptedAnswer: { "@type": "Answer", text: "Typically $300–$800/month depending on the number of workflows and volume of messages. We'll scope it out during a free consultation and give you a clear quote." },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: { "@type": "Answer", text: "Most practices are fully automated within 48 hours. We handle all the setup, testing, and integration. Your team just reviews and approves the messaging before we go live." },
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
