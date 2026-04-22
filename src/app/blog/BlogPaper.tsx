"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const CATEGORIES = ["All", "Marketing", "SEO", "AI", "Web Design"] as const;
type Category = (typeof CATEGORIES)[number];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function getIntro(post: BlogPost, minChars = 280) {
  const paragraphs = post.content.filter((p) => !p.startsWith("##"));
  if (paragraphs.length === 0) return post.desc;
  let combined = "";
  for (const p of paragraphs) {
    combined += (combined ? " " : "") + p;
    if (combined.length >= minChars) break;
  }
  return combined;
}

export default function BlogPaper({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [sorted, query, category]);

  const lead = filtered[0];
  const rest = filtered.slice(1);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* ─── Masthead ─── */}
      <header className="border-b-4 border-double border-charcoal-700 pt-32 md:pt-40 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-charcoal-400 mb-2">
            Vol. I &middot; No. {sorted.length}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-none tracking-tight">
            The Driftlss Journal
          </h1>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-charcoal-500 mt-4">
            {today} &middot; Insights for therapy practice growth
          </p>
        </div>
      </header>

      {/* ─── Search + Filter Bar ─── */}
      <div className="border-b border-charcoal-700/15 sticky top-0 z-30 bg-cream-50/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the journal..."
              className="w-full pl-9 pr-4 py-2 bg-transparent border-b border-charcoal-700/20 focus:border-teal-600 text-sm text-charcoal-700 placeholder:text-charcoal-400 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  category === c
                    ? "bg-charcoal-700 text-cream-50"
                    : "text-charcoal-500 hover:text-charcoal-700 hover:bg-charcoal-700/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Empty State ─── */}
      {filtered.length === 0 && (
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <p className="font-display text-3xl text-charcoal-700 mb-3">No stories found.</p>
          <p className="text-charcoal-400">
            Try a different search term or clear the filter.
          </p>
        </div>
      )}

      {/* ─── Lead Story ─── */}
      {lead && (
        <section className="border-b border-charcoal-700/15">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-teal-600 font-semibold mb-6">
              Lead Story
            </p>
            <Link href={`/blog/${lead.slug}`} className="group block">
              <p className="text-xs uppercase tracking-widest text-charcoal-500 font-semibold mb-4">
                {lead.category} &middot; {lead.readTime} &middot; {formatDate(lead.date)}
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-[1.05] tracking-tight mb-6 group-hover:text-teal-600 transition-colors max-w-4xl">
                {lead.title}
              </h2>
              <div className="md:columns-2 md:gap-12 mb-6 max-w-4xl">
                <p className="text-lg text-charcoal-500 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-charcoal-700">
                  {getIntro(lead, 600)}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                Continue reading
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ─── Article Columns ─── */}
      {rest.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-teal-600 font-semibold mb-8">
              More from the Journal
            </p>
            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <article key={article.slug} className="border-t border-charcoal-700/15 pt-6">
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <p className="text-[0.65rem] uppercase tracking-widest text-charcoal-500 font-semibold mb-3">
                      {article.category} &middot; {article.readTime}
                    </p>
                    <h3 className="font-display text-2xl text-charcoal-700 leading-tight tracking-tight mb-3 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-4">
                      {getIntro(article, 280)}
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
    </div>
  );
}
