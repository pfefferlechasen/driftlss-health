import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Practice Audit | Driftlss",
  description:
    "Get a free 15-minute audit of your therapy practice's online presence. We'll show you exactly where families are falling off and how to fix it.",
  openGraph: {
    title: "Contact Us — Book a Free Practice Audit | Driftlss",
    description:
      "Get a free 15-minute audit of your therapy practice's online presence. See where families are falling off.",
    url: "https://www.driftlss.com/contact",
    images: [{ url: "/api/og?title=Contact%20Us%20%E2%80%94%20Book%20a%20Free%20Practice%20Audit%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  alternates: {
    canonical: "https://www.driftlss.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Book a Free Practice Audit | Driftlss",
    description:
      "Get a free 15-minute audit of your therapy practice's online presence. See where families are falling off.",
    images: ["/api/og?title=Contact%20Us%20%E2%80%94%20Book%20a%20Free%20Practice%20Audit%20%7C%20Driftlss"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a therapy practice website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom websites start at $3,000. Website + AI chatbot bundles start at $4,000. Monthly retainers for ongoing growth run $300–$700.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most practice websites go live within days, not weeks. AI chatbots can be live in under 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "None. We've built for clinic directors who barely have time to check email. You focus on your clients — we handle everything technical.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No long-term contracts. We earn your business every month.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
