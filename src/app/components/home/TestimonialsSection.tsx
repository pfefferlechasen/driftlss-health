"use client";

import { motion } from "motion/react";
import { display, body, testimonials } from "./data";
import { Reveal, fadeUp, stagger } from "./animations";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-8 bg-[#1A1A18] max-md:py-20 max-md:px-6">
      <div className="max-w-[1300px] mx-auto">
        <Reveal className="text-center">
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-400 mb-6">What Clients Say</div>
        </Reveal>
        <Reveal className="text-center">
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight mb-16 text-[#FAF6F0]">
            Results that speak for themselves.
          </h2>
        </Reveal>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-2 gap-8 max-w-[900px] mx-auto max-md:grid-cols-1">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 rounded-2xl p-10 border border-white/10 transition-all duration-400 hover:shadow-[0_12px_40px_rgba(13,148,136,0.1)] hover:-translate-y-1 max-md:p-8"
            >
              <div style={display} className="text-[3rem] text-teal-400 leading-none opacity-40 mb-4 text-center">&ldquo;</div>
              <blockquote style={body} className="text-[1rem] font-light italic text-white/60 leading-relaxed mb-8 text-center">
                {t.quote}
              </blockquote>
              <div className="border-t border-white/10 pt-6 text-center">
                <div style={body} className="text-[0.95rem] font-medium text-[#FAF6F0]">{t.name}</div>
                <div style={body} className="text-[0.8rem] font-light text-white/40 mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
