"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
// ICONS
// ═══════════════════════════════════════════
const IconLayers = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-teal-600 fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-teal-600 fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /><path d="M20 4v4h-4" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-teal-600 fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" />
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-teal-600 fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" /><path d="M7 16l4-8 4 5 5-9" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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
  { icon: <IconLayers />, title: "Design That Converts", desc: "Clean, warm interfaces that signal professionalism from the first click. No clip art. No templates. Thoughtful design that reflects the quality of your care." },
  { icon: <IconClock />, title: "AI That Works 24/7", desc: "Intelligent chatbots answer parent questions around the clock. Automated follow-ups convert inquiries into intakes — without adding to your plate." },
  { icon: <IconSearch />, title: "Found by Every Family", desc: "GEO ensures your practice surfaces in AI-powered search, Google, and everywhere parents look. Visibility that compounds over time." },
  { icon: <IconChart />, title: "Measurable Growth", desc: "Custom dashboards track every lead, inquiry, and conversion. See exactly what's working so every dollar invested earns more back." },
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

const compareRows = [
  { feature: "Custom design for your brand", driftless: "check", template: "Limited", diy: "x" },
  { feature: "AI chatbot & automation", driftless: "check", template: "x", diy: "x" },
  { feature: "Built-in CRM system", driftless: "check", template: "x", diy: "x" },
  { feature: "AI search optimization (GEO)", driftless: "check", template: "x", diy: "x" },
  { feature: "Mobile-first & fast", driftless: "check", template: "check", diy: "Varies" },
  { feature: "Ongoing optimization & support", driftless: "check", template: "Extra $$$", diy: "x" },
  { feature: "Therapy industry expertise", driftless: "check", template: "x", diy: "x" },
];

function CompareCell({ value }: { value: string }) {
  if (value === "check") return <span className="check">✓</span>;
  if (value === "x") return <span className="x-mark">✕</span>;
  return <span className="partial">{value}</span>;
}

const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
export default function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const browserRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const heroBrowserRef = useRef<HTMLDivElement>(null);
  const heroIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
        <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-center">
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
                <iframe ref={heroIframeRef} src="https://spectrum-rouge.vercel.app" loading="lazy" title="Spectrum Sensory Gyms preview" />
              </div>
            </div>
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
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(13,148,136,0.08)] flex items-center justify-center mb-6">{b.icon}</div>
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
              <iframe ref={iframeRef} src="https://spectrum-rouge.vercel.app" loading="lazy" title="Spectrum Sensory Gyms" />
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
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="text-center">
            <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">The Difference</div>
          </Reveal>
          <Reveal className="text-center">
            <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight mb-4">Why choose Driftlss?</h2>
          </Reveal>
          <Reveal className="text-center">
            <p style={body} className="text-[1.05rem] font-light text-[#4A4A45] mb-16">Not all web solutions are created equal.</p>
          </Reveal>
          <Reveal>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight col-driftless">Driftlss</th>
                  <th>Template Site</th>
                  <th>DIY Builder</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td className="col-driftless"><CompareCell value={row.driftless} /></td>
                    <td><CompareCell value={row.template} /></td>
                    <td><CompareCell value={row.diy} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
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
                  <h3 style={display} className="text-[1.6rem] font-normal leading-tight transition-colors duration-300 group-hover:text-teal-600">{svc.title}</h3>
                  <p style={body} className="text-base font-light leading-relaxed text-[#4A4A45] max-w-[560px]">{svc.desc}</p>
                </div>
              </Reveal>
            ))}
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
        <div
          className="calendly-inline-widget mx-auto rounded-2xl overflow-hidden relative z-10 mt-12"
          data-url="https://calendly.com/admin-driftlss/15-minute-discovery-call?hide_gdpr_banner=1&background_color=1a1a18&text_color=faf6f0&primary_color=0d9488"
          style={{ minWidth: '320px', width: '100%', maxWidth: '660px', height: '700px' }}
        />
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
