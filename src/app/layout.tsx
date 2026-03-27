import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.driftlss.com"),
  title: {
    default: "Driftlss — Websites & AI for Therapy Practices",
    template: "%s",
  },
  description:
    "We build websites, AI chatbots, and automation systems specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  icons: {
    icon: [
      { url: "/driftlss-app-icon-static.svg", type: "image/svg+xml" },
    ],
    apple: "/driftlss-app-icon-static.svg",
  },
  openGraph: {
    title: "Driftlss — Websites & AI for Therapy Practices",
    description: "Premium websites, AI-powered tools, and growth systems built exclusively for pediatric therapy practices.",
    url: "https://www.driftlss.com",
    siteName: "Driftlss",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Driftlss — Websites & AI for Therapy Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftlss — Websites & AI for Therapy Practices",
    description: "Premium websites, AI-powered tools, and growth systems built exclusively for pediatric therapy practices.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Driftlss",
  url: "https://www.driftlss.com",
  logo: "https://www.driftlss.com/driftlss-app-icon-static.svg",
  email: "admin@driftlss.com",
  telephone: "+18486660694",
  description:
    "Websites, AI chatbots, and automation systems built specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Crosse",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Therapy Practice Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Practice Website Design & Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Intake Assistant" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SEO for Therapy Practices" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "GEO & AI Visibility" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Workflow Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Phone Agent" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
