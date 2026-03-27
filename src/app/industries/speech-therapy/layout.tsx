import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Speech Therapy Practices | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for SLP and speech-language pathology practices. Connect with more families online.",
  openGraph: {
    title: "Websites & AI for Speech Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for speech-language pathology practices.",
    url: "https://driftlss.com/industries/speech-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
