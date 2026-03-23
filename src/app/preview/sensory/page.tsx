"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  PlayCircle, Building, Cake, Sun, ChevronDown, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, Star, Shield, Clock, BookOpen, Award,
  MessageCircle, Calendar, Users, Sparkles, Heart, Puzzle,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  THEME                                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */

const accent = "#EA580C";
const accentDark = "#C2410C";
const accentLight = "#FFF7ED";
const warm = "#FFFBF5";
const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  DATA                                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

const navLinks = ["Programs", "About", "Process", "Team", "FAQ", "Contact"];

const heroFeatures = [
  "All Ages & Abilities Welcome",
  "Sensory-Friendly Design",
  "Trained & Certified Staff",
];

const services = [
  { icon: PlayCircle, title: "Open Play Sessions", desc: "Drop-in sensory play for children of all abilities — swings, trampolines, climbing walls, and tactile stations in a safe, inclusive environment.", features: ["Walk-in or reserve online", "Toddler & big kid zones", "Sensory-friendly lighting"] },
  { icon: Building, title: "Therapy Gym Rentals", desc: "Private hourly rentals for OTs, PTs, homeschool groups, and families who want dedicated one-on-one time in our fully equipped sensory space.", features: ["Flexible hourly booking", "Full equipment access", "Private & distraction-free"] },
  { icon: Cake, title: "Birthday Parties", desc: "Unforgettable sensory-friendly birthday parties with exclusive gym access, themed setups, cleanup, and a dedicated party host for stress-free celebrations.", features: ["2-hour exclusive access", "Dedicated party host", "Custom sensory activities"] },
  { icon: Sun, title: "Sensory Camps", desc: "Seasonal day camps combining sensory play, social skill building, arts and crafts, and outdoor exploration led by trained staff during school breaks.", features: ["Summer & holiday sessions", "Small group sizes", "Themed weekly activities"] },
  { icon: Users, title: "Parent-Child Classes", desc: "Guided classes for parents and little ones to explore sensory play together. Learn techniques to support your child's sensory development at home.", features: ["Ages 6 months to 4 years", "Expert-led curriculum", "Take-home strategies"] },
  { icon: Sparkles, title: "After-School Programs", desc: "A safe, stimulating space for kids to decompress and play after the school day. Structured activities blend movement, creativity, and social interaction.", features: ["Weekday afternoons", "Homework-friendly quiet zone", "Pick-up flexibility"] },
];

const processSteps = [
  { number: "01", title: "Explore Our Space", desc: "Schedule a free tour or drop in during open play hours. See our equipment, meet our staff, and discover how our gym is designed for every child.", icon: Star },
  { number: "02", title: "Choose Your Program", desc: "From open play passes to birthday parties, camps, and memberships — we'll help you find the perfect fit for your family's schedule and goals.", icon: Puzzle },
  { number: "03", title: "Meet Our Team", desc: "Our trained staff gets to know your child's needs, sensory preferences, and comfort level so every visit feels welcoming and safe from day one.", icon: Heart },
  { number: "04", title: "Play & Grow", desc: "Watch your child build confidence, coordination, and friendships through purposeful sensory play. We're here to support every milestone along the way.", icon: Sparkles },
];

const stats = [
  { value: "8,000", label: "Sq Ft Facility" },
  { value: "500+", label: "Families Served" },
  { value: "4.9", label: "Google Rating" },
  { value: "15+", label: "Activity Stations" },
];

const outcomes = [
  { value: "92%", label: "of parents report improved sensory regulation after regular visits" },
  { value: "3×", label: "more social engagement observed in children attending weekly sessions" },
  { value: "97%", label: "of families recommend Sensory Springs to other parents" },
];

const team = [
  { name: "Rachel Hoffman", role: "Gym Director", bio: "Former pediatric OT with 12 years of experience. Founded Sensory Springs to give every child a place to thrive through play.", gradient: "from-orange-400 to-red-500" },
  { name: "Marcus Chen", role: "Program Coordinator", bio: "Designs our camps, classes, and seasonal programs. Passionate about creating inclusive experiences for children of all abilities.", gradient: "from-amber-400 to-orange-500" },
  { name: "Dr. Leah Simmons", role: "OT Consultant", bio: "Board-certified occupational therapist who ensures our equipment and programming align with evidence-based sensory integration practices.", gradient: "from-yellow-400 to-orange-500" },
  { name: "Jordan Briggs", role: "Activities Lead", bio: "Leads open play and after-school sessions with boundless energy. Trained in adaptive recreation and trauma-informed care.", gradient: "from-orange-500 to-rose-500" },
];

