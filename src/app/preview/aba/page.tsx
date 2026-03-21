"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Home, Users, Sparkles, ChevronDown, Phone } from "lucide-react";

const accent = "#7C3AED";
const accentLight = "#EDE9FE";

const services = [
  { icon: Home, title: "In-Home ABA", desc: "Therapy delivered in the comfort of your home, tailored to your child's natural environment and daily routines." },
  { icon: Sparkles, title: "Center-Based Programs", desc: "Structured sessions in our purpose-built clinic with sensory rooms, social areas, and play-based learning spaces." },
  { icon: Users, title: "Parent Training", desc: "Empowering caregivers with evidence-based strategies to reinforce skills and manage behaviors at home." },
  { icon: Heart, title: "Social Skills Groups", desc: "Small-group sessions focused on peer interaction, emotional regulation, and building meaningful friendships." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Families Served" },
  { value: "98%", label: "Parent Satisfaction" },
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Clinical Director, BCBA-D", gradient: "from-purple-400 to-violet-600" },
  { name: "James Okafor", role: "Lead Therapist, BCBA", gradient: "from-violet-400 to-purple-600" },
  { name: "Emily Nguyen", role: "RBT Supervisor", gradient: "from-fuchsia-400 to-purple-600" },
];

const faqs = [
  { q: "What age range do you serve?", a: "We work with children from 18 months through 18 years of age. Early intervention is key, but it's never too late to start ABA therapy." },
  { q: "How many hours per week is typical?", a: "Most programs range from 10 to 40 hours per week depending on your child's needs. We'll design a schedule that works for your family." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans including Blue Cross, United Healthcare, Aetna, and Medicaid. We handle authorization on your behalf." },
  { q: "How do I get started?", a: "Simply schedule a free consultation. We'll discuss your child's needs, conduct an initial assessment, and build a personalized treatment plan." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ABAPreview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span style={{ fontFamily: "var(--font-display)", color: accent }} className="text-xl">Bright Horizons ABA</span>
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: accentLight }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-4">Evidence-Based ABA Therapy</p>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">Compassionate ABA therapy for every milestone</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">We combine the science of Applied Behavior Analysis with genuine compassion, helping children build skills, confidence, and independence — one breakthrough at a time.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition">Schedule Free Consultation</a>
              <a href="#services" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">Our Services</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80" alt="Child in therapy" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Comprehensive ABA Services</h2>
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
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80" alt="Therapy session" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Why Families Choose Us</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900 mb-6">A trusted partner in your child&apos;s journey</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Our team of board-certified behavior analysts and registered behavior technicians create individualized programs that celebrate every child&apos;s unique strengths while building critical life skills.</p>
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
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Meet the people behind the progress</h2>
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
          <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6">In six months, our son went from non-verbal to saying full sentences. The team at Bright Horizons didn&apos;t just change his life — they changed ours.</p>
          <p className="text-gray-500">— Maria T., parent</p>
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
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-white mb-4">Schedule Your Free Consultation</h2>
          <p className="text-white/80 mb-8">Take the first step toward your child&apos;s brighter future. Our team is ready to listen, answer your questions, and build a plan that works for your family.</p>
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
