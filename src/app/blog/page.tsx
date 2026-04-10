import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Search,
  Bot,
  Globe,
  Palette,
  Users,
  Mail,
  Clock,
} from "lucide-react";
import Reveal, { RevealOnLoad } from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";
import NewsletterForm from "./NewsletterForm";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnLoad
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8"
            y={20}
          >
            <BookOpen className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-700">Blog</span>
          </RevealOnLoad>

          <RevealOnLoad delay={0.1} y={30}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
              Insights for Therapy
              <br />
              <span className="text-teal-500">Practice Growth</span>
            </h1>
          </RevealOnLoad>

          <RevealOnLoad delay={0.2} y={30}>
            <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mx-auto">
              Practical marketing tips, growth strategies, and technology guides
              built specifically for therapy practices and pediatric care centers.
            </p>
          </RevealOnLoad>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Post ─── */
const featuredSlug = "wordpress-vs-nextjs-ai-citations-health-study";

function FeaturedPost() {
  const featured = posts.find((p) => p.slug === featuredSlug);
  if (!featured) return null;
  const IconComp = categoryIcons[featured.category] || Globe;

  return (
    <section className="bg-cream-50 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <Link href={`/blog/${featured.slug}`} className="block">
          <Reveal
            y={20}
            className="group bg-charcoal-700 border border-charcoal-600 rounded-2xl p-10 md:p-14 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/5 transition-all cursor-pointer"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400">
                Featured
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <IconComp className="w-3 h-3" />
                {featured.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-400 font-medium ml-auto">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-4xl text-cream-100 mb-4 leading-snug group-hover:text-teal-400 transition-colors max-w-3xl">
              {featured.title}
            </h3>
            <p className="text-charcoal-300 leading-relaxed mb-8 max-w-2xl text-lg">
              {featured.desc}
            </p>

            <span className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm group-hover:text-teal-300 transition-colors">
              Read article
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Reveal>
        </Link>
      </div>
    </section>
  );
}

/* ─── Article Cards ─── */
const categoryColors: Record<string, string> = {
  Marketing: "bg-coral-50 text-coral-600 border-coral-200",
  SEO: "bg-teal-50 text-teal-600 border-teal-200",
  AI: "bg-purple-50 text-purple-600 border-purple-200",
  "Web Design": "bg-amber-50 text-amber-600 border-amber-200",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Marketing: Users,
  SEO: Search,
  AI: Bot,
  "Web Design": Palette,
};

function ArticleCards() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
            Latest Articles
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
            What we&apos;re writing about
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.filter((p) => p.slug !== featuredSlug).map((article, i) => {
            const IconComp = categoryIcons[article.category] || Globe;
            return (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="block">
                <Reveal
                  delay={i * 0.08}
                  y={20}
                  className="group h-full bg-cream-100 border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all relative overflow-hidden cursor-pointer"
                >
                  {/* Category tag + read time */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                        categoryColors[article.category] || "bg-cream-50 text-charcoal-500 border-cream-300"
                      }`}
                    >
                      <IconComp className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-300 font-medium">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-charcoal-700 mb-3 leading-snug group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed line-clamp-2 mb-6">
                    {article.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Reveal>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter Signup ─── */
function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="w-14 h-14 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-7 h-7 text-teal-500" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
            Get therapy marketing tips
            <span className="text-teal-500"> delivered weekly</span>
          </h2>
          <p className="text-charcoal-400 text-lg mb-10 max-w-xl mx-auto">
            Join practice owners who get actionable growth strategies, AI
            updates, and marketing tips every week. No spam, unsubscribe
            anytime.
          </p>

          <NewsletterForm />

          <p className="text-sm text-charcoal-300 mt-6">
            Free forever &middot; No spam &middot; Unsubscribe anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Driftlss Blog — Insights for Therapy Practice Growth",
  description: "Practical marketing tips, growth strategies, and technology guides built specifically for therapy practices and pediatric care centers.",
  url: "https://www.driftlss.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Driftlss",
    url: "https://www.driftlss.com",
  },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.desc,
    url: `https://www.driftlss.com/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: "Matthew Lutz",
      url: "https://www.driftlss.com",
    },
  })),
};

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <Navbar transparent />
      <Hero />
      <FeaturedPost />
      <ArticleCards />
      <Newsletter />
      <Footer />
    </main>
  );
}
