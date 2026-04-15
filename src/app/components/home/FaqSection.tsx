"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { display, body, faqs } from "./data";
import { Reveal } from "./animations";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-8 bg-[#FAF6F0] max-md:py-20 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
        <Reveal className="text-center">
          <div style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">Common Questions</div>
        </Reveal>
        <Reveal className="text-center">
          <h2 style={display} className="text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.15] tracking-tight mb-16">
            Everything you need to know.
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div className="border-t border-[#EDE0CC]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                >
                  <span style={display} className="text-[1.2rem] font-normal leading-tight pr-8 transition-colors duration-300 group-hover:text-teal-600">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl text-[#8A8A82] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p style={body} className="text-[0.95rem] font-light text-[#4A4A45] leading-relaxed pb-7 max-w-[700px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#EDE0CC]" />
        </div>
      </div>
    </section>
  );
}
