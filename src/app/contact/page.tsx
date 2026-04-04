import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RevealOnLoad } from "@/components/Reveal";
import ContactForm from "./ContactForm";
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
              <ContactForm />
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
                        href="tel:+18486660694"
                        className="text-charcoal-600 font-medium hover:text-teal-600 transition-colors"
                      >
                        (848) 666-0694
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
