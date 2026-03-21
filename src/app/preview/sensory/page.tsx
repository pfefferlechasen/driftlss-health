"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PlayCircle, Building, Cake, Sun, ChevronDown, Phone } from "lucide-react";

const accent = "#EA580C";
const accentLight = "#FFF7ED";

const services = [
  { icon: PlayCircle, title: "Open Play Sessions", desc: "Drop-in sensory play for children of all abilities — swings, trampolines, climbing walls, and tactile stations in a safe environment." },
  { icon: Building, title: "Therapy Gym Rentals", desc: "Private hourly rentals for therapists, homeschool groups, and families who want dedicated time in our fully equipped sensory space." },
  { icon: Cake, title: "Birthday Parties", desc: "Unforgettable sensory-friendly birthday parties with exclusive gym access, setup, cleanup, and a dedicated party host." },
  { icon: Sun, title: "Sensory Camps", desc: "Seasonal day camps combining sensory play, social skill building, arts and crafts, and outdoor activities led by trained staff." },
];

const stats = [
  { value: "5,000", label: "Sq Ft Facility" },
  { value: "100+", label: "Monthly Visitors" },
  { value: "3D", label: "Virtual Tour" },
];

const team = [
  { name: "Megan Larson", role: "Founder & Director", gradient: "from-orange-400 to-red-500" },
  { name: "Tyler Brooks", role: "Program Coordinator", gradient: "from-amber-400 to-orange-500" },
  { name: "Sofia Reyes", role: "Play Specialist", gradient: "from-yellow-400 to-orange-500" },
];

const faqs = [
  { q: "What ages is the gym designed for?", a: "Our gym is designed for children ages 1–12, though we welcome families with children outside that range. We have zones for toddlers and older kids to ensure everyone plays safely." },
  { q: "Do I need to stay during open play?", a: "Yes, a parent or caregiver must remain in the facility at all times during open play sessions. We encourage you to play alongside your child!" },
  { q: "Is the gym accessible for children with disabilities?", a: "Absolutely. Our entire facility is ADA-compliant and designed with sensory sensitivities in mind — adjustable lighting, quiet zones, and equipment for all ability levels." },
  { q: "How do I book a birthday party?", a: "You can reserve a party slot by calling us or filling out the contact form. Parties include 2 hours of exclusive gym access, a dedicated party host, and setup/cleanup." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function SensoryPreview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [customImages, setCustomImages] = useState<{ logo?: string; hero?: string; about?: string }>({});

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "updateImages") {
        setCustomImages({ logo: e.data.logo || undefined, hero: e.data.hero || undefined, about: e.data.about || undefined });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {customImages.logo ? <img src={customImages.logo} alt="Logo" className="h-8 object-contain" /> : <span style={{ fontFamily: "var(--font-display)", color: accent }} className="text-xl">Wonder Works Sensory</span>}
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">Explore Our Gym</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: accentLight }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-4">Sensory Play &amp; Exploration</p>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">A sensory experience designed for every child</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Wonder Works is a 5,000 sq ft sensory gym where kids climb, swing, bounce, and discover — building confidence and connections through purposeful, joyful play.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition">Explore Our Gym</a>
              <a href="#services" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">See Programs</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={customImages.hero || "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=800&q=80"} alt="Sensory play" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Programs &amp; Experiences</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div style={{ background: accentLight }} className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <s.icon size={22} style={{ color: accent }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section className="py-24 px-6" style={{ background: "#FAF6F0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={customImages.about || "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80"} alt="Gym space" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">About Our Space</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900 mb-6">Built for play, designed for growth</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Wonder Works was created by parents who saw the need for an inclusive, sensory-friendly space where all children can explore at their own pace. Every corner of our gym is designed to inspire curiosity and calm.</p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p style={{ color: accent, fontFamily: "var(--font-display)" }} className="text-3xl mb-1">{s.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Our Team</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">The people behind the play</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }} className="text-center">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${t.gradient} mx-auto mb-4`} />
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6" style={{ background: accentLight }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <p style={{ color: accent }} className="text-5xl mb-6">&ldquo;</p>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6">My sensory-sensitive son walked into Wonder Works nervous and left asking when he could come back. This place is magic for kids like him.</p>
          <p className="text-gray-500">— Amanda S., parent</p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-gray-100 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                  <span className="font-medium text-gray-900">{f.q}</span>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6" style={{ background: accent }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-white mb-4">Explore Our Gym</h2>
          <p className="text-white/80 mb-8">Come see what all the excitement is about. Schedule a tour, drop in for open play, or book your child&apos;s next birthday party at Wonder Works.</p>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition" style={{ color: accent }}>
            <Phone size={18} /> Call Us Today
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">Built by <a href="https://driftless.vercel.app" className="underline hover:text-white transition">Driftless</a></p>
      </footer>
    </main>
  );
}
