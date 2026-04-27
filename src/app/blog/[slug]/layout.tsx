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
  const image = post.ogImage ?? "/images/share.png";
  const imageAlt =
    post.ogImageAlt ??
    (post.ogImage ? post.title : "Driftlss — Websites & AI for Therapy Practices");

  return {
    title: `${post.title} | Driftlss`,
    description: post.desc,
    openGraph: {
      title: `${post.title} | Driftlss`,
      description: post.desc,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Driftlss`,
      description: post.desc,
      images: [image],
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
    "@type": "BlogPosting",
    headline: post.title,
    description: post.desc,
    image: post.ogImage ? `https://www.driftlss.com${post.ogImage}` : "https://www.driftlss.com/images/share.png",
    datePublished: parseDate(post.date),
    dateModified: parseDate(post.date),
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Matthew Lutz",
      url: "https://www.driftlss.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Driftlss",
      url: "https://www.driftlss.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.driftlss.com/driftlss-app-icon-static.svg",
      },
    },
    mainEntityOfPage: `https://www.driftlss.com/blog/${post.slug}`,
  };

  const imageBlocks = post.content.filter(
    (b): b is import("@/lib/blog").BlogImageBlock => typeof b !== "string"
  );

  const imageObjectsJsonLd = imageBlocks.map((img) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `https://www.driftlss.com${img.image}`,
    url: `https://www.driftlss.com${img.image}`,
    description: img.alt,
    name: img.title ?? img.alt,
    caption: img.caption ?? img.alt,
  }));

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
      {imageObjectsJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}

function parseDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split("T")[0];
}
