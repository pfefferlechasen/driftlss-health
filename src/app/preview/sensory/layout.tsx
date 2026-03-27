import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensory Gym Website Preview | Driftlss",
  description:
    "Preview of a custom sensory gym website by Driftlss.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
