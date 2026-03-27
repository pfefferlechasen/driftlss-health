import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABA Therapy Website Preview | Driftlss",
  description: "Preview of a custom ABA therapy practice website by Driftlss.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
