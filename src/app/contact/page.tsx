import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RevealOnLoad } from "@/components/Reveal";
import SmartLeadForm from "./SmartLeadForm";
import ContactFAQ from "./ContactFAQ";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-cream-50" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <RevealOnLoad className="text-center mb-16" y={20}>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-4">
              Let&apos;s Talk About Your Practice
            </h1>
            <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
              15 minutes. No commitment. We&apos;ll audit your online presence and
              show you exactly where families are falling off.
            </p>
          </RevealOnLoad>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form (client) */}
            <div className="lg:col-span-3">
              <SmartLeadForm />
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info (server-rendered) */}
              <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-sm">
                <h2 className="font-display text-xl text-charcoal-700 mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Email</p>
                      <a
                        href="mailto:admin@driftlss.com"
                        className="text-charcoal-600 font-medium hover:text-teal-600 transition-colors"
                      >
                        admin@driftlss.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Phone</p>
                      <a
                        href="tel:+19208731960"
                        className="text-charcoal-600 font-medium hover:text-teal-600 transition-colors"
                      >
                        (920) 873-1960
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Location</p>
                      <p className="text-charcoal-600 font-medium">Wisconsin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-charcoal-300 mb-0.5">Areas Served</p>
                      <p className="text-charcoal-600 font-medium">
                        Nationwide (remote-friendly) &mdash; we specialize in therapy
                        practices across the country
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a href="https://www.linkedin.com/company/driftlss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61572115589299" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <ContactFAQ />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
