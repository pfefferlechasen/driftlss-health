import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Therapy Website Preview | Driftlss",
  description:
    "Preview of a custom speech-language pathology practice website by Driftlss.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
