"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MessageCircle, BookOpen, UtensilsCrossed, Waves, ChevronDown, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, Star, Shield, Clock, Award,
  Calendar, Brain, Target, Users, Mic, Baby,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  THEME                                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

const accent = "#2563EB";
const accentDark = "#1D4ED8";
const accentLight = "#DBEAFE";
const warm = "#FAF6F0";
const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  DATA                                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

const navLinks = ["Services", "About", "Process", "Team", "FAQ", "Contact"];

const heroFeatures = [
  "ASHA-Certified Clinicians",
  "Individualized Therapy Plans",
  "Insurance Accepted",
];

const services = [
  { icon: Mic, title: "Articulation Therapy", desc: "Helping children produce clear, accurate speech sounds through targeted exercises, auditory discrimination training, and fun, repetitive practice that builds lasting habits.", features: ["Sound-specific drills", "Oral motor exercises", "Generalization strategies"] },
  { icon: BookOpen, title: "Language Development", desc: "Building vocabulary, sentence structure, and comprehension skills so children can express their thoughts clearly and understand the world around them.", features: ["Receptive & expressive language", "Vocabulary building", "Narrative skills"] },
  { icon: UtensilsCrossed, title: "Feeding & Swallowing", desc: "Addressing oral motor challenges, food aversions, and swallowing difficulties to make mealtimes safer, more enjoyable, and less stressful for the whole family.", features: ["Oral motor strengthening", "Texture progression", "Mealtime strategies"] },
  { icon: Waves, title: "Fluency & Stuttering", desc: "Evidence-based stuttering therapy that builds confidence, reduces tension, and teaches smooth speech techniques so children can communicate freely and without fear.", features: ["Fluency shaping", "Stuttering modification", "Confidence building"] },
  { icon: Users, title: "Social Communication", desc: "Teaching pragmatic language skills — turn-taking, reading social cues, understanding tone, and building friendships through structured group and individual sessions.", features: ["Pragmatic language", "Perspective-taking", "Peer interaction practice"] },
  { icon: Baby, title: "Early Language Intervention", desc: "For toddlers 12 months to 3 years showing signs of delayed speech. Early intervention during critical language windows gives children the strongest start possible.", features: ["Ages 12 months to 3 years", "Parent coaching model", "Play-based therapy"] },
];

const processSteps = [
  { number: "01", title: "Free Consultation", desc: "We listen. Tell us about your child, your concerns, and your communication goals. No pressure, no jargon — just a genuine conversation about how speech therapy can help.", icon: Phone },
  { number: "02", title: "Speech-Language Evaluation", desc: "A certified speech-language pathologist conducts a comprehensive evaluation — assessing articulation, language, fluency, voice, and oral motor function to build a complete picture.", icon: Target },
  { number: "03", title: "Custom Treatment Plan", desc: "We design a therapy plan built around your child's unique needs, strengths, and interests — not a one-size-fits-all approach. You'll review and approve every goal.", icon: Brain },
  { number: "04", title: "Therapy & Progress", desc: "Your child begins working with their dedicated SLP. You'll receive regular updates, parent coaching strategies, and we adjust the plan as your child reaches each milestone.", icon: MessageCircle },
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "800+", label: "Families Served" },
  { value: "97%", label: "Parent Satisfaction" },
  { value: "20+", label: "Certified SLPs" },
];

const outcomes = [
  { value: "91%", label: "of clients show measurable improvement within 6 months of therapy" },
  { value: "2.8×", label: "average increase in functional communication milestones reached" },
  { value: "96%", label: "of families recommend ClearVoice to other parents" },
];

