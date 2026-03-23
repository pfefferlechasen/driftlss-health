"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <a href="/" className="block mb-4">
              <img
                src="/driftlss-wordmark-dark.svg"
                alt="driftlss"
                className="h-6 w-auto"
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
                  { label: "Therapy SEO", href: "/services/therapy-seo" },
                  { label: "AI Visibility", href: "/services/ai-visibility" },
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

        <div className="border-t border-charcoal-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-sm">
            &copy; 2026 Driftless. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-charcoal-400 text-sm hover:text-teal-300 transition-colors">Privacy</a>
            <p className="text-charcoal-400 text-sm">Wisconsin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
