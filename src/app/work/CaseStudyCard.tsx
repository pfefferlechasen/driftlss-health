"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

function BrowserMockup({
  screenshot,
  domain,
  link,
}: {
  screenshot: string;
  domain: string;
  link: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [scale, setScale] = useState(0.4);

  const updateScale = useCallback(() => {
    if (containerRef.current) {
      setScale(containerRef.current.offsetWidth / 1440);
    }
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  return (
    <div className="block group">
      <div className="rounded-xl overflow-hidden border border-cream-200 shadow-lg group-hover:shadow-xl transition-shadow bg-white">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-charcoal-700 border-b border-charcoal-600">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-charcoal-600 rounded-md px-4 py-1 text-xs text-charcoal-300 font-mono flex items-center gap-2 max-w-xs w-full justify-center">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-50">
                <path d="M8 1a5 5 0 00-5 5v1.5A1.5 1.5 0 001.5 9v4A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V9A1.5 1.5 0 0013 7.5V6a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {domain}
            </div>
          </div>
          {link && <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>
        <div ref={containerRef} className="relative aspect-[16/9] overflow-hidden">
          {link && (
            <iframe
              ref={iframeRef}
              src={link}
              loading="lazy"
              title={`${domain} live preview`}
              onLoad={() => setTimeout(() => setIframeLoaded(true), 1500)}
              style={{ width: "1440px", height: "900px", transform: `scale(${scale})`, transformOrigin: "top left" }}
              className={`absolute top-0 left-0 border-0 transition-opacity duration-500 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
          <Image
            src={screenshot}
            alt={`${domain} website screenshot`}
            fill
            className={`object-cover object-top transition-opacity duration-500 ${iframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            sizes="(max-width: 768px) 100vw, 800px"
          />
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300">
              <span className="text-sm font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Live Site →</span>
            </a>
          )}
        </div>
      </div>
      <p className="text-xs text-charcoal-300 text-center mt-3 group-hover:text-teal-500 transition-colors">
        Visit live site →
      </p>
    </div>
  );
}

export interface CaseStudy {
  name: string;
  specialty: string;
  description: string;
  features: string[];
  stats: { value: string; label: string }[];
  quote: string;
  author: string;
  authorRole: string;
  link: string;
  screenshot: string;
  domain: string;
}

export default function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
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

        <div className="mb-8">
          <BrowserMockup
            screenshot={study.screenshot}
            domain={study.domain}
            link={study.link}
          />
        </div>

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

        <blockquote className="border-l-4 border-teal-400 pl-5 py-2 mb-8">
          <p className="text-charcoal-500 italic leading-relaxed">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-2 text-sm text-charcoal-400">
            &mdash; {study.author},{" "}
            <span className="text-charcoal-300">{study.authorRole}</span>
          </footer>
        </blockquote>

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