const team = [
  { name: "Dr. Lauren Whitfield", role: "Founder & Clinical Director, CCC-SLP", bio: "12+ years specializing in pediatric language disorders and early intervention. ASHA-certified with a doctorate in Communication Sciences.", gradient: "from-blue-400 to-indigo-600" },
  { name: "David Morales", role: "Senior Speech-Language Pathologist, CCC-SLP", bio: "Passionate about fluency disorders and helping children who stutter find confidence and freedom in their communication.", gradient: "from-indigo-400 to-blue-600" },
  { name: "Priya Sharma", role: "Feeding & Swallowing Specialist, CCC-SLP", bio: "Certified in pediatric feeding therapy with advanced training in oral motor assessment and sensory-based food aversions.", gradient: "from-sky-400 to-blue-600" },
  { name: "Emily Tran", role: "Clinical Fellow, CF-SLP", bio: "Completing her clinical fellowship with a focus on bilingual language development and augmentative communication systems.", gradient: "from-blue-500 to-cyan-600" },
];

const testimonials = [
  { quote: "Our son used to get so frustrated trying to communicate. After six months with ClearVoice, he's telling us stories at dinner. It's been incredible to watch him blossom.", name: "Jenna & Kyle M.", detail: "Parents of a 4-year-old" },
  { quote: "We tried two other speech clinics before finding ClearVoice. The difference is remarkable — they genuinely understand our daughter's needs and celebrate every milestone with us.", name: "Amanda R.", detail: "Parent of a 5-year-old" },
  { quote: "The feeding therapy changed our lives. Mealtimes used to be a battle. Now our son is trying new foods every week. The team's patience and expertise made all the difference.", name: "Carlos & Maria D.", detail: "Parents of a 3-year-old" },
];

const insuranceLogos = [
  "Blue Cross Blue Shield", "United Healthcare", "Aetna", "Cigna", "Medicaid", "Tricare",
];

