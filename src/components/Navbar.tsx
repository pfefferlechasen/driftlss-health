"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const showBg = !transparent || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img
            src="/driftlss-wordmark-light.svg"
            alt="driftlss"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-charcoal-400 hover:text-teal-600 transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal-500"
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
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-teal-500 text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
