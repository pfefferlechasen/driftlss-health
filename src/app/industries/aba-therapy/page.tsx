"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, Menu, X, Search, Users, CalendarCheck, Bot, TrendingUp, Clock, ShieldCheck, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Animation Helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-display text-xl text-charcoal-700 tracking-tight">
            Driftless
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-charcoal-400 hover:text-teal-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal-500"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-cream-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal-500 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-500 text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display text-xl text-cream-100">
                Driftless
              </span>
            </div>
            <p className="text-charcoal-300 max-w-xs text-sm leading-relaxed">
              Websites and AI systems built exclusively for therapy practices and
              pediatric care centers. Based in Wisconsin.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">Services</h4>
              <div className="flex flex-col gap-2.5">
                {["Practice Websites", "AI Chatbots", "SEO & GEO", "Workflow Automation"].map((s) => (
                  <a key={s} href="/#services" className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">Industries</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "ABA Therapy", href: "/industries/aba-therapy" },
                  { label: "Occupational Therapy", href: "/industries/occupational-therapy" },
                  { label: "Speech Pathology", href: "/industries/speech-therapy" },
                  { label: "Sensory Gyms", href: "/industries/sensory-gyms" },
                ].map((s) => (
                  <a key={s.label} href={s.href} className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors">{s.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-sm">&copy; 2026 Driftless. All rights reserved.</p>
          <p className="text-charcoal-400 text-sm">Wisconsin</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Pain Points Data ─── */
const painPoints = [
  {
    icon: <Users className="w-6 h-6 text-coral-500" />,
    title: "Parents Don't Understand ABA",
    description:
      "ABA therapy is misunderstood and stigmatized. Most clinic websites fail to explain what ABA actually is in a way that's warm, clear, and reassuring to parents who just received a diagnosis.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-coral-500" />,
    title: "Insurance Complexity Drives Families Away",
    description:
      "Navigating insurance for ABA is overwhelming. If your site doesn't clearly explain which plans you accept and how the process works, parents abandon their search and call someone else.",
  },
  {
    icon: <Clock className="w-6 h-6 text-coral-500" />,
    title: "Waitlists with Zero Communication",
    description:
      "Families wait months for ABA services. Without automated waitlist updates, they feel forgotten, lose trust, and find another provider before you can serve them.",
  },
  {
    icon: <Search className="w-6 h-6 text-coral-500" />,
    title: "Invisible When Families Search",
    description:
      "When parents Google \"ABA therapy near me,\" your outdated clinical-looking site gets buried. Modern search — including AI engines — favors well-structured, authoritative content.",
  },
];

/* ─── Solutions Data ─── */
const solutions = [
  {
    icon: <BookOpen className="w-6 h-6 text-teal-500" />,
    title: "Approachable Practice Website",
    description:
      "We replace the clinical feel with warm, modern design that helps parents understand ABA, trust your team, and take the next step confidently.",
    features: ["Clear ABA explainers for parents", "Insurance & coverage information", "BCBA and RBT team bios"],
  },
  {
    icon: <Bot className="w-6 h-6 text-teal-500" />,
    title: "AI Chatbot & Intake Automation",
    description:
      "An AI assistant that answers parent questions about ABA, walks them through insurance, collects intake details, and gets them on your schedule or waitlist instantly.",
    features: ["24/7 parent Q&A about ABA therapy", "Insurance pre-screening", "Automated intake collection"],
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
    title: "SEO & Generative Engine Optimization",
    description:
      "We optimize your site so it ranks for \"ABA therapy near me\" on Google and appears in AI-powered search results where more families are starting their search.",
    features: ["Local SEO for ABA-specific terms", "GEO for ChatGPT and AI Overviews", "Google Business Profile optimization"],
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-teal-500" />,
    title: "Waitlist & Workflow Automation",
    description:
      "Automated waitlist management that keeps families engaged. Status updates, position notifications, and onboarding sequences that run without your team lifting a finger.",
    features: ["Waitlist position updates", "Automated onboarding sequences", "Follow-up reminders & check-ins"],
  },
];

/* ─── Stats Data ─── */
const stats = [
  { value: 1, suffix: " in 36", label: "children are diagnosed with autism (CDC, 2024)" },
  { value: 85, suffix: "%", label: "of parents research ABA providers online first" },
  { value: 6, suffix: " mo", label: "average waitlist time for ABA services nationally" },
  { value: 40, suffix: "%", label: "of families abandon providers with poor online experience" },
];

/* ─── Page ─── */
export default function ABATherapyPage() {
  return (
    <main className="bg-cream-50">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-sage-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 bg-teal-50 px-4 py-1.5 rounded-full">
              ABA Therapy
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Make ABA Approachable.
              <br />
              <span className="text-teal-600">Starting with Your Website.</span>
            </h1>
            <p className="text-charcoal-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Parents who just received an autism diagnosis are overwhelmed. Your website should be the calm, clear guide that helps them take the next step — not another source of confusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/driftless/30min"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 inline-flex items-center justify-center gap-2"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/work"
                className="border-2 border-charcoal-200 hover:border-teal-300 text-charcoal-600 font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center"
              >
                See Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-coral-500 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                The Problem
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 mb-4">
                ABA Clinics Deserve Better Online Presence
              </h2>
              <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
                You change lives every day. But your website — the first thing families see — often tells a different story.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-cream-200 hover:border-coral-200 transition-colors hover:shadow-lg hover:shadow-coral-50">
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-5">
                    {point.icon}
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">{point.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                What We Build
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 mb-4">
                Built for ABA. Built for Families.
              </h2>
              <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
                We understand the unique challenges ABA clinics face — from parent education to insurance navigation to waitlist management.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <Reveal key={solution.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-cream-200 hover:border-teal-200 transition-colors hover:shadow-lg hover:shadow-teal-50 h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                    {solution.icon}
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">{solution.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed mb-5">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-charcoal-500">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                By the Numbers
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal-700">
                The Demand for ABA Is Growing Fast
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-teal-600 mb-3">
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-charcoal-400 text-sm leading-relaxed">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-800/20 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Families Are Looking for ABA Providers Right Now
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Let's build a website and system that helps them find you, trust you, and start services faster. Free 30-minute strategy call — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/driftless/30min"
                className="bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book a 30-Minute Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border-2 border-teal-300/40 hover:border-teal-300 text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center"
              >
                Send Us a Message
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
