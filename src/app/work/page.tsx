"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

/* ─── Case Study Data ─── */
const caseStudies = [
  {
    name: "Fun Factory Sensory Gym",
    specialty: "Sensory Gym / Pediatric Therapy",
    description:
      "Fun Factory needed a complete website overhaul that matched the energy and heart of their gym. We delivered a full redesign with before/after sliders, an AI chatbot integrated with their CRM, a testimonials section, and a dedicated NBC feature showcase.",
    features: [
      "Full website redesign",
      "AI chatbot + CRM integration",
      "Before/after transformation sliders",
      "Testimonials & NBC feature section",
    ],
    stats: [
      { value: "280%", label: "More website inquiries" },
      { value: "NBC", label: "Featured on affiliate station" },
      { value: "60%", label: "Parent questions handled by AI" },
    ],
    quote:
      "The new site captures who we are. Parents tell us all the time that our website is what made them choose us.",
    author: "Troy",
    authorRole: "Founder",
    link: "https://funfactorysensorygym.com",
    screenshot: "/images/case-studies/ffsg-screenshot.png",
    domain: "funfactorysensorygym.com",
  },
  {
    name: "Spectrum Sensory Gyms",
    specialty: "Sensory Gym / Pediatric Therapy",
    description:
      "We built Spectrum Sensory Gyms a custom website from the ground up — complete with an immersive 3D gym tour, an ROI calculator for prospective franchisees, and an AI-powered chatbot to answer parent questions 24/7.",
    features: [
      "Custom website design & development",
      "Interactive 3D gym tour",
      "ROI calculator for franchise leads",
      "AI chatbot for parent inquiries",
    ],
    stats: [
      { value: "3D", label: "Interactive gym tour" },
      { value: "0.8s", label: "Page load time" },
      { value: "95+", label: "Lighthouse performance score" },
    ],
    quote:
      "Driftlss understood our mission from day one. The website they built doesn\u2019t just look incredible \u2014 it actually brings families through our doors.",
    author: "Mason",
    authorRole: "Founder",
    link: "",
    screenshot: "/images/case-studies/ssg-screenshot.png",
    domain: "spectrumsensorygyms.com",
  },
];

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

/* ─── Browser Mockup ─── */
function BrowserMockup({
  screenshot,
  domain,
  link,
}: {
  screenshot: string;
  domain: string;
  link: string;
}) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank" as const, rel: "noopener noreferrer" } : {};

  return (
    <Wrapper {...wrapperProps} className="block group">
      <div className="rounded-xl overflow-hidden border border-cream-200 shadow-lg group-hover:shadow-xl transition-shadow bg-white">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-700 border-b border-charcoal-600">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-charcoal-600 rounded-md px-4 py-1 text-xs text-charcoal-300 font-mono flex items-center gap-2 max-w-xs w-full justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 opacity-50"
              >
                <path
                  d="M8 1a5 5 0 00-5 5v1.5A1.5 1.5 0 001.5 9v4A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0013 7.5V6a5 5 0 00-5-5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {domain}
            </div>
          </div>
          {link && <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={screenshot}
            alt={`${domain} website screenshot`}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
      {link ? (
        <p className="text-xs text-charcoal-300 text-center mt-3 group-hover:text-teal-500 transition-colors">
          Visit live site →
        </p>
      ) : (
        <p className="text-xs text-charcoal-300 text-center mt-3">
          Launching soon
        </p>
      )}
    </Wrapper>
  );
}

/* ─── Case Study Card ─── */
function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="bg-white border border-cream-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h3 className="font-display text-2xl md:text-3xl text-charcoal-700">
            {study.name}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            {study.specialty}
          </span>
        </div>

        <p className="text-charcoal-400 leading-relaxed mb-8 max-w-2xl">
          {study.description}
        </p>

        {/* Browser Mockup Screenshot */}
        <div className="mb-8">
          <BrowserMockup
            screenshot={study.screenshot}
            domain={study.domain}
            link={study.link}
          />
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {study.features.map((f) => (
            <span
              key={f}
              className="text-sm text-charcoal-500 bg-cream-100 px-3 py-1.5 rounded-lg"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cream-50 border border-cream-200 rounded-xl p-5 text-center"
            >
              <p className="font-display text-3xl text-teal-600 mb-1">
                {stat.value}
              </p>
              <p className="text-charcoal-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <blockquote className="border-l-4 border-teal-400 pl-5 py-2 mb-8">
          <p className="text-charcoal-500 italic leading-relaxed">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-2 text-sm text-charcoal-400">
            &mdash; {study.author},{" "}
            <span className="text-charcoal-300">{study.authorRole}</span>
          </footer>
        </blockquote>

        {/* CTA */}
        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
        >
          View Live Site
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Work Page ─── */
export default function WorkPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex items-center">
        <div className="absolute inset-0 bg-cream-50" />

        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Real Results for Real Practices
            </h1>
            <p className="text-charcoal-400 text-lg leading-relaxed max-w-xl mx-auto">
              We partner with therapy practices and pediatric care centers to
              build websites and AI systems that drive measurable growth. Here
              are a few of the transformations we&apos;re most proud of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="relative bg-cream-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.name} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              Your practice could be next.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Let&apos;s talk about what a custom website and AI-powered systems
              could do for your therapy practice.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
