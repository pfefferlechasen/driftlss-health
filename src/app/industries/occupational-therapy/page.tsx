"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, Menu, X, Search, HelpCircle, CalendarCheck, Bot, TrendingUp, Users, Stethoscope, ArrowRight, CheckCircle2, FileText } from "lucide-react";
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
    icon: <HelpCircle className="w-6 h-6 text-coral-500" />,
    title: "Nobody Understands What OT Is",
    description:
      "Most people can't explain what occupational therapy does. Your website needs to bridge that gap — clearly showing parents, patients, and referral sources exactly how OT helps, in plain language.",
  },
  {
    icon: <Users className="w-6 h-6 text-coral-500" />,
    title: "Serving Everyone, Communicating to No One",
    description:
      "OT practices often serve pediatric, adult, and geriatric populations. But when your site tries to speak to everyone at once, it resonates with nobody. Each audience needs its own clear path.",
  },
  {
    icon: <Search className="w-6 h-6 text-coral-500" />,
    title: "Lost in Local Search Results",
    description:
      "When someone searches \"occupational therapy near me,\" practices with outdated sites and no SEO strategy get buried under hospital networks and aggregator directories.",
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-coral-500" />,
    title: "Referral-to-Appointment Drop Off",
    description:
      "Physicians refer patients to you, but the patient never calls. Without easy online booking and clear next-step guidance, referrals fall through the cracks.",
  },
];

/* ─── Solutions Data ─── */
const solutions = [
  {
    icon: <Stethoscope className="w-6 h-6 text-teal-500" />,
    title: "Clarity-First Practice Website",
    description:
      "We build sites that explain what OT is, who it helps, and what to expect — with dedicated sections for each population you serve. Parents, adults, and referral sources each get a tailored experience.",
    features: ["Service pages by population (pediatric, adult, geriatric)", "\"What is OT?\" education section", "Therapist bios with specialties"],
  },
  {
    icon: <Bot className="w-6 h-6 text-teal-500" />,
    title: "AI Chatbot & Patient Intake",
    description:
      "An AI assistant that helps visitors understand your services, answers common questions, and collects intake information so patients are ready before their first appointment.",
    features: ["24/7 Q&A about OT services", "Automated intake form collection", "Insurance verification guidance"],
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
    title: "SEO & Generative Engine Optimization",
    description:
      "We optimize for the searches that matter: \"pediatric OT near me,\" \"occupational therapy for sensory processing,\" and more — across Google, AI search engines, and local directories.",
    features: ["Local SEO for OT-specific terms", "GEO for AI-powered search", "Content strategy for parent resources"],
  },
  {
    icon: <FileText className="w-6 h-6 text-teal-500" />,
    title: "Booking & Workflow Automation",
    description:
      "From physician referral to first appointment, we automate the journey. Online scheduling, referral tracking, appointment reminders, and follow-up sequences.",
    features: ["Online appointment booking", "Referral tracking system", "Automated reminders & follow-ups"],
  },
];

/* ─── Stats Data ─── */
const stats = [
  { value: 60, suffix: "%", label: "of patients choose providers based on online presence" },
  { value: 30, suffix: "%", label: "of physician referrals never convert to appointments" },
  { value: 5, suffix: "x", label: "more engagement with clear service explanations" },
  { value: 88, suffix: "%", label: "of healthcare searches start on a search engine" },
];

/* ─── Page ─── */
export default function OccupationalTherapyPage() {
  return (
    <main className="bg-cream-50">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-teal-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 bg-teal-50 px-4 py-1.5 rounded-full">
              Occupational Therapy
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Your Patients Need OT.
              <br />
              <span className="text-teal-600">Help Them Find You.</span>
            </h1>
            <p className="text-charcoal-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Occupational therapy changes lives — but most people don't know what it is until they need it. Your website should educate, build trust, and make booking effortless.
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
                Great OT Practices, Invisible Online
              </h2>
              <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
                You help patients regain independence every day. But if your website doesn't communicate that clearly, you're losing patients to practices with better marketing.
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
                A Complete Online Presence for OT Practices
              </h2>
              <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
                From educating patients about what OT is to automating your booking workflow — we handle the digital side so you can focus on care.
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
                Why Digital Presence Matters for OT
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
              Let's Build Something Your Patients Actually Understand
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Your OT practice does incredible work. Let's make sure your online presence reflects that. Free 30-minute strategy call — we'll walk through exactly what we'd build for you.
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
