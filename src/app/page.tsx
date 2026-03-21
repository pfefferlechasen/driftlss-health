"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./landing.css";

// ═══════════════════════════════════════════
// ANIMATION HELPERS
// ═══════════════════════════════════════════
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════
// ANIMATED NUMBER
// ═══════════════════════════════════════════
function AnimatedNumber({
  target,
  suffix = "",
  duration = 1500,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || target === 0) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {target === 0 ? "0" : value}
      {suffix}
    </span>
  );
}

// ═══════════════════════════════════════════
// ICONS & ILLUSTRATIONS
// ═══════════════════════════════════════════
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Hero abstract composition ──
const HeroIllustration = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: 0.3 }}
    viewBox="0 0 500 500"
    className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] max-md:w-[350px] max-md:h-[350px] max-md:-left-16 max-md:top-[20%] pointer-events-none"
    fill="none"
  >
    <circle cx="200" cy="180" r="140" stroke="#0D9488" strokeWidth="1.5" opacity="0.08" />
    <circle cx="280" cy="300" r="100" stroke="#0D9488" strokeWidth="1.5" opacity="0.12" />
    <rect x="100" y="220" width="180" height="120" rx="60" stroke="#0D9488" strokeWidth="1.5" opacity="0.06" />
    <circle cx="350" cy="150" r="40" fill="#0D9488" opacity="0.04" />
    <circle cx="150" cy="350" r="60" fill="#0D9488" opacity="0.03" />
    <path d="M80 280 Q200 200 320 300 Q400 360 450 280" stroke="#0D9488" strokeWidth="1.5" opacity="0.07" fill="none" />
    <path d="M120 180 Q200 120 300 180" stroke="#EDE0CC" strokeWidth="2" opacity="0.4" fill="none" />
    <circle cx="400" cy="250" r="8" fill="#0D9488" opacity="0.1" />
    <circle cx="130" cy="140" r="5" fill="#0D9488" opacity="0.12" />
    <circle cx="360" cy="380" r="6" fill="#0D9488" opacity="0.08" />
  </motion.svg>
);

// ── Stat icons (line-art, ~32px) ──
const StatIconSearch = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="16" height="24" rx="3" stroke="#0D9488" strokeWidth="1.5" opacity="0.7" />
    <circle cx="14" cy="14" r="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M17 17l3 3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M10 22h8" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
const StatIconTimer = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="18" r="10" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M16 12v6l4 2" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M13 4h6" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 4v4" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M24 10l2-2" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
  </svg>
);
const StatIconTrendUp = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24l8-8 4 4 12-12" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M22 8h6v6" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M4 28h24" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
  </svg>
);
const StatIconBrowser = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="26" height="20" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M3 12h26" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
    <circle cx="7" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <circle cx="10.5" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <circle cx="14" cy="9" r="1" fill="#0D9488" opacity="0.4" />
    <path d="M12 17l8 8M20 17l-8 8" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
  </svg>
);
const statIcons = [<StatIconSearch key="s1" />, <StatIconTimer key="s2" />, <StatIconTrendUp key="s3" />, <StatIconBrowser key="s4" />];

// ── Benefit illustrations (48-64px, richer line-art) ──
const IllustBrowserSparkle = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M6 18h36" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
    <circle cx="10" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <circle cx="14" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <circle cx="18" cy="14" r="1.2" fill="#0D9488" opacity="0.4" />
    <path d="M14 26h20" stroke="#0D9488" strokeWidth="1.5" opacity="0.2" />
    <path d="M14 30h12" stroke="#0D9488" strokeWidth="1.5" opacity="0.2" />
    <path d="M44 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" stroke="#0D9488" strokeWidth="1.2" opacity="0.6" />
    <path d="M48 26l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" stroke="#0D9488" strokeWidth="1" opacity="0.35" />
  </svg>
);
const IllustChatPulse = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12h28a4 4 0 014 4v14a4 4 0 01-4 4H18l-6 6v-6H8a4 4 0 01-4-4V16a4 4 0 014-4z" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M12 24h4l3-6 4 12 3-6h6" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
    <circle cx="44" cy="18" r="6" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <circle cx="44" cy="18" r="2" fill="#0D9488" opacity="0.2" />
  </svg>
);
const IllustSearchPin = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="24" r="12" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M31 33l10 10" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M22 18c0 3.3-4 8-4 8s-4-4.7-4-8a4 4 0 118 0z" stroke="#0D9488" strokeWidth="1.2" opacity="0.6" />
    <circle cx="18" cy="18" r="1.5" fill="#0D9488" opacity="0.4" />
    <circle cx="26" cy="20" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="22" cy="28" r="1" fill="#0D9488" opacity="0.25" />
  </svg>
);
const IllustDashboard = () => (
  <svg viewBox="0 0 56 56" className="w-14 h-14" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M4 16h40" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
    <rect x="8" y="20" width="10" height="16" rx="2" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M10 32V26" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M14 32V22" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <path d="M22 28l4-4 4 2 6-6" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
    <circle cx="48" cy="14" r="5" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M48 11v3l2 1" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
  </svg>
);

