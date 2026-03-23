"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Hand, Brain, Shirt, PenTool, ChevronDown, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, Star, Shield, Clock, BookOpen, Award,
  MessageCircle, Calendar, Target, Eye, Utensils, GraduationCap, Users,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  THEME                                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

const accent = "#0D9488";
const accentDark = "#0F766E";
const accentLight = "#CCFBF1";
const warm = "#FAF6F0";
const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  DATA                                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

const navLinks = ["Services", "About", "Process", "Team", "FAQ", "Contact"];

const heroFeatures = [
  "Licensed Occupational Therapists",
  "Individualized Treatment Plans",
  "Insurance Accepted",
];

const services = [
  { icon: Hand, title: "Fine Motor Development", desc: "Strengthening hand coordination, grip patterns, and dexterity through engaging, play-based activities. We build the foundation for writing, buttoning, and everyday tasks.", features: ["Grasp & pinch strength", "In-hand manipulation", "Bilateral coordination"] },
  { icon: Brain, title: "Sensory Processing", desc: "Helping children regulate sensory input so they can focus, learn, and participate in everyday activities without overwhelm or avoidance.", features: ["Sensory diet creation", "Self-regulation strategies", "Environmental modifications"] },
  { icon: Shirt, title: "Self-Care & Daily Living", desc: "Building independence with dressing, grooming, toileting, and other daily routines. We break down complex tasks into achievable steps.", features: ["Dressing & fasteners", "Hygiene routines", "Toileting independence"] },
  { icon: PenTool, title: "Handwriting Programs", desc: "Structured programs to improve letter formation, pencil grip, spacing, and writing endurance so your child can keep up in the classroom.", features: ["Pencil grip training", "Letter formation", "Writing endurance"] },
  { icon: Utensils, title: "Feeding Therapy", desc: "Addressing picky eating, oral motor challenges, and sensory-based food aversions. We expand your child's diet safely and without stress.", features: ["Food exploration", "Oral motor skills", "Mealtime strategies"] },
  { icon: Eye, title: "Visual-Motor Integration", desc: "Developing the connection between visual perception and motor coordination — essential for reading, writing, cutting, and catching a ball.", features: ["Eye-hand coordination", "Visual tracking", "Spatial awareness"] },
];

const processSteps = [
  { number: "01", title: "Free Consultation", desc: "Tell us about your child, your concerns, and your goals. No pressure, no jargon — just a genuine conversation about how occupational therapy can help.", icon: Phone },
  { number: "02", title: "Comprehensive Evaluation", desc: "A licensed occupational therapist conducts a thorough assessment of your child's fine motor, sensory, visual-motor, and self-care skills in a comfortable setting.", icon: Target },
  { number: "03", title: "Personalized Treatment Plan", desc: "We design a goal-driven plan built around your child's unique strengths and challenges. You'll review and approve every goal before therapy begins.", icon: BookOpen },
  { number: "04", title: "Therapy Begins", desc: "Your child starts working with their dedicated OT. Sessions feel like play but target specific skills. You'll receive regular updates as your child progresses.", icon: Hand },
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "400+", label: "Families Served" },
  { value: "97%", label: "Parent Satisfaction" },
  { value: "25+", label: "Licensed Therapists" },
];

const outcomes = [
  { value: "91%", label: "of clients show measurable improvement in fine motor skills within 6 months" },
  { value: "2.8×", label: "average increase in self-care independence scores" },
  { value: "96%", label: "of families recommend us to other parents" },
];

const team = [
  { name: "Dr. Rachel Patel", role: "Clinical Director, OTR/L, OTD", bio: "12+ years specializing in pediatric sensory processing and early intervention. Leads our evidence-based clinical programs.", gradient: "from-teal-400 to-emerald-600" },
  { name: "Marcus Chen", role: "Senior Therapist, OTR/L", bio: "Passionate about feeding therapy and helping children expand their diets through trust-based, sensory approaches.", gradient: "from-emerald-400 to-teal-600" },
  { name: "Aisha Johnson", role: "Certified OT Assistant, COTA/L", bio: "Specializes in handwriting remediation and fine motor skill development. Known for making every session feel like an adventure.", gradient: "from-cyan-400 to-teal-600" },
  { name: "Dr. Emily Vasquez", role: "Sensory Integration Specialist, OTR/L", bio: "Advanced training in Ayres Sensory Integration. Works with children who have complex sensory and motor planning challenges.", gradient: "from-teal-500 to-cyan-600" },
];

const testimonials = [
  { quote: "After three months at Thrive, our daughter could button her own coat for the first time. Watching her face light up was everything. The therapists here truly understand kids.", name: "Kevin R.", detail: "Parent of a 5-year-old" },
  { quote: "Our son used to melt down at every meal. The feeding therapy program changed everything — he's trying new foods on his own now. We never thought this was possible.", name: "Sarah & Mike D.", detail: "Parents of a 4-year-old" },
  { quote: "The handwriting program was a game changer. My daughter went from dreading school to proudly showing me her papers. The OTs here don't just teach skills, they build confidence.", name: "Amanda L.", detail: "Parent of a 7-year-old" },
];

