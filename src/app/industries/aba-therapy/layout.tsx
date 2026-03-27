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
  },
  alternates: {
    canonical: "https://www.driftlss.com/industries/aba-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
