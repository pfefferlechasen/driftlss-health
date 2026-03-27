import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & AI for Occupational Therapy Practices | Driftlss",
  description:
    "Custom websites, AI chatbots, and growth systems built specifically for OT and pediatric occupational therapy practices. Help families find and choose your clinic.",
  openGraph: {
    title: "Websites & AI for Occupational Therapy Practices | Driftlss",
    description:
      "Custom websites, AI chatbots, and growth systems built specifically for occupational therapy practices.",
    url: "https://driftlss.com/industries/occupational-therapy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
