import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import LazyChat from "./components/LazyChat";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.driftlss.com"),
  title: {
    default: "Driftlss — Websites & AI for Therapy Practices",
    template: "%s",
  },
  description:
    "We build websites, AI chatbots, and automation systems specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
    streetAddress: "N3456 Oakwood Ave",
    addressLocality: "New London",
    addressRegion: "WI",
    postalCode: "54961",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2",
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
    <html lang="en" className={`${dmSerif.variable} ${outfit.variable}`}>
      <head>
        <meta name="websitelaunches-verification" content="452a77593aebd8a8bef37724f390dc64" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18003204142"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18003204142');
            gtag('config', 'G-MT2N4HWYGW');
          `}
        </Script>
      </head>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <LazyChat />
        <Analytics />
      </body>
    </html>
  );
}
