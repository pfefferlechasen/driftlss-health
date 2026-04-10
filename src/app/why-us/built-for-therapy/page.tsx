import { ArrowRight, Heart, Users, MapPin, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function BuiltForTherapyPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <Heart className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">Built for Therapy</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                We Only Build
                <br />
                <span className="text-teal-500">for Therapy</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                Most agencies build for anyone with a credit card. We chose one
                industry and went deep. Every decision we make is informed by how
                therapy practices actually operate, how families actually search,
                and what actually converts a worried parent into a booked intake.
              </p>
            </RevealOnLoad>

            <RevealOnLoad delay={0.3}>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg"
              >
                Talk to Someone Who Gets It
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealOnLoad>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Specialties We Serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Deep expertise across therapy
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              We understand the nuances between specialties — from insurance
              workflows to parent concerns to regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ABA Therapy",
                desc: "We understand BCBA supervision models, RBT staffing challenges, and how parents navigate an ASD diagnosis. Your website speaks their language.",
                href: "/industries/aba-therapy",
              },
              {
                title: "Occupational Therapy",
                desc: "Sensory processing, fine motor development, daily living skills — we know how to communicate what OT does in terms parents understand.",
                href: "/industries/occupational-therapy",
              },
              {
                title: "Speech-Language Pathology",
                desc: "Articulation, language delays, feeding therapy, AAC devices. We've built for SLP practices and know the questions families ask first.",
                href: "/industries/speech-therapy",
              },
              {
                title: "Sensory Gyms",
                desc: "Facility showcases, class schedules, membership management, and the unique parent community that sensory gyms serve.",
                href: "/industries/sensory-gyms",
              },
              {
                title: "Physical Therapy",
                desc: "Pediatric PT practices need to explain complex conditions simply. We build sites that educate parents and drive referrals.",
                href: "/industries/aba-therapy",
              },
              {
                title: "Multi-Discipline Clinics",
                desc: "When you offer OT, PT, SLP, and ABA under one roof, your website needs to route families to the right service without overwhelming them.",
                href: "/contact",
              },
            ].map((s, i) => (
              <Link key={s.title} href={s.href} className="block">
                <Reveal delay={i * 0.06}>
                  <div className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all h-full">
                    <h3 className="font-display text-xl text-charcoal-700 mb-3 group-hover:text-teal-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-charcoal-400 leading-relaxed text-sm mb-4">{s.desc}</p>
                    <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1.5 group-hover:text-teal-700 transition-colors">
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Specialization Matters */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              The Advantage
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight">
              What specialization means for you
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "We Speak Parent",
                desc: "We know the questions parents ask before choosing a practice. \"Do you take my insurance?\" \"What's your waitlist?\" \"What will my child actually do in sessions?\" Your website answers all of them.",
              },
              {
                icon: MapPin,
                title: "Local + Niche SEO",
                desc: "\"Pediatric OT near me\" and \"ABA therapy [your city]\" — we know exactly which keywords drive intake calls for therapy practices, not generic \"healthcare\" terms.",
              },
              {
                icon: Clock,
                title: "Faster Delivery",
                desc: "We've built this before. We know the page structure, the content hierarchy, the features that matter. No discovery phase figuring out what a therapy practice does.",
              },
              {
                icon: Shield,
                title: "Industry Awareness",
                desc: "We understand HIPAA considerations, insurance verification workflows, and the sensitivity required when parents are navigating a child's diagnosis.",
              },
              {
                icon: Star,
                title: "Proven Results",
                desc: "We've built for ABA clinics, sensory gyms, and multi-discipline practices. Our portfolio is therapy practices — not a random mix of industries.",
              },
              {
                icon: Heart,
                title: "We Give a Damn",
                desc: "Therapy practices help kids. That matters to us. We're not building casino sites and SaaS dashboards on the side. This is what we do.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
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
              Work with people who understand your world.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              No explaining what ABA is. No teaching us about insurance
              authorization. Just a team that already knows your industry inside
              and out.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
