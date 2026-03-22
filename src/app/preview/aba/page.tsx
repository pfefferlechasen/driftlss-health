"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Heart, Home, Users, Sparkles, ChevronDown, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, Star, Shield, Clock, BookOpen, Award,
  MessageCircle, Calendar, Brain, Target, Puzzle, GraduationCap,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  THEME                                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

const accent = "#7C3AED";
const accentDark = "#6D28D9";
const accentLight = "#EDE9FE";
const warm = "#FAF6F0";
const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  DATA                                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

const navLinks = ["Services", "About", "Process", "Team", "FAQ", "Contact"];

const heroFeatures = [
  "Board-Certified Analysts",
  "Individualized Programs",
  "Insurance Accepted",
];

const services = [
  { icon: Home, title: "In-Home ABA", desc: "Therapy delivered in the comfort of your home, tailored to your child's natural environment and daily routines. Our therapists work where your child feels safest.", features: ["Natural environment teaching", "Family-centered approach", "Flexible scheduling"] },
  { icon: Sparkles, title: "Center-Based Programs", desc: "Structured sessions in our purpose-built clinic with sensory rooms, social areas, and play-based learning spaces designed for breakthroughs.", features: ["Purpose-built facility", "Peer interaction", "Specialized equipment"] },
  { icon: Users, title: "Parent Training", desc: "Empowering caregivers with evidence-based strategies to reinforce skills and manage behaviors at home. Your child's progress doesn't stop when we leave.", features: ["Weekly coaching sessions", "Take-home strategies", "Progress tracking tools"] },
  { icon: Heart, title: "Social Skills Groups", desc: "Small-group sessions focused on peer interaction, emotional regulation, and building meaningful friendships that last beyond the clinic.", features: ["Age-matched groups", "Real-world practice", "Emotional regulation"] },
  { icon: Brain, title: "Early Intervention", desc: "For children 18 months to 3 years. Early ABA maximizes neuroplasticity during critical developmental windows when the brain is most adaptable.", features: ["Ages 18 months to 3 years", "Play-based learning", "Developmental milestones"] },
  { icon: GraduationCap, title: "School Readiness", desc: "Preparing your child for the classroom with academic readiness skills, following instructions, and navigating social dynamics with peers.", features: ["Academic foundations", "Classroom behavior", "Transition support"] },
];

const processSteps = [
  { number: "01", title: "Free Consultation", desc: "We listen. Tell us about your child, your concerns, and your goals. No pressure, no jargon — just a genuine conversation about how we can help.", icon: Phone },
  { number: "02", title: "Comprehensive Assessment", desc: "A board-certified behavior analyst conducts a thorough evaluation, observing your child in their natural setting and identifying strengths and growth areas.", icon: Target },
  { number: "03", title: "Personalized Plan", desc: "We design a treatment plan built around your child's unique profile — not a cookie-cutter program. You'll review and approve every goal before we begin.", icon: Puzzle },
  { number: "04", title: "Therapy Begins", desc: "Your child starts working with their dedicated therapist. You'll receive regular progress updates, and we adjust the plan as your child grows.", icon: Heart },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Families Served" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "40+", label: "Certified Therapists" },
];

const outcomes = [
  { value: "87%", label: "of clients show measurable improvement within 6 months" },
  { value: "3.2×", label: "average increase in functional communication skills" },
  { value: "94%", label: "of families recommend us to other parents" },
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Clinical Director, BCBA-D", bio: "15+ years of clinical experience. Specializes in early intervention and complex behavioral challenges.", gradient: "from-purple-400 to-violet-600" },
  { name: "James Okafor", role: "Lead Therapist, BCBA", bio: "Passionate about parent training and building family-centered programs that extend beyond the clinic.", gradient: "from-violet-400 to-purple-600" },
  { name: "Emily Nguyen", role: "RBT Supervisor", bio: "Trains and mentors our technician team to deliver consistent, compassionate, evidence-based care.", gradient: "from-fuchsia-400 to-purple-600" },
  { name: "Dr. Michael Torres", role: "Assessment Coordinator, BCBA-D", bio: "Specializes in comprehensive functional behavior assessments and individualized treatment planning.", gradient: "from-purple-500 to-indigo-600" },
];

const testimonials = [
  { quote: "In six months, our son went from non-verbal to saying full sentences. The team didn't just change his life — they changed ours.", name: "Maria T.", detail: "Parent of a 4-year-old" },
  { quote: "We tried three other ABA providers before finding this team. The difference is night and day. They actually listen and adjust to what works for our daughter.", name: "David & Kim R.", detail: "Parents of a 6-year-old" },
  { quote: "The parent training changed everything. I finally feel equipped to help my child instead of feeling lost. The strategies they taught me work at home, at the store, everywhere.", name: "Jennifer L.", detail: "Parent of a 3-year-old" },
];

