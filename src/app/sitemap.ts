import { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.driftlss.com";

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: "2026-04-04", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/practice-websites`, lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-intake-assistant`, lastModified: "2026-03-22", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/therapy-seo`, lastModified: "2026-03-18", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-visibility`, lastModified: "2026-03-25", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ai-phone-agent`, lastModified: "2026-03-24", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/workflow-automation`, lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/aba-therapy`, lastModified: "2026-03-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/occupational-therapy`, lastModified: "2026-03-21", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/speech-therapy`, lastModified: "2026-03-16", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/sensory-gyms`, lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/why-us/nextjs-over-wordpress`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us/geo-ai-visibility`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us/ai-powered-tools`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us/built-for-therapy`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us/seo`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/why-us/crm-portal`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: "2026-04-04", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: "2026-03-21", changeFrequency: "yearly", priority: 0.3 },
    ...blogEntries,
  ];
}
