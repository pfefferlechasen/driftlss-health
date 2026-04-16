import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom CRM Portal for Therapy Practices | Driftlss",
  description:
    "A fully customizable CRM dashboard built around your practice. Lead pipelines, staff management, chatbot transcripts, ad analytics, custom reports — all in one place.",
  openGraph: {
    title: "Custom CRM Portal for Therapy Practices | Driftlss",
    description:
      "A fully customizable CRM dashboard built around your practice. Lead pipelines, staff management, analytics, and more.",
    url: "https://www.driftlss.com/why-us/crm-portal",
    images: [{ url: "/api/og?title=Custom%20CRM%20Portal%20for%20Therapy%20Practices%20%7C%20Driftlss", width: 1200, height: 630, alt: "Driftlss — Websites & AI for Therapy Practices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Portal for Therapy Practices | Driftlss",
    description:
      "A fully customizable CRM dashboard built around your practice. Lead pipelines, staff management, analytics, and more.",
    images: ["/api/og?title=Custom%20CRM%20Portal%20for%20Therapy%20Practices%20%7C%20Driftlss"],
  },
  alternates: {
    canonical: "https://www.driftlss.com/why-us/crm-portal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