const testimonials = [
  { quote: "My sensory-sensitive son walked into Sensory Springs nervous and left asking when he could come back. This place is genuinely magic for kids like him.", name: "Amanda S.", detail: "Parent of a 5-year-old" },
  { quote: "We've tried every gym and play space in the area. Nothing compares. The staff actually understands sensory needs and the space is designed with intention.", name: "Kevin & Laura M.", detail: "Parents of a 7-year-old" },
  { quote: "The parent-child classes taught me so much about how to support my daughter at home. I finally feel confident helping her navigate sensory challenges.", name: "Priya R.", detail: "Parent of a 3-year-old" },
];

const programTypes = [
  "Open Play Passes", "Monthly Memberships", "Party Packages", "Camp Sessions", "Class Bundles", "Private Rentals",
];

const faqs = [
  { q: "What ages is the gym designed for?", a: "Sensory Springs is designed for children ages 6 months through 12 years. We have dedicated zones for toddlers (6 months – 3 years) and bigger kids (4 – 12 years) to ensure everyone plays safely. Parents and caregivers are always welcome to join in the fun." },
  { q: "What should my child wear?", a: "We recommend comfortable, stretchy clothing that allows freedom of movement — think leggings, athletic shorts, and t-shirts. Socks are required on the gym floor (grip socks are available for purchase). Avoid clothing with zippers, buttons, or anything that could snag on equipment." },
  { q: "Do you offer memberships?", a: "Yes! We offer monthly and annual memberships that include unlimited open play sessions, discounts on camps and parties, priority booking for events, and exclusive member-only hours. Memberships can be paused or cancelled anytime with 30 days notice." },
  { q: "How do birthday parties work?", a: "Our party packages include 2 hours of exclusive gym access, a dedicated party host, setup and cleanup, paper goods, and a special birthday throne experience. You bring the cake and guests — we handle everything else. Parties can be booked for up to 20 children." },
  { q: "Is the gym safe for children with disabilities?", a: "Absolutely. Our entire facility is ADA-compliant and designed with sensory sensitivities in mind — adjustable lighting, quiet retreat zones, noise-reducing materials, and equipment suitable for all ability levels. Our staff is trained in adaptive recreation and inclusive play practices." },
  { q: "Do parents need to stay during open play?", a: "Yes, a parent or caregiver must remain in the facility at all times during open play sessions. We encourage you to play alongside your child! We have a comfortable parent lounge with Wi-Fi and coffee for those who prefer to observe." },
  { q: "Can therapists rent the space for private sessions?", a: "Yes, we offer private gym rentals for occupational therapists, physical therapists, speech therapists, and other professionals. Rentals include full access to all equipment and can be booked in 1-hour or 2-hour blocks. We also offer recurring weekly slots." },
  { q: "What safety measures do you have in place?", a: "Safety is our top priority. All equipment meets or exceeds ASTM safety standards. Our floors are padded with 3-inch impact-absorbing foam. Staff holds current CPR/First Aid certifications. We maintain strict cleaning protocols and limit capacity to prevent overcrowding." },
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

export default function SensoryPreview() {
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
            <span style={{ ...display, color: accent }} className="text-xl font-semibold">Sensory Springs</span>
          )}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-600 hover:text-gray-900 transition">{link}</a>
            ))}
          </div>
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">
            Book a Visit
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #FFF7ED 50%, #FEF3C7 100%)` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <div style={{ background: accent }} className="w-2 h-2 rounded-full" />
              <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase">Sensory Play & Exploration</p>
            </div>
            <h1 style={display} className="text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 leading-[1.1] mb-6">
              Where every child finds their <span style={{ color: accent }}>spark</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Sensory Springs is an 8,000 sq ft sensory gym where kids climb, swing, bounce, and discover — building confidence, coordination, and connections through purposeful, joyful play.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
                Schedule a Tour <ArrowRight size={16} />
              </a>
              <a href="#programs" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">
                See Programs
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
                <img src={customImages.hero} alt="Children playing in sensory gym" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-2xl w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #FFF7ED 50%, #FFEDD5 100%)` }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div style={{ background: accent }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Building size={28} className="text-white" />
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

      {/* ═══ PROGRAMS & MEMBERSHIPS BAR ═══ */}
      <section className="py-6 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Programs & Memberships</span>
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            {programTypes.map((name, i) => (
              <span key={i} className="text-sm text-gray-400 font-medium">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Programs & Experiences</h2>
            <p className="text-gray-500">Every program is designed with sensory needs in mind — because every child deserves a space where they can play, grow, and belong.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">Getting started is easy</h2>
            <p className="text-gray-500">From your first visit to your child&apos;s hundredth — we make every step simple and welcoming.</p>
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
                <img src={customImages.about} alt="Sensory gym space" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
              ) : (
                <div className="rounded-2xl shadow-lg w-full aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${accentLight} 0%, #FFF7ED 50%, #FFEDD5 100%)` }}>
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
                <p className="text-xs text-gray-500 leading-relaxed">&ldquo;The best sensory gym our family has ever visited.&rdquo;</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Why Families Choose Us</p>
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-6">Built for play, designed for growth</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sensory Springs was founded by a pediatric occupational therapist who saw the need for an inclusive, sensory-friendly space where all children can explore at their own pace — not just kids in therapy, but every child who benefits from movement and sensory input.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every corner of our 8,000 sq ft facility is designed with intention: adjustable lighting, impact-absorbing floors, quiet retreat zones, and equipment that meets children where they are. This is a space where kids feel safe enough to take risks and confident enough to try again.
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
            <h2 style={display} className="text-3xl md:text-4xl text-white">Real Results Through Play</h2>
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
            <h2 style={display} className="text-3xl md:text-4xl text-gray-900 mb-4">The people behind the play</h2>
            <p className="text-gray-500">Every member of our team is trained in sensory integration, inclusive play, and creating joyful experiences for children of all abilities.</p>
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
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 rounded-xl overflow-hidden hover:border-orange-200 transition-colors">
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
            <h2 style={display} className="text-3xl md:text-4xl text-white mb-4">Ready to explore our gym?</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Schedule a free tour, drop in for open play, or ask us anything. We&apos;d love to show you why hundreds of families call Sensory Springs their favorite place to play.
            </p>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Phone size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Call us</p>
                  <p className="font-medium">(555) 987-6543</p>
                </div>
              </a>
              <a href="mailto:hello@sensorysprings.com" className="flex items-center gap-3 text-white/90 hover:text-white transition">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Email us</p>
                  <p className="font-medium">hello@sensorysprings.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm text-white/60">Visit us</p>
                  <p className="font-medium">456 Play Street, Suite 100</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 style={display} className="text-xl text-gray-900 mb-6">Schedule a Free Tour</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition" />
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-orange-400 transition">
                  <option value="">Child&apos;s Age Range</option>
                  <option>6 months – 2 years</option>
                  <option>2 – 4 years</option>
                  <option>4 – 8 years</option>
                  <option>8 – 12 years</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-orange-400 transition">
                  <option value="">Interested In</option>
                  <option>Open Play</option>
                  <option>Memberships</option>
                  <option>Birthday Parties</option>
                  <option>Sensory Camps</option>
                  <option>Parent-Child Classes</option>
                  <option>Therapy Gym Rental</option>
                  <option>After-School Program</option>
                </select>
                <textarea placeholder="Anything else we should know about your child or visit..." rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition resize-none" />
                <button style={{ background: accent }} className="w-full text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                  <Calendar size={16} /> Book a Tour
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
              <span style={{ ...display, color: accent }} className="text-lg font-semibold">Sensory Springs</span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">A sensory-friendly play space where every child can climb, swing, and grow. Designed with intention, built with love.</p>
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-3">Quick Links</p>
              <div className="space-y-2">
                {["Programs", "Our Process", "About Us", "FAQ", "Contact"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 text-sm hover:text-white transition">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-3">Contact</p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>(555) 987-6543</p>
                <p>hello@sensorysprings.com</p>
                <p>456 Play Street, Suite 100</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Sensory Springs. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built by <a href="https://driftless.vercel.app" className="text-orange-400 hover:text-white transition">Driftlss</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
