"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 py-16 border-t border-teal-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mb-12">
          <div className="max-w-xs mx-auto md:mx-0">
            <a href="/" className="block mb-8">
              <Image
                src="/driftlss_text_white.png"
                alt="driftlss"
                width={500}
                height={117}
                className="block w-auto"
                style={{ height: "54px" }}
              />
            </a>
            <p className="text-charcoal-300 text-sm leading-relaxed">
              Websites and AI systems built mainly for therapy practices and
              pediatric care centers. Based in Appleton, Wisconsin.
            </p>
            <div className="flex flex-col gap-1.5 mt-4">
              <a href="tel:+19208731960" className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors">
                (920) 873-1960
              </a>
              <a href="mailto:admin@driftlss.com" className="text-charcoal-300 text-sm hover:text-teal-300 transition-colors">
                admin@driftlss.com
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto grid grid-cols-2 gap-x-8 gap-y-10 md:max-w-none md:mx-0 md:flex md:flex-wrap md:justify-center md:gap-x-12">
            <div>
              <h4 className="text-cream-200 font-semibold text-sm mb-4">
                Why Us
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Overview", href: "/why-us" },
                  { label: "Next.js Over WordPress", href: "/why-us/nextjs-over-wordpress" },
                  { label: "GEO & AI Visibility", href: "/why-us/geo-ai-visibility" },
                  { label: "AI-Powered Tools", href: "/why-us/ai-powered-tools" },
                  { label: "Built for Therapy", href: "/why-us/built-for-therapy" },
                  { label: "SEO & Analytics", href: "/why-us/seo" },
                  { label: "CRM Portal", href: "/why-us/crm-portal" },
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
                Services
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Overview", href: "/services" },
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
                Company
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Our Work", href: "/work" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
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
                Contact
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Contact Us", href: "/contact" },
                  { label: "Free AI Audit", href: "/free-ai-audit" },
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
            <a href="/privacy" className="text-charcoal-400 text-base hover:text-teal-300 transition-colors">Privacy</a>
            <p className="text-charcoal-400 text-base">Appleton, WI</p>
            <a href="https://www.linkedin.com/company/driftlss" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572115589299" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1877F2] hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.pinterest.com/driftlss/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#E60023] hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href="https://www.instagram.com/driftlssagency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24"><defs><linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FEDA75"/><stop offset="0.25" stopColor="#FA7E1E"/><stop offset="0.5" stopColor="#D62976"/><stop offset="0.75" stopColor="#962FBF"/><stop offset="1" stopColor="#4F5BD5"/></linearGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
          <p className="text-charcoal-400 text-base">
            &copy; 2026 Driftlss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
