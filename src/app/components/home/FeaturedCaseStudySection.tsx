"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { display, body } from "./data";
import { Reveal, ArrowRight, fadeUp } from "./animations";

const POST = {
  slug: "ai-visibility-aba-ot-clinics-case-study",
  eyebrow: "Case Study",
  title: "Two clients. Cited #1 and #2 across ChatGPT and Google AI.",
  desc: "Inside the AI visibility playbook we ran for two healthcare clients in the same niche — and why it generalizes to any ABA clinic, OT practice, or therapy provider whose buyers now ask AI before they ask Google.",
  image: "/images/blogs/ai-visibility/chatgpt-recommendation-start-with-spectrum-sensory-gyms.webp",
  imageAlt: "ChatGPT delivering a direct buying recommendation: Start with Spectrum Sensory Gyms, with Fun Factory Sensory Gym suggested as the comparison quote",
  readTime: "10 min read",
  date: "April 27, 2026",
};

export default function FeaturedCaseStudySection() {
  return (
    <section className="py-28 px-8 bg-gradient-to-br from-teal-600 to-teal-700 max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-4">
          <Reveal>
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-charcoal-700/80 mb-4">
              From the Journal
            </div>
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.1] tracking-tight text-charcoal-700 max-w-[640px]">
              The latest case study.
            </h2>
          </Reveal>
          <Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[0.85rem] tracking-wider uppercase text-charcoal-700/70 hover:text-charcoal-700 transition-colors"
              style={body}
            >
              All Stories
              <span className="inline-flex transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={`/blog/${POST.slug}`}
            className="group grid grid-cols-[1.1fr_1fr] gap-12 items-center bg-[#1A1A18] border border-black/40 rounded-2xl p-10 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:-translate-y-1 max-md:grid-cols-1 max-md:gap-8 max-md:p-6"
          >
            <div className="order-2 max-md:order-1">
              <div style={body} className="flex items-center gap-3 text-[0.7rem] tracking-[0.15em] uppercase text-white/70 mb-5">
                <span>{POST.eyebrow}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-white/50">{POST.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-white/50">{POST.date}</span>
              </div>
              <h3
                style={display}
                className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-normal leading-[1.15] tracking-tight text-white mb-5"
              >
                {POST.title}
              </h3>
              <p style={body} className="text-[1rem] leading-relaxed text-white/70 mb-8 max-w-[540px]">
                {POST.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-white"
                style={body}
              >
                Read the case study
                <span className="inline-flex transition-transform group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </span>
            </div>
            <div className="order-1 max-md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={POST.image}
                alt={POST.imageAlt}
                loading="lazy"
                className="w-full rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
