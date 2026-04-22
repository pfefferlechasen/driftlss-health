import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";
import NewsletterForm from "./NewsletterForm";
import BlogPaper from "./BlogPaper";

/* ─── Newsletter ─── */
function Newsletter() {
  return (
    <section className="bg-cream-50 py-20 md:py-24 px-6">
      <div className="max-w-2xl mx-auto bg-charcoal-700 border border-charcoal-600 rounded-2xl shadow-lg px-6 py-16 md:px-12 md:py-20 text-center">
        <Reveal>
          <Mail className="w-6 h-6 text-teal-400 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-cream-100 leading-tight mb-4">
            Subscribe to the Journal
          </h2>
          <p className="text-charcoal-300 mb-10 max-w-md mx-auto">
            Practical growth tips for therapy practices, delivered weekly. No spam.
          </p>
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page ─── */
const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The Driftlss Journal — Insights for Therapy Practice Growth",
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
      <BlogPaper posts={posts} />
      <Newsletter />
      <Footer />
    </main>
  );
}
