import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupational Therapy Website Preview | Driftlss",
  description:
    "Preview of a custom occupational therapy practice website by Driftlss.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
