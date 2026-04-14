import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Driftlss — Websites & AI for Therapy Practices",
  description:
    "Answers to common questions about pricing, timelines, AI tools, and working with Driftlss. Custom websites for therapy practices starting at $3,000.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
