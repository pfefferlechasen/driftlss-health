import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.driftlss.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Driftlss`,
    description: post.desc,
    openGraph: {
      title: `${post.title} | Driftlss`,
      description: post.desc,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Driftlss`,
      description: post.desc,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return <>{children}</>;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.desc,
    datePublished: parseDate(post.date),
    dateModified: parseDate(post.date),
    author: {
      "@type": "Person",
      name: "Matthew Lutz",
      url: "https://www.driftlss.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Driftlss",
      url: "https://www.driftlss.com",
    },
    mainEntityOfPage: `https://www.driftlss.com/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.driftlss.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.driftlss.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.driftlss.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

function parseDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split("T")[0];
}
