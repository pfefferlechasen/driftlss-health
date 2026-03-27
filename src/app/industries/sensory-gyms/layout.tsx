import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Sensory Gyms | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric sensory facilities. Showcase your space and fill your schedule.",
  openGraph: {
    title: "Websites & AI for Sensory Gyms | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for sensory gyms and pediatric facilities.",
    url: "https://driftlss.com/industries/sensory-gyms",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