// ── Process illustrations (line-art vignettes) ──
const IllustDiscovery = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 44c0-4 4-6 10-6s10 2 10 6" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <circle cx="22" cy="30" r="6" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <path d="M36 20h18a3 3 0 013 3v8a3 3 0 01-3 3H46l-4 4v-4h-6a3 3 0 01-3-3v-8a3 3 0 013-3z" stroke="#99F6E4" strokeWidth="1.5" />
    <circle cx="41" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <circle cx="45" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <circle cx="49" cy="28" r="1" fill="#99F6E4" opacity="0.5" />
    <path d="M8 50c6-2 12-1 16 0s10 1 16-1" stroke="#99F6E4" strokeWidth="1" opacity="0.15" />
  </svg>
);
const IllustBuild = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="40" height="32" rx="4" stroke="#99F6E4" strokeWidth="1.5" />
    <path d="M8 18h40" stroke="#99F6E4" strokeWidth="1.5" opacity="0.3" />
    <circle cx="12" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <circle cx="16" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <circle cx="20" cy="14" r="1.2" fill="#99F6E4" opacity="0.4" />
    <path d="M16 26l4 4-4 4" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M30 26l-4 4 4 4" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M24 24l-2 10" stroke="#99F6E4" strokeWidth="1.5" opacity="0.4" />
    <rect x="36" y="22" width="8" height="6" rx="1" stroke="#99F6E4" strokeWidth="1.2" opacity="0.4" />
    <rect x="36" y="30" width="8" height="4" rx="1" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M52 16l4 8-4 8" stroke="#99F6E4" strokeWidth="1" opacity="0.2" />
  </svg>
);
const IllustLaunch = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 8c0 0-12 8-12 28h24c0-20-12-28-12-28z" stroke="#99F6E4" strokeWidth="1.5" />
    <path d="M26 36l-4 8h20l-4-8" stroke="#99F6E4" strokeWidth="1.5" opacity="0.5" />
    <circle cx="32" cy="24" r="3" stroke="#99F6E4" strokeWidth="1.5" opacity="0.6" />
    <path d="M20 36c-6 2-10 6-10 6" stroke="#99F6E4" strokeWidth="1" opacity="0.3" />
    <path d="M44 36c6 2 10 6 10 6" stroke="#99F6E4" strokeWidth="1" opacity="0.3" />
    <path d="M28 48l-2 6" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M32 48v7" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <path d="M36 48l2 6" stroke="#99F6E4" strokeWidth="1.2" opacity="0.3" />
    <circle cx="14" cy="16" r="1.5" fill="#99F6E4" opacity="0.15" />
    <circle cx="50" cy="20" r="1" fill="#99F6E4" opacity="0.2" />
    <circle cx="46" cy="12" r="1.5" fill="#99F6E4" opacity="0.15" />
  </svg>
);
const processIllustrations = [<IllustDiscovery key="p1" />, <IllustBuild key="p2" />, <IllustLaunch key="p3" />];

// ── Service spot illustrations (~28px inline) ──
const SvcIconWeb = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M2 9h20" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <rect x="14" y="6" width="14" height="12" rx="2" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" transform="translate(2,2)" />
    <path d="M8 22h8" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
    <path d="M12 20v2" stroke="#0D9488" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
