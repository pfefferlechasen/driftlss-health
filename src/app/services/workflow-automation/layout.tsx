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
  },
  alternates: {
    canonical: "https://www.driftlss.com/services/workflow-automation",
  },
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
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Business Process Automation",
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