const insuranceLogos = [
  "Blue Cross Blue Shield", "United Healthcare", "Aetna", "Cigna", "Medicaid", "Tricare",
];

const faqs = [
  { q: "What age range do you serve?", a: "We work with children from 18 months through 18 years of age. Early intervention yields the strongest outcomes, but it's never too late to start ABA therapy. Our team has experience across all age groups and developmental levels." },
  { q: "How many hours per week is typical?", a: "Programs typically range from 10 to 40 hours per week depending on your child's needs and goals. During your assessment, we'll recommend the optimal intensity and work with your family's schedule to make it sustainable." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, United Healthcare, Aetna, Cigna, Medicaid, and Tricare. Our dedicated authorization team handles all the paperwork — you focus on your child, we handle the rest." },
  { q: "How do I get started?", a: "Simply schedule a free consultation through our website or call us directly. We'll discuss your child's needs, walk you through our process, and answer every question you have. There's zero pressure and zero obligation." },
  { q: "What qualifications does your staff have?", a: "Our clinical team includes Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs). All staff undergo rigorous training and ongoing professional development." },
  { q: "Will I be involved in my child's therapy?", a: "Absolutely. Parent involvement is one of the strongest predictors of success in ABA. You'll receive regular training, attend progress reviews, and have direct access to your child's BCBA. We're partners in this journey." },
  { q: "How do you measure progress?", a: "We use systematic data collection during every session. Your child's BCBA analyzes this data to track progress toward specific goals, adjusting the treatment plan as needed. You'll receive detailed progress reports on a regular schedule." },
  { q: "What makes your approach different?", a: "We believe ABA should feel like play, not work. Our programs are built around your child's interests and motivations. We focus on building skills in naturalistic settings so they generalize to real life — not just in a clinic." },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  ANIMATIONS                                                                */
/* ═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
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

export default function ABAPreview() {
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
            <span style={{ ...display, color: accent }} className="text-xl font-semibold">Bright Horizons ABA</span>
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
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #F5F3FF 50%, #FDF4FF 100%)` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div style={{ background: accent }} className="w-2 h-2 rounded-full" />
              <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase">Evidence-Based ABA Therapy</p>
            </div>
            <h1 style={display} className="text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 leading-[1.1] mb-6">
              Compassionate care for every <span style={{ color: accent }}>milestone</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We combine the science of Applied Behavior Analysis with genuine compassion, helping children build skills, confidence, and independence — one breakthrough at a time.
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
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative">
              <img src={customImages.hero || "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80"} alt="Child in therapy" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Comprehensive ABA Services</h2>
            <p className="text-gray-500">Every program is individualized — because every child is unique. Here&apos;s how we help families like yours.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-7 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
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
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative">
              <img src={customImages.about || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80"} alt="Therapy session" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-6">A trusted partner in your child&apos;s journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team of board-certified behavior analysts and registered behavior technicians create individualized programs that celebrate every child&apos;s unique strengths while building critical life skills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe therapy should feel like play, not work. That&apos;s why our programs are built around your child&apos;s interests and natural motivations — creating breakthroughs that generalize to real life.
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Meet the people behind the progress</h2>
            <p className="text-gray-500">Every member of our team shares a commitment to evidence-based practice and genuine compassion.</p>
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
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 rounded-xl overflow-hidden hover:border-purple-200 transition-colors">
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
            <h2 style={display} className="text-3xl md:text-4xl text-white mb-4">Ready to take the first step?</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Schedule a free consultation with our team. We&apos;ll listen to your concerns, answer your questions, and help you understand how ABA therapy can make a difference for your family.
            </p>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Phone size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Call us</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </a>
              <a href="mailto:info@brighthorizonsaba.com" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-medium">info@brighthorizonsaba.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Visit us</p>
                  <p className="font-medium">123 Therapy Lane, Suite 200</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 style={display} className="text-xl text-gray-900 mb-6">Schedule a Free Consultation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-purple-400 transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-purple-400 transition" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-purple-400 transition" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-purple-400 transition" />
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-purple-400 transition">
                  <option value="">Child&apos;s Age Range</option>
                  <option>18 months – 3 years</option>
                  <option>3 – 6 years</option>
                  <option>6 – 12 years</option>
                  <option>12 – 18 years</option>
                </select>
                <textarea placeholder="Tell us about your child and your goals..." rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-purple-400 transition resize-none" />
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
              <span style={{ ...display, color: accent }} className="text-lg font-semibold">Bright Horizons ABA</span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">Evidence-based ABA therapy with genuine compassion. Helping children and families thrive since 2009.</p>
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
                <p>info@brighthorizonsaba.com</p>
                <p>123 Therapy Lane, Suite 200</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Bright Horizons ABA. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built by <a href="https://driftless.vercel.app" className="text-purple-400 hover:text-white transition">Driftlss</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