const SvcIconBot = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="8" width="18" height="14" rx="4" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="11" cy="15" r="1.5" fill="#0D9488" opacity="0.5" />
    <circle cx="17" cy="15" r="1.5" fill="#0D9488" opacity="0.5" />
    <path d="M11 19c1 1.5 5 1.5 6 0" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M14 8V4" stroke="#0D9488" strokeWidth="1.5" opacity="0.5" />
    <circle cx="14" cy="3" r="1.5" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" />
    <path d="M3 14h2M23 14h2" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
  </svg>
);
const SvcIconCRM = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="22" height="20" rx="3" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M3 10h22" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M10 4v20" stroke="#0D9488" strokeWidth="1.2" opacity="0.2" />
    <rect x="12" y="12" width="5" height="3" rx="1" fill="#0D9488" opacity="0.15" />
    <rect x="12" y="17" width="8" height="3" rx="1" fill="#0D9488" opacity="0.1" />
    <rect x="5" y="12" width="3" height="3" rx="1" fill="#0D9488" opacity="0.1" />
    <rect x="5" y="17" width="3" height="3" rx="1" fill="#0D9488" opacity="0.1" />
  </svg>
);
const SvcIconSEO = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="22" height="12" rx="6" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="9" cy="14" r="3" stroke="#0D9488" strokeWidth="1.2" opacity="0.5" />
    <path d="M14 14h8" stroke="#0D9488" strokeWidth="1.2" opacity="0.3" />
    <path d="M8 4l1.5 3.5" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <path d="M14 3l0 4" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <path d="M20 4l-1.5 3.5" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
    <circle cx="8" cy="3" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="14" cy="2" r="1" fill="#0D9488" opacity="0.25" />
    <circle cx="20" cy="3" r="1" fill="#0D9488" opacity="0.25" />
  </svg>
);
const SvcIconGrowth = () => (
  <svg viewBox="0 0 28 28" className="w-7 h-7 shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22l6-6 4 3 10-11" stroke="#0D9488" strokeWidth="1.5" />
    <path d="M20 8h4v4" stroke="#0D9488" strokeWidth="1.5" />
    <circle cx="20" cy="22" r="4" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" />
    <path d="M20 20v4M18 22h4" stroke="#0D9488" strokeWidth="1" opacity="0.3" />
  </svg>
);
const serviceIcons = [<SvcIconWeb key="sv1" />, <SvcIconBot key="sv2" />, <SvcIconCRM key="sv3" />, <SvcIconSEO key="sv4" />, <SvcIconGrowth key="sv5" />];

// ── CTA flowing abstract shapes ──
const CTAIllustration = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <path d="M-50 400 Q200 200 500 350 Q700 450 900 250 Q1050 130 1250 300" stroke="#99F6E4" strokeWidth="1.5" opacity="0.08" />
      <path d="M-100 500 Q150 350 400 450 Q650 530 850 350 Q1000 230 1250 400" stroke="#99F6E4" strokeWidth="1" opacity="0.06" />
      <path d="M0 100 Q300 250 600 100 Q900 -20 1200 150" stroke="#99F6E4" strokeWidth="1.5" opacity="0.06" />
      <circle cx="100" cy="150" r="40" stroke="#99F6E4" strokeWidth="1" opacity="0.06" />
      <circle cx="1050" cy="120" r="60" stroke="#99F6E4" strokeWidth="1" opacity="0.05" />
      <circle cx="200" cy="450" r="25" stroke="#99F6E4" strokeWidth="1" opacity="0.07" />
      <circle cx="900" cy="480" r="35" stroke="#99F6E4" strokeWidth="1" opacity="0.05" />
      <circle cx="600" cy="80" r="4" fill="#99F6E4" opacity="0.12" />
      <circle cx="150" cy="300" r="3" fill="#99F6E4" opacity="0.1" />
      <circle cx="1000" cy="350" r="5" fill="#99F6E4" opacity="0.1" />
      <circle cx="400" cy="500" r="3" fill="#99F6E4" opacity="0.08" />
      <circle cx="750" cy="150" r="4" fill="#99F6E4" opacity="0.1" />
    </svg>
  </div>
);

// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const specialties = ["Occupational Therapy", "Physical Therapy", "ABA Therapy", "Speech-Language Pathology", "Sensory Gyms"];

const stats = [
  { target: 73, suffix: "%", desc: "of parents research a practice online before making first contact" },
  { target: 38, suffix: "%", desc: "leave a website within 10 seconds if it looks outdated" },
  { target: 5, suffix: "×", desc: "more likely to inquire when a site feels modern and trustworthy" },
  { target: 0, suffix: "", desc: "therapy practices in your area with a website built for 2026" },
];

