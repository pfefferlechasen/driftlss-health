"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <a href="/" className="block mb-4">
              <Image
                src="/driftlss-wordmark-dark.svg"
                alt="driftlss"
                width={100}
                height={24}
              />
            </a>
            <p className="text-charcoal-300 max-w-xs text-sm leading-relaxed">
              Websites and AI systems built exclusively for therapy practices and
              pediatric care centers. Based in Wisconsin.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Services
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Practice Websites", href: "/services/practice-websites" },
                  { label: "AI Intake Assistant", href: "/services/ai-intake-assistant" },
                  { label: "AI Phone Agent", href: "/services/ai-phone-agent" },
                  { label: "Therapy SEO", href: "/services/therapy-seo" },
                  { label: "AI Visibility", href: "/services/ai-visibility" },
                  { label: "Workflow Automation", href: "/services/workflow-automation" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Industries
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "ABA Therapy", href: "/industries/aba-therapy" },
                  { label: "Occupational Therapy", href: "/industries/occupational-therapy" },
                  { label: "Speech Pathology", href: "/industries/speech-therapy" },
                  { label: "Sensory Gyms", href: "/industries/sensory-gyms" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-600 pt-8 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-charcoal-400 text-sm hover:text-teal-300 transition-colors">Privacy</a>
            <p className="text-charcoal-400 text-sm">Wisconsin</p>
            <a href="https://www.linkedin.com/company/driftlss" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-teal-300 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <p className="text-charcoal-400 text-sm">
            &copy; 2026 Driftlss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
