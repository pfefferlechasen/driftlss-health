"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

/* ─── Specialty Data ─── */
const specialties = [
  {
    id: "aba",
    label: "ABA Therapy",
    icon: "🧩",
    desc: "Websites for ABA clinics",
    accent: "#7C3AED",
    heroText: "Compassionate ABA Therapy for Every Child",
    subText: "Evidence-based programs designed to help your child reach their fullest potential in a warm, supportive environment.",
    cta: "Schedule a Consultation",
    navItems: ["Services", "Our Team", "Resources", "Contact"],
    services: [
      { name: "Early Intervention", desc: "Programs for ages 18 months to 6 years" },
      { name: "Social Skills", desc: "Group sessions for building friendships" },
      { name: "Parent Training", desc: "Empowering families with proven strategies" },
    ],
    stat: "500+ Families Served",
    metrics: [
      { value: "3×", label: "More parent inquiries" },
      { value: "24/7", label: "AI answers questions" },
      { value: "40%", label: "Faster intake process" },
    ],
  },
  {
    id: "ot",
    label: "Occupational Therapy",
    icon: "✋",
    desc: "Websites for OT practices",
    accent: "#0D9488",
    heroText: "Helping Kids Build Skills for Life",
    subText: "Pediatric occupational therapy that empowers children to thrive in daily activities through purposeful, play-based sessions.",
    cta: "Book an Evaluation",
    navItems: ["Programs", "About Us", "Blog", "Contact"],
    services: [
      { name: "Fine Motor Skills", desc: "Handwriting, cutting, and coordination" },
      { name: "Sensory Processing", desc: "Helping kids regulate and engage" },
      { name: "Daily Living Skills", desc: "Independence in dressing, eating, and hygiene" },
    ],
    stat: "300+ Children Helped",
    metrics: [
      { value: "2.5×", label: "More booked evaluations" },
      { value: "85%", label: "Parent satisfaction" },
      { value: "60%", label: "Less admin time" },
    ],
  },
  {
    id: "slp",
    label: "Speech Therapy",
    icon: "💬",
    desc: "Websites for SLP centers",
    accent: "#2563EB",
    heroText: "Finding Their Voice, One Word at a Time",
    subText: "Compassionate speech-language therapy that helps children communicate confidently and connect with the world around them.",
    cta: "Get Started Today",
    navItems: ["Services", "Our Approach", "FAQs", "Contact"],
    services: [
      { name: "Articulation", desc: "Clear speech sound production" },
      { name: "Language Development", desc: "Expressive and receptive language" },
      { name: "Feeding Therapy", desc: "Safe swallowing and mealtime skills" },
    ],
    stat: "400+ Families Served",
    metrics: [
      { value: "4×", label: "Online referrals" },
      { value: "50%", label: "Faster scheduling" },
      { value: "90%", label: "Inquiry response rate" },
    ],
  },
  {
    id: "sensory",
    label: "Sensory Gyms",
    icon: "🎪",
    desc: "Websites for sensory gyms",
    accent: "#EA580C",
    heroText: "A Safe Space to Play, Grow, and Thrive",
    subText: "Sensory-rich environments designed to support every child's development through movement, exploration, and joy.",
    cta: "Explore Our Gym",
    navItems: ["Programs", "Virtual Tour", "Pricing", "Contact"],
    services: [
      { name: "Open Play Sessions", desc: "Drop-in sensory play for all ages" },
      { name: "Therapy Rentals", desc: "Private sessions with your therapist" },
      { name: "Birthday Parties", desc: "Sensory-friendly celebrations" },
    ],
    stat: "200+ Families Weekly",
    metrics: [
      { value: "3D", label: "Interactive gym tours" },
      { value: "5×", label: "More bookings" },
      { value: "100%", label: "Mobile optimized" },
    ],
  },
];

/* ─── Typewriter Hook ─── */
function useTypewriter(text: string, speed: number = 35, startDelay: number = 0) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setStarted(false);
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, text, speed, started]);

  return displayed;
}