const benefits = [
  { icon: <IllustBrowserSparkle />, title: "Design That Converts", desc: "Clean, warm interfaces that signal professionalism from the first click. No clip art. No templates. Thoughtful design that reflects the quality of your care." },
  { icon: <IllustChatPulse />, title: "AI That Works 24/7", desc: "Intelligent chatbots answer parent questions around the clock. Automated follow-ups convert inquiries into intakes — without adding to your plate." },
  { icon: <IllustSearchPin />, title: "Found by Every Family", desc: "GEO ensures your practice surfaces in AI-powered search, Google, and everywhere parents look. Visibility that compounds over time." },
  { icon: <IllustDashboard />, title: "Measurable Growth", desc: "Custom dashboards track every lead, inquiry, and conversion. See exactly what's working so every dollar invested earns more back." },
];

const proofMetrics = [
  { value: "3D", label: "Interactive gym tour experience" },
  { value: "CRM", label: "Custom-built client management system" },
  { value: "GEO", label: "Optimized for AI-powered search visibility" },
];

const processSteps = [
  { number: "01", title: "Discovery Call", desc: "We learn about your practice, your patients, and your goals. No pitch deck — just an honest conversation about what's working and what's not." },
  { number: "02", title: "Design & Build", desc: "We craft your website, integrate AI tools, and set up your growth systems. You see progress weekly and have final say on everything." },
  { number: "03", title: "Launch & Grow", desc: "Your new digital presence goes live. We stay on as your partner — optimizing performance, refining content, and scaling what works every month." },
];

const services = [
  { title: "Premium Websites", desc: "Custom-designed, fast, mobile-first websites built on modern infrastructure. No WordPress. No templates. Just clean code that loads fast and converts families into patients." },
  { title: "AI Chatbots & Automation", desc: "Intelligent chat systems that handle parent inquiries around the clock. Automated workflows that nurture leads, book consultations, and keep your pipeline full." },
  { title: "CRM & Client Systems", desc: "Purpose-built dashboards that track leads, manage contacts, and give your team visibility into every relationship — from first inquiry to ongoing care." },
  { title: "Search & Visibility", desc: "Generative Engine Optimization ensures your practice surfaces in AI-powered search results, traditional SEO, and local discovery. Built for how families search in 2026." },
  { title: "Ongoing Growth", desc: "Monthly retainers that include web maintenance, performance monitoring, content strategy, and continuous optimization. Your digital presence improves every month." },
];

const faqs = [
  { q: "How long does a project take?", a: "Most websites launch within 4\u20136 weeks. More complex projects with AI integrations and custom CRM systems take 6\u201310 weeks. We\u2019ll give you a clear timeline in our first call." },
  { q: "What happens to my current website?", a: "We build your new site on a separate staging environment. Your current site stays live until the new one is ready. When it\u2019s time, we handle the full migration \u2014 no downtime." },
  { q: "Do I need to be technical?", a: "Not at all. We handle everything \u2014 design, development, hosting, and ongoing updates. You just give us feedback and approve the work." },
  { q: "What does ongoing support include?", a: "Monthly retainers cover web maintenance, performance monitoring, content updates, SEO optimization, and priority support. Think of us as your in-house digital team." },
  { q: "How much does it cost?", a: "Projects start at $5,000 for a custom website. Monthly retainers start at $500. We\u2019ll scope everything on our first call so there are no surprises." },
  { q: "What makes you different from a template site?", a: "Templates look generic and limit your growth. We build custom, fast, AI-optimized sites specifically for therapy practices \u2014 with tools like chatbots, CRM, and GEO that templates can\u2019t touch." },
];

const compareFeatures = [
  "Custom design",
  "AI chatbot & automation",
  "Built-in CRM",
  "AI search optimization",
  "Mobile-first & fast",
  "Ongoing support",
  "Therapy expertise",
];

const compareCards = [
  { title: "DIY Builder", checks: [false, false, false, false, false, false, false], highlighted: false },
  { title: "Template Site", checks: [false, false, false, false, true, false, false], highlighted: false },
  { title: "Driftlss", checks: [true, true, true, true, true, true, true], highlighted: true },
];

