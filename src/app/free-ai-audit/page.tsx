import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Clock, Search, Zap, BarChart3, Bot, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free AI Audit — Driftlss",
  description: "Book a free 30-minute call. We'll analyze your practice's digital presence and show you exactly where AI can save time, capture more leads, and grow your business.",
  openGraph: {
    title: "Free AI Audit — Driftlss",
    description: "Book a free 30-minute call. We'll analyze your practice's digital presence and show you exactly where AI can save time, capture more leads, and grow your business.",
    url: "https://www.driftlss.com/free-ai-audit",
    images: [
      {
        url: "/free-ai-audit/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free AI Audit — Driftlss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Audit — Driftlss",
    description: "Book a free 30-minute call. We'll analyze your practice's digital presence and show you exactly where AI can save time, capture more leads, and grow your business.",
    images: ["/free-ai-audit/twitter-image"],
  },
};

const auditAreas = [
  { icon: <Search className="w-5 h-5" />, title: "Online Visibility", desc: "How you show up in Google, AI search (ChatGPT, Perplexity), and local directories." },
  { icon: <Zap className="w-5 h-5" />, title: "Website Performance", desc: "Speed, mobile experience, and conversion paths — where families drop off and why." },
  { icon: <Bot className="w-5 h-5" />, title: "AI Opportunities", desc: "Where chatbots, phone agents, or automation could save your team 10+ hours a week." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Lead Capture", desc: "How inquiries flow through your site today and where leads are slipping through." },
];

const whatYouGet = [
  "A clear picture of how families find (or don't find) your practice online",
  "Specific AI tools that fit your workflow — not generic recommendations",
  "Honest assessment of what's working and what's costing you clients",
  "A prioritized action plan you can use whether you work with us or not",
];

export default function FreeAIAuditPage() {
  return (
    <main>
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[#FAF6F0]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full mb-8">
                <Clock className="w-3.5 h-3.5" />
                30 Minutes — 100% Free
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A18] leading-[1.08] tracking-tight mb-6">
                Find out where AI can <em className="italic text-teal-600">actually</em> help your practice.
              </h1>

              <p className="text-lg text-[#4A4A45] font-light leading-relaxed max-w-lg mb-8">
                Most practices are leaving hours on the table every week. We&apos;ll audit your
                digital presence and show you exactly where AI creates leverage — no pitch, no pressure.
              </p>

              <div className="space-y-3 mb-10">
                {whatYouGet.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-[0.95rem] text-[#4A4A45]">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-base px-8 py-4 bg-teal-600 text-white rounded-full transition-all duration-300 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,148,136,0.25)] group"
              >
                Book Your Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-[#8A8A82] mt-4">No commitment. No credit card. Just 30 minutes of clarity.</p>
            </div>

            {/* Right — what we analyze */}
            <div className="space-y-4">
              <h2 className="font-display text-xl text-[#1A1A18] mb-6">What we&apos;ll analyze</h2>
              {auditAreas.map((area, i) => (
                <div key={i} className="bg-white border border-[#EDE0CC] rounded-xl p-6 transition-all hover:border-teal-300 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.1rem] text-[#1A1A18] mb-1">{area.title}</h3>
                      <p className="text-sm text-[#4A4A45] font-light leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 bg-[#1A1A18] rounded-2xl overflow-hidden text-center border-2 border-teal-500">
            <div className="relative w-full aspect-[2.4/1] bg-[#0B0B0A]">
              <Image
                src="/images/pages/free audit/freeaiaudit.png"
                alt="Free AI Audit"
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[3px] w-full bg-teal-500" />
            <div className="p-12 md:p-16">
              <h2 className="font-display text-3xl md:text-4xl text-[#FAF6F0] leading-tight mb-4">
                30 minutes. Zero risk. Real answers.
              </h2>
              <p className="text-white/60 text-lg font-light max-w-lg mx-auto mb-8">
                We&apos;ll tell you exactly what we&apos;d do, how long it&apos;d take, and what
                it&apos;d cost. You keep the insights either way.
              </p>
              <a
                href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-base px-10 py-4 bg-[#99F6E4] text-[#1A1A18] rounded-full transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(153,246,228,0.25)] group"
              >
                Book Your Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