const faqs = [
  { q: "What's the difference between speech and language?", a: "Speech refers to the physical production of sounds — articulation, fluency, and voice. Language refers to the ability to understand and use words, sentences, and social communication. A child can have difficulties with one or both. Our evaluations assess all areas to create a complete picture." },
  { q: "At what age should my child start speech therapy?", a: "If you notice your child isn't babbling by 12 months, saying words by 18 months, or combining words by age 2, it's worth seeking an evaluation. However, children of all ages benefit from speech therapy. Early intervention during the first three years gives the strongest outcomes due to critical brain development windows." },
  { q: "Do you offer telehealth sessions?", a: "Yes! We offer secure, HIPAA-compliant telehealth sessions for many of our services including articulation therapy, language development, fluency, and social communication. It's a great option for families with busy schedules, those in rural areas, or children who do better in their home environment." },
  { q: "How long are therapy sessions?", a: "Most sessions are 30 to 45 minutes, depending on your child's age, attention span, and treatment goals. Younger children may start with shorter sessions. We keep every session engaging, play-based, and age-appropriate to maximize progress and keep your child motivated." },
  { q: "What qualifications does your staff have?", a: "Our clinical team includes ASHA-certified Speech-Language Pathologists (CCC-SLP), Clinical Fellows (CF-SLP) completing supervised experience, and Speech-Language Pathology Assistants (SLPA) who work under direct SLP supervision. All clinicians complete ongoing professional development and specialized training." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, United Healthcare, Aetna, Cigna, Medicaid, and Tricare. Our dedicated benefits team handles pre-authorization and paperwork — you focus on your child, and we handle the rest." },
  { q: "Will I be involved in my child's therapy?", a: "Absolutely. Parent involvement is one of the strongest predictors of success in speech therapy. You'll receive coaching strategies to practice at home, attend regular progress reviews, and have direct access to your child's SLP. We see parents as essential partners, not spectators." },
  { q: "How is progress measured?", a: "We use systematic data collection during every session, tracking specific speech and language targets. Your child's SLP analyzes this data to monitor progress, adjust goals, and keep therapy moving forward. You'll receive detailed progress reports and have regular check-ins to review your child's growth." },
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

export default function SLPPreview() {
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
            <span style={{ ...display, color: accent }} className="text-xl font-semibold">ClearVoice Speech Therapy</span>
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
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #EFF6FF 50%, #F0F9FF 100%)` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div style={{ background: accent }} className="w-2 h-2 rounded-full" />
              <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase">Pediatric Speech-Language Pathology</p>
            </div>
            <h1 style={display} className="text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 leading-[1.1] mb-6">
              Giving every child a <span style={{ color: accent }}>voice</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              At ClearVoice, we help children find the words, sounds, and confidence they need to connect with the world around them — one conversation at a time.
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
                <img src={customImages.hero} alt="Child speaking with therapist" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #EFF6FF 50%, #DBEAFE 100%)` }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div style={{ background: accent }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Mic size={28} className="text-white" />
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
                  <p className="text-xs text-gray-500">from 300+ families</p>
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Comprehensive Speech &amp; Language Services</h2>
            <p className="text-gray-500">Every therapy plan is individualized — because every child communicates differently. Here&apos;s how we help families like yours.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-7 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
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
            <p className="text-gray-500">We make the process as easy as possible so you can focus on what matters most — your child&apos;s communication.</p>
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
                <img src={customImages.about} alt="Speech therapy session" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-lg w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #EFF6FF 50%, #DBEAFE 100%)` }}>
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
                <p className="text-xs text-gray-500 leading-relaxed">&ldquo;Our daughter finally found her voice. We&apos;re so grateful.&rdquo;</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Why Families Choose Us</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-6">Communication is everything</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ClearVoice was founded on a simple belief: every child has something to say. Our team of ASHA-certified speech-language pathologists uses the latest research to unlock communication potential — in clinic, at school, or from home via telehealth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe therapy should feel like play, not work. That&apos;s why our sessions are built around your child&apos;s interests and natural curiosity — creating breakthroughs that carry over into everyday conversations and classroom learning.
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Meet the clinicians behind the breakthroughs</h2>
            <p className="text-gray-500">Every member of our team shares a commitment to evidence-based practice, ongoing education, and genuine compassion for every child we serve.</p>
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
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
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
            <h2 style={display} className="text-3xl md:text-4xl text-white mb-4">Ready to help your child find their voice?</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Schedule a free consultation with our team. We&apos;ll listen to your concerns, answer your questions, and help you understand how speech therapy can make a difference for your child and your family.
            </p>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Phone size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Call us</p>
                  <p className="font-medium">(555) 987-6543</p>
                </div>
              </a>
              <a href="mailto:hello@clearvoicespeech.com" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-medium">hello@clearvoicespeech.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Visit us</p>
                  <p className="font-medium">456 Communication Way, Suite 110</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 style={display} className="text-xl text-gray-900 mb-6">Schedule a Free Consultation</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition" />
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-blue-400 transition">
                  <option value="">Child&apos;s Age Range</option>
                  <option>12 months – 2 years</option>
                  <option>2 – 4 years</option>
                  <option>4 – 7 years</option>
                  <option>7 – 12 years</option>
                  <option>12+ years</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-blue-400 transition">
                  <option value="">Primary Concern</option>
                  <option>Speech sounds / Articulation</option>
                  <option>Late talker / Language delay</option>
                  <option>Stuttering / Fluency</option>
                  <option>Feeding / Swallowing</option>
                  <option>Social communication</option>
                  <option>Not sure — need evaluation</option>
                </select>
                <textarea placeholder="Tell us about your child and your goals..." rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition resize-none" />
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
              <span style={{ ...display, color: accent }} className="text-lg font-semibold">ClearVoice Speech Therapy</span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">ASHA-certified speech-language pathologists helping children communicate with clarity and confidence since 2014.</p>
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
                <p>(555) 987-6543</p>
                <p>hello@clearvoicespeech.com</p>
                <p>456 Communication Way, Suite 110</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 ClearVoice Speech Therapy. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built by <a href="https://driftless.vercel.app" className="text-blue-400 hover:text-white transition">Driftlss</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