const insuranceLogos = [
  "Blue Cross Blue Shield", "United Healthcare", "Aetna", "Cigna", "Medicaid", "Tricare",
];

const faqs = [
  { q: "What age range do you serve?", a: "We work with children from birth through 18 years of age. Early intervention yields the strongest outcomes, but occupational therapy can benefit children at any age. Our team has experience across all developmental stages." },
  { q: "What does a typical OT session look like?", a: "Sessions are 45 to 60 minutes and look like structured play. We use swings, obstacle courses, crafts, putty, and games — each carefully designed to target specific developmental goals. Every activity has a therapeutic purpose, even when it feels like fun." },
  { q: "How do I know if my child needs occupational therapy?", a: "If your child struggles with handwriting, avoids certain textures or foods, has trouble with buttons or zippers, seems clumsy compared to peers, or gets easily overwhelmed by sensory input, an OT evaluation can identify specific needs and strengths." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, United Healthcare, Aetna, Cigna, Medicaid, and Tricare. Our dedicated authorization team handles all the paperwork so you can focus on your child." },
  { q: "How often will my child need therapy?", a: "Most children attend one to two sessions per week, though this varies based on your child's needs and goals. During the evaluation, we'll recommend the optimal frequency and work with your family's schedule." },
  { q: "What's the difference between OT and physical therapy?", a: "Occupational therapy focuses on fine motor skills, sensory processing, self-care, and the skills needed for 'occupations' like school and play. Physical therapy focuses on gross motor skills, strength, balance, and mobility. Many children benefit from both." },
  { q: "Will I be involved in my child's therapy?", a: "Absolutely. Parent involvement is one of the strongest predictors of success. You'll learn home strategies, observe sessions, attend progress reviews, and have direct access to your child's therapist. We're partners in your child's growth." },
  { q: "How do you measure progress?", a: "We use standardized assessments and systematic data collection to track progress toward specific, measurable goals. You'll receive detailed progress reports on a regular schedule and participate in goal review meetings throughout treatment." },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  ANIMATIONS                                                                */
/* ═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  COMPONENT                                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */

export default function OTPreview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [customImages, setCustomImages] = useState<{ logo?: string; hero?: string; about?: string }>({});
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "updateImages") {
        setCustomImages({ logo: e.data.logo || undefined, hero: e.data.hero || undefined, about: e.data.about || undefined });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={body}>

      {/* ═══ NAVBAR ═══ */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {customImages.logo ? (
            <img src={customImages.logo} alt="Logo" className="h-8 object-contain" />
          ) : (
            <span style={{ ...display, color: accent }} className="text-xl font-semibold">Thrive OT</span>
          )}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-600 hover:text-gray-900 transition">{link}</a>
            ))}
          </div>
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #F0FDFA 50%, #ECFDF5 100%)` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div style={{ background: accent }} className="w-2 h-2 rounded-full" />
              <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase">Pediatric Occupational Therapy</p>
            </div>
            <h1 style={display} className="text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 leading-[1.1] mb-6">
              Helping kids <span style={{ color: accent }}>thrive</span> through purposeful play
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We combine evidence-based occupational therapy with genuine warmth, helping children build the fine motor, sensory, and self-care skills they need to succeed — one breakthrough at a time.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
                Schedule Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#services" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">
                Our Services
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {heroFeatures.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <CheckCircle2 size={14} style={{ color: accent }} /> {f}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}>
            <div className="relative">
              {customImages.hero ? (
                <img src={customImages.hero} alt="Child in occupational therapy" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #ECFDF5 50%, #CCFBF1 100%)` }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div style={{ background: accent }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Hand size={28} className="text-white" />
                    </div>
                    <p style={{ ...display, color: accentDark }} className="text-2xl font-semibold mb-2">Your Hero Image</p>
                    <p className="text-sm" style={{ color: `${accent}99` }}>Upload a photo of your clinic or team</p>
                  </div>
                </div>
              )}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div style={{ background: accentLight }} className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Star size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">4.9/5 Rating</p>
                  <p className="text-xs text-gray-500">from 200+ families</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ INSURANCE BAR ═══ */}
      <section className="py-6 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Insurance Accepted</span>
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            {insuranceLogos.map((name, i) => (
              <span key={i} className="text-sm text-gray-400 font-medium">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Comprehensive OT Services</h2>
            <p className="text-gray-500">Every program is individualized — because every child is unique. Here&apos;s how we help families like yours.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-7 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                <div style={{ background: accentLight }} className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon size={22} style={{ color: accent }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 size={12} style={{ color: accent }} /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="process" className="py-24 px-6" style={{ background: warm }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Simple steps to getting started</h2>
            <p className="text-gray-500">We make the process as easy as possible so you can focus on what matters most — your child.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                  <div style={{ background: accent }} className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Step {step.number}</span>
                    <h3 className="font-semibold text-gray-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gray-200" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT / STATS ═══ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}>
            <div className="relative">
              {customImages.about ? (
                <img src={customImages.about} alt="Occupational therapy session" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-lg w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #ECFDF5 50%, #CCFBF1 100%)` }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div style={{ background: accent }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Users size={28} className="text-white" />
                    </div>
                    <p style={{ ...display, color: accentDark }} className="text-2xl font-semibold mb-2">Your About Image</p>
                    <p className="text-sm" style={{ color: `${accent}99` }}>Upload a photo of your team or facility</p>
                  </div>
                </div>
              )}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />)}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">&ldquo;The best decision we ever made for our family.&rdquo;</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Why Families Choose Us</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-6">Where small hands make big strides</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team of licensed occupational therapists and certified occupational therapy assistants create individualized programs that celebrate every child&apos;s unique strengths while building the skills they need for independence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe therapy should feel like play, not work. That&apos;s why our sessions are built around your child&apos;s interests — using swings, crafts, games, and sensory activities to create breakthroughs that carry over into everyday life.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: accentLight }}>
                  <p style={{ color: accent, ...display }} className="text-2xl font-bold mb-1">{s.value}</p>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ OUTCOMES ═══ */}
      <section className="py-20 px-6" style={{ background: accent }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 style={display} className="text-3xl md:text-4xl text-white">Real Results for Real Families</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p style={display} className="text-5xl text-white font-bold mb-3">{o.value}</p>
                <p className="text-white/80 text-sm leading-relaxed">{o.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Our Team</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Meet the therapists behind the progress</h2>
            <p className="text-gray-500">Every member of our team shares a commitment to evidence-based practice and genuine compassion for your child.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center group">
                <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${t.gradient} mx-auto mb-5 group-hover:scale-105 transition-transform shadow-lg`} />
                <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
                <p style={{ color: accent }} className="text-sm font-medium mb-2">{t.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 px-6" style={{ background: accentLight }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What Parents Say</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900">Stories from families like yours</h2>
          </motion.div>
          <div className="relative">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTestimonial === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`text-center ${activeTestimonial === i ? "" : "absolute inset-0 pointer-events-none"}`}
              >
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="#FBBF24" color="#FBBF24" />)}
                  </div>
                  <p style={display} className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeTestimonial === i ? "w-8" : "bg-gray-300"}`}
                style={activeTestimonial === i ? { background: accent } : {}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Common Questions</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 rounded-xl overflow-hidden hover:border-teal-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                  <span className="font-medium text-gray-900 pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA / CONTACT ═══ */}
      <section id="contact" className="py-24 px-6" style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accentDark} 100%)` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={display} className="text-3xl md:text-4xl text-white mb-4">Ready to help your child thrive?</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Schedule a free consultation with our team. We&apos;ll listen to your concerns, answer your questions, and help you understand how occupational therapy can make a difference for your family.
            </p>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Phone size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Call us</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </a>
              <a href="mailto:info@thriveot.com" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-medium">info@thriveot.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Visit us</p>
                  <p className="font-medium">123 Therapy Lane, Suite 300</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 style={display} className="text-xl text-gray-900 mb-6">Schedule a Free Consultation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-teal-400 transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-teal-400 transition" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-teal-400 transition" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-teal-400 transition" />
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-teal-400 transition">
                  <option value="">Primary Concern</option>
                  <option>Fine Motor Skills</option>
                  <option>Sensory Processing</option>
                  <option>Handwriting</option>
                  <option>Feeding / Picky Eating</option>
                  <option>Self-Care / Daily Living</option>
                  <option>Visual-Motor Skills</option>
                  <option>General Evaluation</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-teal-400 transition">
                  <option value="">Child&apos;s Age Range</option>
                  <option>0 – 2 years</option>
                  <option>3 – 5 years</option>
                  <option>6 – 9 years</option>
                  <option>10 – 14 years</option>
                  <option>15 – 18 years</option>
                </select>
                <textarea placeholder="Tell us about your child and your concerns..." rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-teal-400 transition resize-none" />
                <button style={{ background: accent }} className="w-full text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                  <Calendar size={16} /> Book Consultation
                </button>
                <p className="text-xs text-gray-400 text-center">Free. No obligation. We&apos;ll respond within 24 hours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <span style={{ ...display, color: accent }} className="text-lg font-semibold">Thrive OT</span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">Evidence-based pediatric occupational therapy with genuine warmth. Helping children and families thrive since 2014.</p>
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-3">Quick Links</p>
              <div className="space-y-2">
                {["Services", "Our Process", "About Us", "FAQ", "Contact"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 text-sm hover:text-white transition">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-3">Contact</p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>(555) 123-4567</p>
                <p>info@thriveot.com</p>
                <p>123 Therapy Lane, Suite 300</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Thrive OT. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built by <a href="https://driftlss.com" className="text-teal-400 hover:text-white transition">Driftlss</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
