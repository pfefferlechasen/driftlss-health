import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.driftlss.com";

  return [
    { url: base, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/practice-websites`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-intake-assistant`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/therapy-seo`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-visibility`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-phone-agent`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/workflow-automation`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/aba-therapy`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/occupational-therapy`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/speech-therapy`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/sensory-gyms`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: "2026-03-21", changeFrequency: "yearly", priority: 0.3 },
  ];
}