/* ─── Main Component ─── */
export default function MockupBuilder() {
  const [activeSpecialty, setActiveSpecialty] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [logo, setLogo] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const spec = activeSpecialty !== null ? specialties[activeSpecialty] : null;
  const heroText = useTypewriter(spec?.heroText || "", 30, 800);

  const handleLogoUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setLogo(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleLogoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleLogoUpload(file);
  }, [handleLogoUpload]);

  const selectSpecialty = (i: number) => {
    setActiveSpecialty(i);
    setAnimationKey((k) => k + 1);
    setLogo(null);
  };

  return (
    <section id="proof" className="py-24 px-8 bg-white border-t border-[#EDE0CC] max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">Our Work</div>
        <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight max-w-[700px] mb-4">
          Watch Us Build Your Website
        </h2>
        <p style={body} className="text-[1.05rem] font-light text-[#4A4A45] leading-relaxed max-w-[560px] mb-14">
          Pick your specialty and watch a custom website come to life. Every site we build is tailored to your practice.
        </p>

        {/* Specialty Picker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {specialties.map((s, i) => (
            <button
              key={s.id}
              onClick={() => selectSpecialty(i)}
              className={`group relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                activeSpecialty === i
                  ? "border-teal-500 bg-teal-50 shadow-md"
                  : "border-[#EDE0CC] bg-[#FDFBF7] hover:border-teal-300 hover:bg-teal-50/50"
              }`}
            >
              <span className="text-2xl mb-2 block">{s.icon}</span>
              <span style={body} className="text-[0.95rem] font-semibold text-[#2A2A28] block mb-1">{s.label}</span>
              <span style={body} className="text-[0.75rem] text-[#8A8A82]">{s.desc}</span>
            </button>
          ))}
        </div>

        {/* Browser Mockup + Animation */}
        <AnimatePresence mode="wait">
          {spec && (
            <motion.div
              key={animationKey}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Browser Chrome */}
              <div className="rounded-2xl overflow-hidden border border-[#E0E0E0] shadow-xl bg-white">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-[#F8F8F8] border-b border-[#EBEBEB]">
                  <div className="w-3 h-3 rounded-full bg-[#FF6059]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C940]" />
                  <div style={body} className="flex-1 ml-3 bg-[#EFEFEF] rounded-md px-4 py-1.5 text-[0.8rem] text-[#999]">
                    your-{spec.id}-practice.com
                  </div>
                </div>

                {/* Mock Website Content */}
                <div className="relative bg-white overflow-hidden" style={{ minHeight: "480px" }}>

                  {/* ── Navbar ── */}
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between px-8 py-4 border-b border-gray-100"
                  >
                    {/* Logo drop zone */}
                    <div
                      onClick={() => logoInputRef.current?.click()}
                      onDrop={handleLogoDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className={`flex items-center gap-2 cursor-pointer transition-all rounded-lg ${
                        logo ? "p-0" : "border-2 border-dashed border-gray-300 hover:border-teal-400 px-4 py-2"
                      }`}
                    >
                      {logo ? (
                        <div className="relative group">
                          <img src={logo} alt="Your logo" className="h-8 w-auto max-w-[140px] object-contain" />
                          <button
                            onClick={(e) => { e.stopPropagation(); setLogo(null); }}
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black/60 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                          >
                            &times;
                          </button>
                        </div>
                      ) : (
                        <span style={body} className="text-[0.7rem] text-gray-400">Drop your logo here</span>
                      )}
                      <input ref={logoInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleLogoUpload(f); e.target.value = ""; }} />
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                      {spec.navItems.map((item) => (
                        <span key={item} style={body} className="text-[0.75rem] text-gray-500">{item}</span>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <span
                        style={{ ...body, backgroundColor: spec.accent }}
                        className="text-[0.7rem] text-white font-medium px-4 py-2 rounded-full"
                      >
                        {spec.cta}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* ── Hero Section ── */}
                  <div className="px-8 md:px-16 py-12 md:py-16">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="max-w-2xl"
                    >
                      {/* Typewriter headline */}
                      <h3 style={display} className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-gray-900 mb-4 min-h-[3em]">
                        {heroText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                          className="inline-block w-[3px] h-[1em] ml-1 align-middle"
                          style={{ backgroundColor: spec.accent }}
                        />
                      </h3>

                      {/* Subtext */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        style={body}
                        className="text-gray-500 text-[0.9rem] leading-relaxed mb-8 max-w-lg"
                      >
                        {spec.subText}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.0, duration: 0.4, type: "spring", bounce: 0.4 }}
                      >
                        <span
                          style={{ ...body, backgroundColor: spec.accent }}
                          className="inline-block text-white font-semibold text-[0.85rem] px-6 py-3 rounded-full"
                        >
                          {spec.cta} →
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* ── Service Cards ── */}
                  <div className="px-8 md:px-16 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {spec.services.map((service, i) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2.5 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="p-5 rounded-xl border border-gray-100 bg-gray-50/50"
                        >
                          <div
                            className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
                            style={{ backgroundColor: `${spec.accent}20` }}
                          >
                            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: spec.accent }} />
                          </div>
                          <p style={body} className="text-[0.85rem] font-semibold text-gray-800 mb-1">{service.name}</p>
                          <p style={body} className="text-[0.72rem] text-gray-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ── Stats Bar ── */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                    className="mx-8 md:mx-16 mb-6 py-4 px-6 rounded-xl flex items-center justify-center gap-2"
                    style={{ backgroundColor: `${spec.accent}10` }}
                  >
                    <span style={{ ...body, color: spec.accent }} className="text-[0.85rem] font-semibold">{spec.stat}</span>
                  </motion.div>

                  {/* ── Chat Widget ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 4.0, duration: 0.4, type: "spring", bounce: 0.5 }}
                    className="absolute bottom-4 right-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white text-lg"
                      style={{ backgroundColor: spec.accent }}
                    >
                      💬
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA below mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5, duration: 0.6 }}
                className="text-center mt-10"
              >
                <p style={display} className="text-[1.5rem] text-[#2A2A28] mb-4">This could be yours. Let&apos;s talk.</p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a
                    href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={body}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-[0.9rem]"
                  >
                    Book a Free Call
                  </a>
                  <button
                    onClick={() => setAnimationKey((k) => k + 1)}
                    style={body}
                    className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[#8A8A82] hover:text-teal-600 transition-colors px-5 py-3"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8a7 7 0 0112.95-3.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 8a7 7 0 01-12.95 3.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 1v3.5h-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 15v-3.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Replay
                  </button>
                </div>
              </motion.div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-10 max-md:grid-cols-1">
                {spec.metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.0 + i * 0.1, duration: 0.5 }}
                    className="text-center p-6 bg-[#FAF6F0] rounded-xl border border-[#EDE0CC]"
                  >
                    <div style={display} className="text-[2rem] text-teal-600 leading-none mb-1">{m.value}</div>
                    <div style={body} className="text-[0.8rem] font-light text-[#4A4A45]">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {activeSpecialty === null && (
          <div className="text-center py-16 rounded-2xl border-2 border-dashed border-[#EDE0CC] bg-[#FDFBF7]">
            <p style={body} className="text-[1rem] text-[#8A8A82]">Pick a specialty above to see the magic ↑</p>
          </div>
        )}

        {/* FFSG Proof Banner */}
        <div className="mt-20 p-8 md:p-10 rounded-2xl bg-[#FAF6F0] border border-[#EDE0CC] flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden border border-[#E0E0E0] shadow-md">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8F8F8] border-b border-[#EBEBEB]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6059]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C940]" />
                <div style={body} className="flex-1 ml-2 bg-[#EFEFEF] rounded px-3 py-1 text-[0.7rem] text-[#999]">funfactorysensorygym.com</div>
              </div>
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/case-studies/ffsg-screenshot.png"
                  alt="Fun Factory Sensory Gym website"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div style={body} className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-2">Live Client Site</div>
            <h3 style={display} className="text-[1.5rem] text-[#2A2A28] mb-2">Fun Factory Sensory Gym</h3>
            <p style={body} className="text-[0.9rem] text-[#8A8A82] mb-5">A real site we built and maintain. AI chatbot, CRM integration, before/after sliders, and NBC feature showcase.</p>
            <a
              href="https://funfactorysensorygym.com"
              target="_blank"
              rel="noopener noreferrer"
              style={body}
              className="inline-flex items-center gap-2 text-teal-600 font-semibold text-[0.9rem] hover:text-teal-700 transition-colors"
            >
              Visit live site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
