"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Hand, Brain, Shirt, PenTool, ChevronDown, Phone } from "lucide-react";

const accent = "#0D9488";
const accentLight = "#F0FDFA";

const services = [
  { icon: Hand, title: "Fine Motor Skills", desc: "Strengthening hand coordination, grip patterns, and dexterity through engaging, play-based activities." },
  { icon: Brain, title: "Sensory Processing", desc: "Helping children regulate sensory input so they can focus, learn, and participate in everyday activities." },
  { icon: Shirt, title: "Self-Care Development", desc: "Building independence with dressing, feeding, grooming, and other daily living skills at every stage." },
  { icon: PenTool, title: "Handwriting Programs", desc: "Structured programs to improve letter formation, pencil grip, spacing, and writing endurance for school success." },
];

const stats = [
  { value: "10+", label: "Therapists" },
  { value: "300+", label: "Active Clients" },
  { value: "4.9★", label: "Google Rating" },
];

const team = [
  { name: "Dr. Rachel Patel", role: "Founder & Lead OTR/L", gradient: "from-teal-400 to-emerald-600" },
  { name: "Marcus Chen", role: "Pediatric OTR/L", gradient: "from-emerald-400 to-teal-600" },
  { name: "Aisha Johnson", role: "Occupational Therapy Asst.", gradient: "from-cyan-400 to-teal-600" },
];

const faqs = [
  { q: "What does a typical OT session look like?", a: "Sessions are 45–60 minutes and look like structured play. We use swings, obstacle courses, crafts, and games — each designed to target specific developmental goals." },
  { q: "How do I know if my child needs OT?", a: "If your child struggles with handwriting, avoids certain textures, has trouble with buttons or zippers, or seems clumsy compared to peers, an OT evaluation can help identify needs." },
  { q: "Do you offer evaluations?", a: "Yes. We offer comprehensive developmental evaluations that assess fine motor, sensory processing, visual motor, and self-care skills to create a personalized treatment plan." },
  { q: "How long until we see progress?", a: "Most families notice changes within 4–8 weeks. Every child is different, but we set measurable goals and track progress at every session." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function OTPreview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span style={{ fontFamily: "var(--font-display)", color: accent }} className="text-xl">Little Hands OT</span>
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">Book Evaluation</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: accentLight }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-4">Pediatric Occupational Therapy</p>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">Helping kids thrive through purposeful play</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">At Little Hands, we believe every child deserves the tools to explore, create, and grow. Our occupational therapists turn everyday challenges into confident milestones.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition">Book an Evaluation</a>
              <a href="#services" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">Learn More</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Child playing" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Our Programs</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Specialized Therapy Services</h2>
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
            <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80" alt="OT session" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">About Our Practice</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900 mb-6">Where small hands make big strides</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Founded by Dr. Rachel Patel, Little Hands OT provides individualized, evidence-based occupational therapy in a warm and playful environment. We see every child as a whole person — not a diagnosis.</p>
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
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Our Therapists</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Dedicated to your child&apos;s growth</h2>
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
          <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6">After three months at Little Hands, our daughter could button her own coat for the first time. Watching her face light up was everything.</p>
          <p className="text-gray-500">— Kevin R., parent</p>
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
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-white mb-4">Book an Evaluation</h2>
          <p className="text-white/80 mb-8">Every journey starts with understanding. Schedule a comprehensive evaluation and let&apos;s discover what your child can achieve together.</p>
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
