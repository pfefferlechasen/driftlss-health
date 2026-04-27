import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import LazyChat from "./components/LazyChat";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import ConsentBanner from "@/components/ConsentBanner";

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
        url: "/images/share.png",
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
    images: ["/images/share.png"],
  },
  alternates: {
    canonical: "https://www.driftlss.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Driftlss",
  url: "https://www.driftlss.com",
  logo: "https://www.driftlss.com/driftlss-app-icon-static.svg",
  email: "admin@driftlss.com",
  telephone: "+19208731960",
  description:
    "Websites, AI chatbots, and automation systems built specifically for ABA clinics, OT/PT practices, SLP centers, and pediatric therapy businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Appleton",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [
    "https://www.linkedin.com/company/driftlss",
    "https://www.facebook.com/profile.php?id=61572115589299",
    "https://www.pinterest.com/driftlss/",
    "https://www.instagram.com/driftlssagency/",
  ],
  priceRange: "$$",
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
        <meta name="p:domain_verify" content="20c26bcae696d5d6abc6d797008142f7" />
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
              analytics_storage: 'granted',
            });
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB','CH','US-CA','US-CO','US-CT','US-VA','US-UT','US-TX','US-OR','US-MT','US-DE','US-IA','US-NH','US-NJ','US-MN','US-MD','US-RI','US-TN','US-IN','US-KY','US-NE'],
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18003204142"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-18003204142');
            gtag('config', 'G-MT2N4HWYGW');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2401137623683288');
            var needsConsent = document.cookie.indexOf('needs-consent=1') > -1;
            var stored = null;
            try { stored = localStorage.getItem('driftlss-consent-v1'); } catch (e) {}
            if (needsConsent && stored !== 'granted') {
              fbq('consent', 'revoke');
            }
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2401137623683288&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <AnalyticsEvents />
        <ConsentBanner />
        <LazyChat />
        <Analytics />
      </body>
    </html>
  );
}
