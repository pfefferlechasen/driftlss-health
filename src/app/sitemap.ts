import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.driftlss.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/practice-websites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-intake-assistant`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/therapy-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-visibility`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-phone-agent`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/workflow-automation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/aba-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/occupational-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/speech-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/sensory-gyms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
