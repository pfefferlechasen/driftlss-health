import { ArrowRight, MessageSquare, Phone, Workflow, Database, Bell, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function AiPoweredToolsPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <MessageSquare className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">AI-Powered Tools</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                Your Practice,
                <br />
                <span className="text-teal-500">Always On</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                Parents don&apos;t search for therapy during business hours. They
                search at 11pm when they can&apos;t sleep. Our AI tools answer their
                questions, capture their information, and route them to your team —
                around the clock.
              </p>
            </RevealOnLoad>

            <RevealOnLoad delay={0.3}>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
              >
                See a Live Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {/* AI Chatbot */}
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="font-display text-2xl text-charcoal-700">AI Intake Chatbot</h3>
                    </div>
                    <p className="text-charcoal-400 leading-relaxed mb-6">
                      Custom-trained on your practice&apos;s services, insurance
                      policies, waitlist status, and intake process. Parents get
                      instant, accurate answers. Your team gets qualified leads
                      with context.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "60%", label: "Questions handled automatically" },
                        { value: "24/7", label: "Always available" },
                        { value: "<3s", label: "Response time" },
                        { value: "CRM", label: "Auto-synced leads" },
                      ].map((s) => (
                        <div key={s.label} className="bg-cream-50 border border-cream-200 rounded-xl p-3 text-center">
                          <p className="font-display text-xl text-teal-600">{s.value}</p>
                          <p className="text-charcoal-400 text-xs">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider">What It Handles</h4>
                    {[
                      "\"Do you accept Blue Cross Blue Shield?\"",
                      "\"What's the waitlist for OT right now?\"",
                      "\"My son is 4 and just got an ASD diagnosis. What do I do?\"",
                      "\"What are your hours and where are you located?\"",
                      "\"How do I schedule an evaluation?\"",
                      "\"What's the difference between OT and PT for my child?\"",
                    ].map((q) => (
                      <div key={q} className="bg-cream-50 border border-cream-200 rounded-xl px-5 py-3">
                        <p className="text-charcoal-500 text-sm italic">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* AI Phone Agent */}
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal-700">AI Phone Agent</h3>
                </div>
                <p className="text-charcoal-400 leading-relaxed mb-6 max-w-2xl">
                  When your front desk is with a patient, the AI answers the phone.
                  It handles FAQs, collects caller information, and routes urgent
                  calls to the right person. No more missed calls. No more voicemail
                  black holes.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-lg">
                  {[
                    { value: "0", label: "Missed calls" },
                    { value: "Instant", label: "Call routing" },
                    { value: "100%", label: "Call capture rate" },
                  ].map((s) => (
                    <div key={s.label} className="bg-cream-50 border border-cream-200 rounded-xl p-4 text-center">
                      <p className="font-display text-2xl text-teal-600">{s.value}</p>
                      <p className="text-charcoal-400 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Automation + CRM */}
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <div className="bg-white border border-cream-200 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-xl text-charcoal-700">Workflow Automation</h3>
                  </div>
                  <p className="text-charcoal-400 leading-relaxed mb-4">
                    Automated follow-ups after inquiries. Appointment reminders that
                    reduce no-shows. Review requests sent at the right moment. Every
                    workflow tuned to how therapy practices actually operate.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Intake form → CRM entry → team notification",
                      "Missed call → text follow-up → booking link",
                      "Appointment → reminder sequence → review request",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <p className="text-charcoal-500 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-white border border-cream-200 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                      <Database className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-xl text-charcoal-700">Custom CRM Integration</h3>
                  </div>
                  <p className="text-charcoal-400 leading-relaxed mb-4">
                    Every lead from every channel lands in one place. Chat inquiries,
                    phone calls, form submissions, and email — all routed, tagged, and
                    tracked so nothing falls through the cracks.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Unified inbox for all lead sources",
                      "Automatic lead scoring and tagging",
                      "Pipeline tracking from inquiry to intake",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <p className="text-charcoal-500 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Not a Plugin
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Custom-built, not bolted on
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Generic chatbot plugins give generic answers. Our AI is trained on
              your practice, integrated with your systems, and built to convert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "HIPAA-Conscious Design",
                desc: "Built with privacy first. No sensitive health data stored in chat logs. Conversations are designed to capture contact info and route to your secure systems.",
              },
              {
                icon: Database,
                title: "Your Data, Your CRM",
                desc: "Leads flow directly into your existing systems. No separate dashboard to check. No data silos. Everything integrates with how your practice already works.",
              },
              {
                icon: Bell,
                title: "Smart Escalation",
                desc: "The AI knows when to hand off to a human. Urgent situations, complex cases, and emotional conversations get routed to your team immediately.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group bg-cream-50 border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                    <f.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-700 mb-3">{f.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              See the AI in action.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a call and we&apos;ll demo a live chatbot trained on a real
              therapy practice. See exactly how it handles parent questions.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
