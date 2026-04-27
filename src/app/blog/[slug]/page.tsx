import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Bot,
  Users,
  Palette,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, posts, type BlogContentBlock } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Marketing: "bg-teal-50 text-teal-600 border-teal-200",
  SEO: "bg-teal-50 text-teal-600 border-teal-200",
  AI: "bg-teal-50 text-teal-600 border-teal-200",
  "Web Design": "bg-teal-50 text-teal-600 border-teal-200",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Marketing: Users,
  SEO: Search,
  AI: Bot,
  "Web Design": Palette,
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getIntro(
  p: { content: BlogContentBlock[]; desc: string },
  minChars = 280
) {
  const paragraphs = p.content.filter(
    (b): b is string => typeof b === "string" && !b.startsWith("##")
  );
  if (paragraphs.length === 0) return p.desc;
  let combined = "";
  for (const para of paragraphs) {
    combined += (combined ? " " : "") + para;
    if (combined.length >= minChars) break;
  }
  return combined;
}

function renderInline(text: string) {
  const parts: (string | { href: string; label: string })[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push({ label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.map((part, idx) => {
    if (typeof part === "string") return part;
    const isInternal = part.href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          key={idx}
          href={part.href}
          className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
        >
          {part.label}
        </Link>
      );
    }
    return (
      <a
        key={idx}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
      >
        {part.label}
      </a>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const IconComp = categoryIcons[post.category] || Globe;

  const moreArticles = posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-cream-50">
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-charcoal-400 hover:text-teal-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                categoryColors[post.category] || "bg-cream-50 text-charcoal-500 border-cream-300"
              }`}
            >
              <IconComp className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-sm text-charcoal-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream-50">
        <article className="max-w-3xl mx-auto px-6">
          <div className="prose-custom">
            {post.content.map((block, i) => {
              if (typeof block !== "string") {
                return (
                  <figure key={i} className="my-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={block.image}
                      alt={block.alt}
                      title={block.title}
                      loading="lazy"
                      className="w-full rounded-xl border border-charcoal-700/10 shadow-md"
                    />
                    {block.caption && (
                      <figcaption className="text-sm text-charcoal-400 italic mt-3 text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="font-display text-xl md:text-2xl text-charcoal-700 leading-snug mt-10 mb-3"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl md:text-3xl text-charcoal-700 leading-snug mt-12 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-[1.05rem] md:text-lg text-charcoal-500 leading-[1.8] mb-6"
                >
                  {renderInline(block)}
                </p>
              );
            })}
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4">
            Ready to grow your practice?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            See how Driftlss can help your therapy practice attract more
            families with a modern website, AI tools, and growth systems.
          </p>
          <a
            href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-charcoal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/15"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Read More */}
      {moreArticles.length > 0 && (
        <section className="py-16 md:py-20 bg-cream-50 border-t-4 border-double border-charcoal-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-teal-600 font-semibold">
                Read More from the Journal
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-charcoal-500 font-semibold hover:text-teal-600 transition-colors"
              >
                All Stories
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {moreArticles.map((article) => (
                <article key={article.slug} className="border-t border-charcoal-700/15 pt-6">
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <p className="text-[0.65rem] uppercase tracking-widest text-charcoal-500 font-semibold mb-3">
                      {article.category} &middot; {article.readTime}
                    </p>
                    <h3 className="font-display text-2xl text-charcoal-700 leading-tight tracking-tight mb-3 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-4">
                      {getIntro(article)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                        Read more
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      <span className="text-xs text-charcoal-400">{formatDate(article.date)}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
