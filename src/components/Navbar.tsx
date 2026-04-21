"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const whyUsSublinks = [
  { label: "Next.js Over WordPress", href: "/why-us/nextjs-over-wordpress" },
  { label: "GEO & AI Visibility", href: "/why-us/geo-ai-visibility" },
  { label: "AI-Powered Tools", href: "/why-us/ai-powered-tools" },
  { label: "Built for Therapy", href: "/why-us/built-for-therapy" },
  { label: "SEO & Analytics", href: "/why-us/seo" },
  { label: "CRM Portal", href: "/why-us/crm-portal" },
];

const servicesSublinks = [
  { label: "Practice Websites", href: "/services/practice-websites" },
  { label: "AI Intake Assistant", href: "/services/ai-intake-assistant" },
  { label: "AI Phone Agent", href: "/services/ai-phone-agent" },
  { label: "Therapy SEO", href: "/services/therapy-seo" },
  { label: "AI Visibility", href: "/services/ai-visibility" },
  { label: "Workflow Automation", href: "/services/workflow-automation" },
];

const contactSublinks = [
  { label: "Free AI Audit", href: "/free-ai-audit" },
];

const links = [
  { label: "Our Work", href: "/work" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar({ transparent = false, darkHero = false }: { transparent?: boolean; darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWhyUsOpen, setMobileWhyUsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const showBg = !transparent || scrolled;
  const onDark = darkHero && !showBg;
  const linkColor = onDark
    ? "text-white/80 hover:text-white"
    : "text-charcoal-400 hover:text-teal-600";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="relative block" style={{ width: "230px", height: "48px" }}>
          <Image
            src={onDark ? "/driftlss-wordmark-dark.svg" : "/driftlss_text_black.png"}
            alt="driftlss"
            width={500}
            height={117}
            priority
            className="absolute left-0 top-1/2 w-auto -translate-y-1/2"
            style={{ height: "100px" }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm ${linkColor} transition-colors font-medium`}
          >
            Home
          </Link>

          {/* Why Us dropdown */}
          <div className="relative group">
            <Link
              href="/why-us"
              className={`text-sm ${linkColor} transition-colors font-medium inline-flex items-center gap-1`}
            >
              Why Us
              <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-cream-200 rounded-xl shadow-lg shadow-black/5 py-2 w-56">
                <Link
                  href="/why-us"
                  className="block px-4 py-2.5 text-sm text-charcoal-500 hover:text-teal-600 hover:bg-cream-50 transition-colors font-medium"
                >
                  Overview
                </Link>
                <div className="border-t border-cream-200 my-1" />
                {whyUsSublinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-charcoal-400 hover:text-teal-600 hover:bg-cream-50 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={`text-sm ${linkColor} transition-colors font-medium inline-flex items-center gap-1`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-cream-200 rounded-xl shadow-lg shadow-black/5 py-2 w-56">
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-sm text-charcoal-500 hover:text-teal-600 hover:bg-cream-50 transition-colors font-medium"
                >
                  Overview
                </Link>
                <div className="border-t border-cream-200 my-1" />
                {servicesSublinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-charcoal-400 hover:text-teal-600 hover:bg-cream-50 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-sm ${linkColor} transition-colors font-medium`}
            >
              {l.label}
            </Link>
          ))}

          {/* Contact dropdown */}
          <div className="relative group">
            <Link
              href="/contact"
              className={`text-sm ${linkColor} transition-colors font-medium inline-flex items-center gap-1`}
            >
              Contact
              <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-cream-200 rounded-xl shadow-lg shadow-black/5 py-2 w-56">
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 text-sm text-charcoal-500 hover:text-teal-600 hover:bg-cream-50 transition-colors font-medium"
                >
                  Contact Us
                </Link>
                <div className="border-t border-cream-200 my-1" />
                {contactSublinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-charcoal-400 hover:text-teal-600 hover:bg-cream-50 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${onDark ? "text-white" : "text-charcoal-500"}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-cream-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-charcoal-500 font-medium"
              >
                Home
              </Link>

              {/* Mobile Why Us accordion */}
              <div>
                <button
                  onClick={() => setMobileWhyUsOpen(!mobileWhyUsOpen)}
                  className="text-charcoal-500 font-medium flex items-center gap-1.5 w-full"
                >
                  Why Us
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWhyUsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileWhyUsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 flex flex-col gap-3">
                        <Link
                          href="/why-us"
                          onClick={() => setMobileOpen(false)}
                          className="text-charcoal-400 text-sm font-medium"
                        >
                          Overview
                        </Link>
                        {whyUsSublinks.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-charcoal-400 text-sm"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-charcoal-500 font-medium flex items-center gap-1.5 w-full"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 flex flex-col gap-3">
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="text-charcoal-400 text-sm font-medium"
                        >
                          Overview
                        </Link>
                        {servicesSublinks.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-charcoal-400 text-sm"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal-500 font-medium"
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile Contact accordion */}
              <div>
                <button
                  onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  className="text-charcoal-500 font-medium flex items-center gap-1.5 w-full"
                >
                  Contact
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileContactOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 flex flex-col gap-3">
                        <Link
                          href="/contact"
                          onClick={() => setMobileOpen(false)}
                          className="text-charcoal-400 text-sm font-medium"
                        >
                          Contact Us
                        </Link>
                        {contactSublinks.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-charcoal-400 text-sm"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-500 text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