const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
export default function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", practiceType: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const browserRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const heroBrowserRef = useRef<HTMLDivElement>(null);
  const heroIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function scaleIframe() {
      const pairs = [
        { container: browserRef.current, iframe: iframeRef.current },
        { container: heroBrowserRef.current, iframe: heroIframeRef.current },
      ];
      for (const { container, iframe } of pairs) {
        if (!container || !iframe) continue;
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) continue;
        const scale = containerWidth / 1440;
        iframe.style.transform = `scale(${scale})`;
        container.style.paddingBottom = `${(900 * scale / containerWidth) * 100}%`;
      }
    }
    scaleIframe();
    window.addEventListener("resize", scaleIframe);
    return () => window.removeEventListener("resize", scaleIframe);
  }, []);

  return (
    <>
      {/* ═══ NAV ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${navScrolled ? "py-3 px-8 bg-[#FAF6F0]/92 backdrop-blur-xl shadow-[0_1px_0_rgba(26,26,24,0.06)]" : "py-6 px-8"}`}>
        <a href="#" style={body} className="font-semibold text-xl tracking-tight text-[#1A1A18] no-underline">
          driftlss<span className="text-teal-600">.</span>
        </a>
        <a href="https://calendly.com/admin-driftlss/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" style={body} className="font-medium text-sm uppercase tracking-wider px-7 py-2.5 bg-[#1A1A18] text-[#FAF6F0] rounded-full no-underline transition-all duration-300 hover:bg-teal-600 hover:-translate-y-px">
          Start a Project
        </a>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center px-8 pt-32 pb-16 relative max-md:px-6 max-md:pt-28 overflow-hidden">
        <HeroIllustration />
        <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-center relative z-10">
          {/* Left column — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={body}
              className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-teal-600 mb-8"
            >
              Digital Growth for Therapy Practices
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={display}
              className="font-normal text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-[#1A1A18]"
            >
              Your practice<br />
              deserves a <em className="italic text-teal-600">better</em><br />
              digital presence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={body}
              className="text-[clamp(1.05rem,1.8vw,1.35rem)] font-light leading-relaxed text-[#4A4A45] max-w-[520px] mt-10"
            >
              We build premium websites, AI-powered tools, and growth systems for
              pediatric therapy practices — so you can focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-8 mt-12"
            >
              <a href="https://calendly.com/admin-driftlss/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" style={body} className="font-medium text-[0.95rem] tracking-wide px-10 py-4 bg-teal-600 text-white rounded-full no-underline transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,148,136,0.25)]">
                Book a Free Call
              </a>
              <a href="#proof" style={body} className="text-[0.95rem] text-[#4A4A45] no-underline inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600 group">
                See Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRight /></span>
              </a>
            </motion.div>
          </div>

          {/* Right column — browser mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block shadow-2xl shadow-black/10 rounded-2xl"
          >
            <div className="browser-frame">
              <div className="flex items-center gap-2 px-5 py-3 bg-[#F8F8F8] border-b border-[#EBEBEB]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6059]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C940]" />
                <div style={body} className="flex-1 ml-3 bg-[#EFEFEF] rounded-md px-3 py-1 text-[0.7rem] text-[#999]">spectrumsensorygyms.com</div>
              </div>
              <div ref={heroBrowserRef} className="browser-content">
                <iframe ref={heroIframeRef} src="https://www.spectrumsensorygyms.com" loading="lazy" title="Spectrum Sensory Gyms preview" />
                <a href="https://www.spectrumsensorygyms.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group">
                  <span style={body} className="text-sm font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Live Site →</span>
                </a>
              </div>
            </div>
            <p style={body} className="text-[0.8rem] text-[#8A8A82] mt-3 text-center max-md:hidden">
              Built by Driftlss — <a href="#proof" className="text-teal-600 hover:underline">view case study</a>
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }} className="hero-scroll-line" />
      </section>

      {/* ═══ SPECIALTIES BAR ═══ */}
      <section className="py-10 px-8 bg-white border-t border-b border-[#EDE0CC]">
        <div className="max-w-[1300px] mx-auto flex items-center gap-8 justify-center flex-wrap max-md:gap-3">
          <span style={body} className="text-[0.8rem] font-normal text-[#4A4A45] tracking-wider uppercase whitespace-nowrap">Built for</span>
          <span className="w-px h-6 bg-[#EDE0CC] max-md:hidden" />
          {specialties.map((s) => (
            <span key={s} style={body} className="text-[0.9rem] font-medium text-teal-700 px-5 py-2 bg-white border border-teal-600/20 rounded-full whitespace-nowrap">{s}</span>
          ))}
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-32 px-8 max-w-[1300px] mx-auto grid grid-cols-2 gap-24 items-center max-md:grid-cols-1 max-md:gap-12 max-md:py-20 max-md:px-6">
        <Reveal>
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">The Reality</div>
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight">
            Most therapy practice websites look like they were built in 2014. Families are choosing your competitors before they ever call you.
          </h2>
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-2 gap-10">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="pt-8 border-t border-[#EDE0CC]">
              {statIcons[i]}
              <div style={display} className="text-5xl text-teal-600 leading-none mb-2"><AnimatedNumber target={stat.target} suffix={stat.suffix} /></div>
              <div style={body} className="text-[0.9rem] font-light text-[#4A4A45] leading-snug">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="pt-0 pb-32 px-8 bg-white max-md:pb-20 max-md:px-6">
        <div className="h-[120px] bg-gradient-to-b from-[#FAF6F0] to-white" />
        <div className="max-w-[1300px] mx-auto">
          <Reveal>
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">Why Driftlss</div>
          </Reveal>
          <Reveal>
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-16">
              We&apos;ve cracked the code for therapy practice growth.
            </h2>
          </Reveal>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="benefit-card-wrap relative bg-[#FAF6F0] rounded-2xl p-10 max-md:p-8 transition-all duration-400 border border-transparent hover:-translate-y-1 hover:border-[#EDE0CC] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <div className="benefit-card-accent" />
                <div className="mb-6">{b.icon}</div>
                <h3 style={display} className="text-[1.3rem] font-normal mb-3 leading-tight">{b.title}</h3>
                <p style={body} className="text-[0.9rem] font-light text-[#4A4A45] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CASE STUDY ═══ */}
      <div className="h-[120px] bg-gradient-to-b from-white to-[#FAF6F0]" />
      <section id="proof" className="pt-0 pb-40 px-8 max-w-[1300px] mx-auto max-md:pb-20 max-md:px-6">
        <Reveal>
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">Case Study</div>
        </Reveal>
        <Reveal>
          <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4">
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px]">
              Spectrum Sensory Gyms — a complete digital transformation
            </h2>
            <span style={body} className="text-[0.85rem] text-[#4A4A45] px-5 py-2 border border-[#EDE0CC] rounded-full whitespace-nowrap">Pediatric Sensory Therapy</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="browser-frame">
            <div className="flex items-center gap-2 px-5 py-4 bg-[#F8F8F8] border-b border-[#EBEBEB]">
              <div className="w-3 h-3 rounded-full bg-[#FF6059]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C940]" />
              <div style={body} className="flex-1 ml-3 bg-[#EFEFEF] rounded-md px-4 py-1.5 text-[0.8rem] text-[#999]">spectrumsensorygyms.com</div>
            </div>
            <div ref={browserRef} className="browser-content">
              <iframe ref={iframeRef} src="https://www.spectrumsensorygyms.com" loading="lazy" title="Spectrum Sensory Gyms" />
              <a href="https://www.spectrumsensorygyms.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group">
                <span style={body} className="text-sm font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Live Site →</span>
              </a>
            </div>
          </div>
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-3 gap-8 mt-12 max-md:grid-cols-1">
          {proofMetrics.map((m, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-center p-8 bg-white rounded-xl border border-black/[0.04]">
              <div style={display} className="text-[2.5rem] text-teal-600 leading-none mb-2">{m.value}</div>
              <div style={body} className="text-[0.85rem] font-light text-[#4A4A45]">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="pt-0 pb-24 px-8 bg-white max-md:pb-16 max-md:px-6 testimonial-section">
        <div className="h-[120px] bg-gradient-to-b from-[#FAF6F0] to-white" />
        <div className="testimonial-bg">
          <div className="testimonial-bg-shape tbs-1" />
          <div className="testimonial-bg-shape tbs-2" />
          <div className="testimonial-bg-shape tbs-3" />
        </div>
        <Reveal className="max-w-[900px] mx-auto text-center relative z-10">
          <div style={display} className="text-[5rem] text-teal-600 leading-none mb-4 opacity-30">&ldquo;</div>
          <blockquote style={display} className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal leading-[1.45] italic text-[#1A1A18] mb-8">
            Driftlss completely transformed our digital presence. Our website finally reflects the quality of care we provide — and families are noticing. We&apos;ve seen a real increase in inquiries since launch.
          </blockquote>
          <div style={body} className="text-[0.95rem] font-medium text-[#1A1A18]">Mason Pfefferle</div>
          <div style={body} className="text-[0.85rem] font-light text-[#8A8A82] mt-1">Owner, Spectrum Sensory Gyms</div>
        </Reveal>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <div className="h-[120px] bg-gradient-to-b from-white to-[#FAF6F0]" />
      <section className="pt-0 pb-32 px-8 bg-[#FAF6F0] max-md:pb-20 max-md:px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center">
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">The Difference</div>
          </Reveal>
          <Reveal className="text-center">
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight mb-4">Why choose Driftlss?</h2>
          </Reveal>
          <Reveal className="text-center">
            <p style={body} className="text-[1.05rem] font-light text-[#4A4A45] mb-16">Not all web solutions are created equal.</p>
          </Reveal>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-3 gap-6 items-start max-md:grid-cols-1">
            {compareCards.map((card, ci) => (
              <motion.div
                key={ci}
                variants={fadeUp}
                transition={{ duration: 0.9, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-8 ${
                  card.highlighted
                    ? "bg-white border-t-4 border-t-teal-600 border border-teal-600/15 shadow-[0_12px_40px_rgba(0,0,0,0.08)] scale-105 max-md:scale-100"
                    : "bg-white border border-[#EDE0CC]"
                }`}
              >
                {card.highlighted && (
                  <span style={body} className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[0.7rem] font-semibold uppercase tracking-wider bg-teal-600 text-white px-4 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <h3 style={display} className={`text-[1.4rem] font-normal mb-8 ${card.highlighted ? "text-teal-600" : "text-[#1A1A18]"}`}>
                  {card.title}
                </h3>
                <ul className="space-y-4">
                  {compareFeatures.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3">
                      {card.checks[fi] ? (
                        <span className="text-teal-600 font-semibold text-lg">✓</span>
                      ) : (
                        <span className="text-[#D4D4D0] text-lg">—</span>
                      )}
                      <span style={body} className={`text-[0.9rem] ${card.checks[fi] ? "text-[#1A1A18]" : "text-[#8A8A82]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-32 px-8 bg-[#1A1A18] text-[#FAF6F0] relative overflow-hidden max-md:py-20 max-md:px-6 process-glow">
        <div className="process-geo" />
        <div className="process-geo-2" />
        <div className="max-w-[1300px] mx-auto relative z-10">
          <Reveal>
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-[#99F6E4] mb-6">How It Works</div>
          </Reveal>
          <Reveal>
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-20">
              Three steps to a practice families trust online.
            </h2>
          </Reveal>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-3 gap-12 max-md:grid-cols-1 max-md:gap-0">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="pt-10 border-t border-white/10">
                {processIllustrations[i]}
                <div style={display} className="text-[4rem] text-teal-600 opacity-25 leading-none mb-6">{step.number}</div>
                <h3 style={display} className="text-2xl font-normal mb-4 leading-tight">{step.title}</h3>
                <p style={body} className="text-[0.95rem] font-light leading-relaxed text-white/60">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-32 px-8 border-t border-[#EDE0CC] max-md:py-20 max-md:px-6">
        <div className="max-w-[1300px] mx-auto">
          <Reveal>
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">What We Build</div>
          </Reveal>
          <Reveal>
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[600px] mb-16">
              Everything your practice needs to grow — nothing it doesn&apos;t.
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {services.map((svc, i) => (
              <Reveal key={i}>
                <div className="grid grid-cols-[1fr_2fr] gap-16 py-12 border-t border-[#EDE0CC] items-start transition-all duration-300 hover:pl-4 max-md:grid-cols-1 max-md:gap-4 group">
                  <div className="flex items-center gap-4">
                    {serviceIcons[i]}
                    <h3 style={display} className="text-[1.6rem] font-normal leading-tight transition-colors duration-300 group-hover:text-teal-600">{svc.title}</h3>
                  </div>
                  <p style={body} className="text-base font-light leading-relaxed text-[#4A4A45] max-w-[560px]">{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-32 px-8 max-md:py-20 max-md:px-6">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center">
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">Common Questions</div>
          </Reveal>
          <Reveal className="text-center">
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight mb-16">
              Everything you need to know.
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={i}>
                <div className="border-t border-[#EDE0CC]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-7 text-left group"
                  >
                    <span style={display} className="text-[1.2rem] font-normal leading-tight pr-8 transition-colors duration-300 group-hover:text-teal-600">
                      {faq.q}
                    </span>
                    <span
                      className={`text-2xl text-[#8A8A82] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p style={body} className="text-[0.95rem] font-light text-[#4A4A45] leading-relaxed pb-7 max-w-[700px]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#EDE0CC]" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="contact" className="py-32 px-8 text-[#FAF6F0] text-center relative overflow-hidden cta-gradient max-md:py-20 max-md:px-6">
        <div className="cta-rings">
          <div className="cta-ring cta-ring-1" />
          <div className="cta-ring cta-ring-2" />
          <div className="cta-ring cta-ring-3" />
          <div className="cta-ring cta-ring-4" />
        </div>
        <CTAIllustration />
        <Reveal>
          <h2 style={display} className="text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.08] tracking-tight mb-6 relative z-10">
            Ready to look like the<br />
            practice you <em className="italic text-[#99F6E4]">actually</em> are?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={body} className="text-lg font-light text-white/60 max-w-[480px] mx-auto mb-12 leading-relaxed relative z-10">
            15-minute call. No pitch deck. Just an honest conversation about what your practice needs and whether we&apos;re the right fit.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a href="https://calendly.com/admin-driftlss/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" style={body} className="relative z-10 inline-block font-semibold text-base px-12 py-4 bg-[#99F6E4] text-[#1A1A18] rounded-full no-underline transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(153,246,228,0.3)] hover:-translate-y-0.5">
            Book a Free Call
          </a>
        </Reveal>
        <Reveal delay={0.25} className="relative z-10 mt-12">
          <p style={body} className="text-white/50 text-sm text-center mb-4">Pick a time that works for you</p>
          <iframe
            src="https://calendly.com/admin-driftlss/15-minute-discovery-call?hide_gdpr_banner=1&background_color=1a1a18&text_color=faf6f0&primary_color=0d9488"
            className="w-full max-w-[700px] mx-auto rounded-xl border border-white/10"
            style={{ height: "580px" }}
            frameBorder="0"
            title="Book a Discovery Call"
          />
        </Reveal>
        <Reveal delay={0.3} className="relative z-10">
          <p style={body} className="text-white/40 my-8">or send us a message</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(form);
            }}
            className="max-w-[500px] mx-auto space-y-6 relative z-10"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={body}
              className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={body}
              className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition"
            />
            <select
              value={form.practiceType}
              onChange={(e) => setForm({ ...form, practiceType: e.target.value })}
              style={body}
              className="bg-transparent border-b border-white/20 text-white py-3 w-full focus:border-teal-400 focus:outline-none transition [&>option]:text-[#1A1A18]"
            >
              <option value="" className="text-white/30">Select your practice type</option>
              <option value="Occupational Therapy">Occupational Therapy</option>
              <option value="Physical Therapy">Physical Therapy</option>
              <option value="ABA Therapy">ABA Therapy</option>
              <option value="Speech-Language Pathology">Speech-Language Pathology</option>
              <option value="Sensory Gym">Sensory Gym</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              rows={3}
              placeholder="Tell us about your practice"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={body}
              className="bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 w-full focus:border-teal-400 focus:outline-none transition resize-none"
            />
            <button
              type="submit"
              style={body}
              className="font-semibold text-sm px-8 py-3 bg-[#99F6E4] text-[#1A1A18] rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(153,246,228,0.3)] hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 px-8 border-t border-[#EDE0CC] flex justify-between items-center max-w-[1300px] mx-auto max-md:flex-col max-md:gap-4 max-md:text-center max-md:px-6">
        <div style={body} className="text-[0.85rem] text-[#4A4A45]">© 2026 Driftlss. Fox Cities, WI.</div>
        <div style={body} className="text-[0.85rem] text-[#4A4A45]">
          <a href="mailto:admin@driftlss.com" className="text-[#1A1A18] no-underline ml-8 transition-colors duration-300 hover:text-teal-600 max-md:ml-4">admin@driftlss.com</a>
        </div>
      </footer>
    </>
  );
}
