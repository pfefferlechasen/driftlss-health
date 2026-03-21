"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, BookOpen, UtensilsCrossed, Waves, ChevronDown, Phone } from "lucide-react";

const accent = "#2563EB";
const accentLight = "#EFF6FF";

const services = [
  { icon: MessageCircle, title: "Articulation Therapy", desc: "Helping children produce clear, accurate speech sounds through targeted exercises and fun, repetitive practice." },
  { icon: BookOpen, title: "Language Development", desc: "Building vocabulary, sentence structure, and comprehension skills so children can express themselves and understand others." },
  { icon: UtensilsCrossed, title: "Feeding Therapy", desc: "Addressing oral motor challenges, food aversions, and swallowing difficulties to make mealtimes safer and more enjoyable." },
  { icon: Waves, title: "Fluency Programs", desc: "Evidence-based stuttering therapy that builds confidence, reduces tension, and helps children communicate freely." },
];

const stats = [
  { value: "8", label: "Certified SLPs" },
  { value: "200+", label: "Active Clients" },
  { value: "✓", label: "Telehealth Available" },
];

const team = [
  { name: "Dr. Lauren Whitfield", role: "Founder & CCC-SLP", gradient: "from-blue-400 to-indigo-600" },
  { name: "David Morales", role: "Senior SLP", gradient: "from-indigo-400 to-blue-600" },
  { name: "Priya Sharma", role: "Feeding Specialist, SLP", gradient: "from-sky-400 to-blue-600" },
];

const faqs = [
  { q: "At what age should my child start speech therapy?", a: "If you notice speech or language delays by age 2, it's a good time to seek an evaluation. However, children of all ages can benefit from speech therapy — early intervention simply gives the best outcomes." },
  { q: "Do you offer telehealth sessions?", a: "Yes! We offer secure, HIPAA-compliant telehealth sessions for many of our services. It's a great option for families with busy schedules or those in rural areas." },
  { q: "How long are sessions?", a: "Most sessions are 30–45 minutes, depending on your child's age and treatment plan. We keep sessions engaging and age-appropriate to maximize progress." },
  { q: "What's the difference between speech and language therapy?", a: "Speech therapy focuses on how sounds are produced (articulation, fluency). Language therapy addresses understanding and using words, sentences, and social communication. We treat both." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function SLPPreview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span style={{ fontFamily: "var(--font-display)", color: accent }} className="text-xl">Voice &amp; Verse Speech</span>
          <a href="#contact" style={{ background: accent }} className="text-white text-sm px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: accentLight }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-4">Pediatric Speech-Language Pathology</p>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">Giving every child a voice</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">At Voice &amp; Verse, we help children find the words, sounds, and confidence they need to connect with the world around them — one conversation at a time.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{ background: accent }} className="text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition">Get Started Today</a>
              <a href="#services" className="text-gray-700 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition">Our Services</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80" alt="Child smiling" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Speech &amp; Language Services</h2>
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
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" alt="Group interaction" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">About Our Practice</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900 mb-6">Communication is everything</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Voice &amp; Verse was founded on a simple belief: every child has something to say. Our certified speech-language pathologists use the latest research to unlock communication potential — in clinic, at school, or from home via telehealth.</p>
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
            <p style={{ color: accent }} className="text-sm font-semibold tracking-widest uppercase mb-3">Our Clinicians</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-gray-900">Experts who listen first</h2>
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
          <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-6">Our son used to get so frustrated trying to communicate. After working with Voice &amp; Verse, he&apos;s telling us stories at dinner. It&apos;s been incredible to watch.</p>
          <p className="text-gray-500">— Jenna &amp; Kyle M., parents</p>
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
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-white mb-4">Get Started Today</h2>
          <p className="text-white/80 mb-8">Your child&apos;s voice matters. Reach out for a free phone consultation and let&apos;s talk about how we can help them communicate with confidence.</p>
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
