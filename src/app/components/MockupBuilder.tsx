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
    heroText: "Every Milestone Matters. We Help Your Child Reach Theirs.",
    subText: "You've been searching for the right ABA provider. One that sees your child, not just a diagnosis. Our board-certified team creates individualized programs rooted in compassion and backed by science.",
    cta: "Schedule a Consultation",
    navItems: ["Services", "Our Team", "Resources", "Contact"],
    services: [
      { name: "Early Intervention", desc: "Building foundations during the most critical years of development" },
      { name: "Social Skills Groups", desc: "Helping children build real friendships through structured play" },
      { name: "Parent Training", desc: "Giving you the tools to continue progress at home" },
    ],
    heroImage: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop&crop=center",
    aboutImage: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&h=350&fit=crop",
    aboutTitle: "Built on Compassion, Driven by Data",
    aboutText: "We believe every child deserves a chance to thrive. Our clinic combines the latest research in applied behavior analysis with a warm, play-based approach that children actually enjoy.",
    aboutBullets: ["Board-certified behavior analysts on every case", "Individualized treatment plans reviewed monthly", "Family-centered approach with regular parent check-ins"],
    team: [
      { name: "Dr. Sarah Mitchell", role: "Clinical Director, BCBA-D", initials: "SM", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face" },
      { name: "James Rodriguez", role: "Lead Therapist, BCBA", initials: "JR", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" },
      { name: "Emily Chen", role: "Family Coordinator", initials: "EC", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face" },
    ],
    testimonials: [
      { quote: "Within three months, our son was making eye contact and saying words we'd never heard before. This team gave us our hope back.", name: "Rachel M.", role: "Parent" },
      { quote: "They don't just work with my daughter. They work with our whole family. We finally feel like we're not doing this alone.", name: "David K.", role: "Parent" },
    ],
    stats: [
      { value: "500+", label: "Families Served" },
      { value: "94%", label: "Parent Satisfaction" },
      { value: "12", label: "Certified Therapists" },
    ],
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
    heroText: "Helping Little Hands Do Big Things.",
    subText: "When everyday tasks feel overwhelming for your child, occupational therapy bridges the gap. We help kids build the skills they need to play, learn, and grow with confidence.",
    cta: "Book an Evaluation",
    navItems: ["Programs", "About Us", "Blog", "Contact"],
    services: [
      { name: "Fine Motor Development", desc: "Building strength and coordination for writing, cutting, and daily tasks" },
      { name: "Sensory Integration", desc: "Helping children process the world around them without overwhelm" },
      { name: "Self-Care Skills", desc: "Teaching independence in dressing, feeding, and personal hygiene" },
    ],
    heroImage: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=500&h=350&fit=crop",
    aboutTitle: "Where Therapy Feels Like Play",
    aboutText: "Our sensory-rich clinic is designed to feel like an adventure, not a doctor's office. Every session is play-based, goal-driven, and tailored to your child's unique needs.",
    aboutBullets: ["Licensed occupational therapists with pediatric specialization", "Sensory gym designed for therapeutic play", "Collaborative approach with schools and families"],
    team: [
      { name: "Jessica Torres", role: "Lead OT, OTR/L", initials: "JT", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=120&h=120&fit=crop&crop=face" },
      { name: "Dr. Mark Hansen", role: "Clinic Director, PhD", initials: "MH", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" },
      { name: "Priya Patel", role: "Pediatric OT, COTA", initials: "PP", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face" },
    ],
    testimonials: [
      { quote: "My son used to melt down every morning getting dressed. After two months of OT, he's doing it himself and smiling about it.", name: "Amanda L.", role: "Parent" },
      { quote: "The therapists here don't just treat symptoms. They understood my daughter and met her exactly where she was.", name: "Chris B.", role: "Parent" },
    ],
    stats: [
      { value: "300+", label: "Children Helped" },
      { value: "97%", label: "Would Recommend" },
      { value: "8", label: "Specialized Therapists" },
    ],
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
    heroText: "Every Child Deserves to Be Heard.",
    subText: "When words don't come easily, it affects everything. Our speech-language pathologists help children find their voice and the confidence to use it, one breakthrough at a time.",
    cta: "Get Started Today",
    navItems: ["Services", "Our Approach", "FAQs", "Contact"],
    services: [
      { name: "Articulation Therapy", desc: "Helping children speak clearly so the world can understand them" },
      { name: "Language Development", desc: "Building the vocabulary and comprehension skills for school and life" },
      { name: "Feeding & Swallowing", desc: "Making mealtimes safe and stress-free for the whole family" },
    ],
    heroImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
    aboutImage: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&h=350&fit=crop",
    aboutTitle: "Communication Changes Everything",
    aboutText: "We've watched thousands of children go from frustrated to flourishing. Our evidence-based approach combines structured techniques with the warmth and patience every child deserves.",
    aboutBullets: ["Licensed SLPs with pediatric certification", "Telepractice available for flexible scheduling", "Bilingual services offered"],
    team: [
      { name: "Dr. Lauren Kim", role: "Director, CCC-SLP", initials: "LK", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&h=120&fit=crop&crop=face" },
      { name: "Maria Santos", role: "Bilingual SLP", initials: "MS", photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=120&h=120&fit=crop&crop=face" },
      { name: "Tyler Brooks", role: "Feeding Specialist, SLP", initials: "TB", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" },
    ],
    testimonials: [
      { quote: "Our daughter said 'mama' for the first time after six weeks here. I cried in the parking lot. This place changed our lives.", name: "Jennifer T.", role: "Parent" },
      { quote: "They made therapy fun for my son. He actually looks forward to his sessions now, which I never thought was possible.", name: "Marcus W.", role: "Parent" },
    ],
    stats: [
      { value: "400+", label: "Families Served" },
      { value: "96%", label: "Goal Achievement" },
      { value: "10", label: "Licensed SLPs" },
    ],
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
    heroText: "Where Every Child Can Play, Grow, and Thrive.",
    subText: "A safe, sensory-rich environment designed for children of all abilities. Our gym gives kids the space to explore, regulate, and build confidence through movement and play.",
    cta: "Explore Our Gym",
    navItems: ["Programs", "Virtual Tour", "Pricing", "Contact"],
    services: [
      { name: "Open Play Sessions", desc: "Drop-in sensory play in a safe, supervised environment for all ages" },
      { name: "Therapeutic Rentals", desc: "Private gym time for therapists and families who need focused space" },
      { name: "Sensory Parties", desc: "Birthday celebrations designed for kids who need a calmer, safer space" },
    ],
    heroImage: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600&h=400&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=350&fit=crop",
    aboutTitle: "More Than a Gym. A Community.",
    aboutText: "We built this space because every child deserves a place where they belong. Our gym is designed by therapists, loved by kids, and trusted by families across the region.",
    aboutBullets: ["Equipment designed by pediatric occupational therapists", "Calm rooms available for overstimulated children", "Inclusive programming for all abilities"],
    team: [
      { name: "Ryan Caldwell", role: "Founder & Director", initials: "RC", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face" },
      { name: "Alyssa Grant", role: "Program Coordinator", initials: "AG", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" },
      { name: "Nate Wilson", role: "Lead Play Specialist", initials: "NW", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face" },
    ],
    testimonials: [
      { quote: "My daughter is autistic and most play spaces are overwhelming for her. This gym gets it. She can just be herself here.", name: "Tanya R.", role: "Parent" },
      { quote: "We drive 45 minutes to get here because nothing else comes close. The staff, the equipment, the atmosphere — it's all perfect.", name: "Keith & Lisa D.", role: "Parents" },
    ],
    stats: [
      { value: "200+", label: "Families Weekly" },
      { value: "4.9★", label: "Google Rating" },
      { value: "6,000", label: "Sq Ft of Play" },
    ],
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
  const [heroImg, setHeroImg] = useState<string | null>(null);
  const [practiceName, setPracticeName] = useState("");
  const logoInputRef = useRef<HTMLInputElement>(null);
  const heroInputRef = useRef<HTMLInputElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [proofLoaded, setProofLoaded] = useState(false);
  const proofBrowserRef = useRef<HTMLDivElement>(null);
  const proofIframeRef = useRef<HTMLIFrameElement>(null);

  const spec = activeSpecialty !== null ? specialties[activeSpecialty] : null;
  const heroText = useTypewriter(spec?.heroText || "", 25, 800);
  const displayName = practiceName || "Your Practice Name";

  // Rotate testimonials
  useEffect(() => {
    if (!spec) return;
    setActiveTestimonial(0);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % spec.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [spec]);

  const handleLogoUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setLogo(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleHeroUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setHeroImg(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleLogoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleLogoUpload(file);
  }, [handleLogoUpload]);

  // Scale the proof iframe to fit its container
  useEffect(() => {
    const container = proofBrowserRef.current;
    const iframe = proofIframeRef.current;
    if (!container || !iframe) return;

    function scale() {
      const w = container!.offsetWidth;
      if (w === 0) return;
      const s = w / 1440;
      iframe!.style.transform = `scale(${s})`;
      container!.style.paddingBottom = `${(1080 / 1440) * 100}%`;
    }

    const observer = new ResizeObserver(scale);
    observer.observe(container);
    scale();
    return () => observer.disconnect();
  }, []);

  const selectSpecialty = (i: number) => {
    setActiveSpecialty(i);
    setAnimationKey((k) => k + 1);
    setLogo(null);
    setHeroImg(null);
    setPracticeName("");
    setActiveTestimonial(0);
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
          Pick your specialty and watch a custom website come to life. Drop in your logo, type your practice name, and see what&apos;s possible.
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
              {/* Branding inputs above browser */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-wrap items-center gap-4 mb-4"
              >
                <div className="flex items-center gap-2">
                  <span style={body} className="text-[0.75rem] text-[#8A8A82]">Practice name:</span>
                  <input
                    type="text"
                    value={practiceName}
                    onChange={(e) => setPracticeName(e.target.value)}
                    placeholder="Type your practice name..."
                    style={body}
                    className="text-[0.8rem] px-3 py-1.5 rounded-lg border border-[#EDE0CC] bg-[#FDFBF7] text-[#2A2A28] placeholder-[#C5C5BE] focus:outline-none focus:border-teal-400 w-56"
                  />
                </div>
              </motion.div>

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
                <div className="relative bg-white overflow-hidden">

                  {/* ── Navbar ── */}
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between px-8 py-3 border-b border-gray-100 bg-white"
                  >
                    {/* Logo drop zone */}
                    <div
                      onClick={() => logoInputRef.current?.click()}
                      onDrop={handleLogoDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className={`flex items-center gap-2 cursor-pointer transition-all rounded-lg ${
                        logo ? "p-0" : "border-2 border-dashed border-gray-300 hover:border-teal-400 px-3 py-1.5"
                      }`}
                    >
                      {logo ? (
                        <div className="relative group">
                          <img src={logo} alt="Your logo" width={120} height={28} className="h-7 w-auto max-w-[120px] object-contain" />
                          <button
                            onClick={(e) => { e.stopPropagation(); setLogo(null); }}
                            className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black/60 text-white text-[0.5rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                          >
                            &times;
                          </button>
                        </div>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="opacity-30"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                          <span style={body} className="text-[0.65rem] text-gray-400">Your logo</span>
                        </>
                      )}
                      <input ref={logoInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleLogoUpload(f); e.target.value = ""; }} />
                    </div>
                    <div className="hidden sm:flex items-center gap-5">
                      {spec.navItems.map((item) => (
                        <span key={item} style={body} className="text-[0.7rem] text-gray-400 hover:text-gray-700 transition-colors cursor-default">{item}</span>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <span
                        style={{ ...body, backgroundColor: spec.accent }}
                        className="text-[0.65rem] text-white font-medium px-3 py-1.5 rounded-full"
                      >
                        {spec.cta}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* ── Hero Section — Split Layout ── */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-6 px-8 md:px-12 py-10"
                  >
                    {/* Left — Text */}
                    <div className="flex-1 min-w-0">
                      <h3 style={display} className="text-[clamp(1.2rem,2.5vw,1.8rem)] leading-tight text-gray-900 mb-3">
                        {heroText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                          className="inline-block w-[2px] h-[0.9em] ml-1 align-middle"
                          style={{ backgroundColor: spec.accent }}
                        />
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        style={body}
                        className="text-gray-500 text-[0.75rem] leading-relaxed mb-5"
                      >
                        {spec.subText}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2, duration: 0.4, type: "spring", bounce: 0.4 }}
                      >
                        <span
                          style={{ ...body, backgroundColor: spec.accent }}
                          className="inline-block text-white font-semibold text-[0.75rem] px-5 py-2.5 rounded-full"
                        >
                          {spec.cta} →
                        </span>
                      </motion.div>
                    </div>
                    {/* Right — Hero Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      className="flex-1 min-w-0 relative"
                    >
                      <div
                        onClick={() => heroInputRef.current?.click()}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                      >
                        {heroImg ? (
                          <>
                            <img src={heroImg} alt="Your practice" width={600} height={400} className="w-full h-full object-cover" />
                            <button
                              onClick={(e) => { e.stopPropagation(); setHeroImg(null); }}
                              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/60 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10"
                            >
                              &times;
                            </button>
                          </>
                        ) : (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={spec.heroImage} alt="Practice hero image" width={600} height={400} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                              <span style={body} className="text-white text-[0.7rem] font-medium opacity-0 group-hover:opacity-100 transition bg-black/50 px-3 py-1.5 rounded-full">
                                Upload your photo
                              </span>
                            </div>
                          </>
                        )}
                        <input ref={heroInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleHeroUpload(f); e.target.value = ""; }} />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* ── Service Cards ── */}
                  <div className="px-8 md:px-12 pb-8">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 0.4 }}
                      style={body}
                      className="text-[0.65rem] font-medium tracking-[0.12em] uppercase text-gray-400 mb-3"
                    >
                      Our Services
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {spec.services.map((service, i) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2.6 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          <div
                            className="w-7 h-7 rounded-lg mb-2 flex items-center justify-center"
                            style={{ backgroundColor: `${spec.accent}15` }}
                          >
                            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: spec.accent }} />
                          </div>
                          <p style={body} className="text-[0.78rem] font-semibold text-gray-800 mb-1">{service.name}</p>
                          <p style={body} className="text-[0.65rem] text-gray-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ── Stats Bar ── */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.5 }}
                    className="grid grid-cols-3 gap-0 mx-8 md:mx-12 mt-2 mb-8 rounded-xl overflow-hidden border border-gray-100"
                  >
                    {spec.stats.map((stat, i) => (
                      <div key={i} className={`text-center py-4 px-3 ${i < 2 ? "border-r border-gray-100" : ""}`} style={{ backgroundColor: `${spec.accent}08` }}>
                        <p style={{ ...display, color: spec.accent }} className="text-[1.1rem] leading-none mb-0.5">{stat.value}</p>
                        <p style={body} className="text-[0.6rem] text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* ── Chat Widget (sticky) ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 4.0, duration: 0.4, type: "spring", bounce: 0.5 }}
                    className="absolute bottom-3 right-3 z-10"
                  >
                    <div
                      className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white text-sm cursor-default"
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
                transition={{ delay: 3.8, duration: 0.6 }}
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
                    transition={{ delay: 4.2 + i * 0.1, duration: 0.5 }}
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

        {/* FFSG Proof Banner — card with live preview + text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 p-8 md:p-10 rounded-2xl bg-[#FAF6F0] border border-[#EDE0CC] flex flex-col md:flex-row items-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2"
          >
            <div className="browser-frame rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8F8F8] border-b border-[#EBEBEB]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF6059]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C940]" />
                <div style={body} className="flex-1 ml-2 bg-[#EFEFEF] rounded px-3 py-1 text-[0.7rem] text-[#999]">funfactorysensorygym.com</div>
              </div>
              <div ref={proofBrowserRef} className="browser-content">
                <iframe
                  ref={proofIframeRef}
                  src="https://www.funfactorysensorygym.com"
                  loading="lazy"
                  title="Fun Factory Sensory Gym"
                  onLoad={() => setTimeout(() => setProofLoaded(true), 1500)}
                  className={`transition-opacity duration-500 ${proofLoaded ? "opacity-100" : "opacity-0"}`}
                />
                <Image src="/images/ffsg-preview.jpg" alt="Fun Factory Sensory Gym website preview" width={1440} height={1080} className={`absolute inset-0 w-full h-full object-cover object-top z-[1] transition-opacity duration-500 ${proofLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
                <a href="https://www.funfactorysensorygym.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group">
                  <span style={body} className="text-sm font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Live Site →</span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center md:text-left"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
