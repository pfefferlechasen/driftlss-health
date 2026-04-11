import { ArrowRight, LayoutDashboard, Users, BarChart3, MessageSquare, Megaphone, FileText, Settings, Layers, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";

export default function CrmPortalPage() {
  return (
    <main>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cream-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <RevealOnLoad className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <LayoutDashboard className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">CRM Portal</span>
            </RevealOnLoad>

            <RevealOnLoad delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-charcoal-700 leading-[1.08] tracking-tight mb-8">
                Your Practice,
                <br />
                <span className="text-teal-500">One Dashboard</span>
              </h1>
            </RevealOnLoad>

            <RevealOnLoad delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed max-w-2xl mb-10">
                A custom CRM portal built around how your practice actually
                operates. Leads, staff, analytics, ads, chatbot conversations —
                everything in one place, shaped to fit your workflow. Not the
                other way around.
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

      {/* Built Around You */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Fully Customizable
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Your CRM molds around your business
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Off-the-shelf CRMs force you to adapt to their workflow. Ours adapts
              to yours. Every module, view, and automation is configured for how
              your practice actually runs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Custom from Day One",
                desc: "We don't hand you a login and wish you luck. Every dashboard, pipeline, and report is configured to match your intake process, your team structure, and your growth goals.",
              },
              {
                icon: Settings,
                title: "Feature Requests Welcome",
                desc: "Need a new report? A different pipeline view? A custom automation? Just ask. We build and ship features based on what you actually need — not a product roadmap designed for someone else.",
              },
              {
                icon: Layers,
                title: "Grows with You",
                desc: "Add new locations, staff, services, or channels without switching platforms. Your CRM scales with your practice — no migration, no data loss, no starting over.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group bg-white border border-cream-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 transition-all h-full">
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

      {/* Core Features */}
      <section className="py-24 md:py-32 bg-charcoal-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              What&apos;s Inside
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-cream-100 leading-tight mb-4">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="text-charcoal-300 max-w-2xl mx-auto text-lg">
              Each module is purpose-built for therapy practices. No bloated
              features you&apos;ll never use.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Lead Pipelines */}
            <Reveal>
              <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="font-display text-2xl text-cream-100">Lead Pipelines</h3>
                    </div>
                    <p className="text-charcoal-300 leading-relaxed mb-6">
                      Visual pipeline tracking from first inquiry to completed intake.
                      Every lead from every channel — website chat, phone, forms, email —
                      organized, tagged, and moving forward.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "All", label: "channels unified" },
                        { value: "Auto", label: "lead tagging" },
                        { value: "Visual", label: "pipeline stages" },
                        { value: "Zero", label: "leads lost" },
                      ].map((s) => (
                        <div key={s.label} className="bg-charcoal-700 border border-charcoal-500 rounded-xl p-3 text-center">
                          <p className="font-display text-xl text-teal-400">{s.value}</p>
                          <p className="text-charcoal-300 text-xs">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-charcoal-300 uppercase tracking-wider">Pipeline Stages</h4>
                    {[
                      "New Inquiry → auto-captured from chat, phone, or form",
                      "Contacted → first outreach sent, follow-up scheduled",
                      "Insurance Verified → coverage confirmed, auth in progress",
                      "Evaluation Scheduled → date set, reminders automated",
                      "Intake Complete → onboarded, assigned to provider",
                      "Custom stages → add whatever fits your workflow",
                    ].map((q) => (
                      <div key={q} className="bg-charcoal-700 border border-charcoal-500 rounded-xl px-5 py-3">
                        <p className="text-charcoal-300 text-sm">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Two-column feature cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Chatbot Overview */}
              <Reveal>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream-100">Chatbot Overview</h3>
                  </div>
                  <p className="text-charcoal-300 leading-relaxed mb-4">
                    Read every conversation your AI chatbot has with visitors.
                    See what parents ask, which questions convert, and where
                    the bot hands off to your team.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Full conversation transcripts",
                      "Lead capture and contact info collected",
                      "Escalation history and handoff triggers",
                      "Conversation volume and response metrics",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <p className="text-charcoal-300 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Web Analytics */}
              <Reveal delay={0.1}>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream-100">Web Analytics</h3>
                  </div>
                  <p className="text-charcoal-300 leading-relaxed mb-4">
                    Monitor your website performance without leaving the
                    dashboard. Traffic, conversions, top pages, and referral
                    sources — all at a glance.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Visitor count, bounce rate, session duration",
                      "Top-performing pages and conversion paths",
                      "Traffic source breakdown (organic, paid, direct)",
                      "Goal tracking tied to actual intake volume",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <p className="text-charcoal-300 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Another two-column row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ad Overview + AI Recommendations */}
              <Reveal>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                      <Megaphone className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream-100">Ad Overview + AI Recommendations</h3>
                  </div>
                  <p className="text-charcoal-300 leading-relaxed mb-4">
                    See all your ad campaigns in one view. Spend, clicks,
                    conversions, and cost per lead — plus AI-powered
                    recommendations to optimize your budget.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Cross-platform ad performance (Google, Meta)",
                      "Cost per lead and ROI tracking",
                      "AI-generated optimization suggestions",
                      "Budget allocation recommendations",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <p className="text-charcoal-300 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Custom Reports */}
              <Reveal delay={0.1}>
                <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream-100">Custom Report Generation</h3>
                  </div>
                  <p className="text-charcoal-300 leading-relaxed mb-4">
                    Generate reports on anything — lead volume by source,
                    staff performance, conversion rates by service, or
                    whatever metric matters to your practice.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Drag-and-drop report builder",
                      "Scheduled exports (weekly, monthly, quarterly)",
                      "Shareable links for stakeholders",
                      "Historical trend analysis",
                    ].map((w) => (
                      <div key={w} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <p className="text-charcoal-300 text-sm">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Staff Management - full width */}
            <Reveal>
              <div className="bg-charcoal-600 border border-charcoal-500 rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="font-display text-2xl text-cream-100">Staff Management</h3>
                    </div>
                    <p className="text-charcoal-300 leading-relaxed">
                      Manage your team from the same dashboard. Track
                      applications, onboard new hires, assign caseloads, and
                      monitor staff activity — all without switching tools.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: "Applications", desc: "Review and track applicants through your hiring pipeline" },
                      { title: "Team Directory", desc: "Staff profiles, roles, certifications, and availability" },
                      { title: "Caseload Tracking", desc: "Monitor provider capacity and balance assignments" },
                      { title: "Role Permissions", desc: "Control who sees what — admin, provider, front desk" },
                    ].map((item) => (
                      <div key={item.title} className="bg-charcoal-700 border border-charcoal-500 rounded-xl p-4">
                        <p className="font-display text-sm text-teal-400 mb-1">{item.title}</p>
                        <p className="text-charcoal-300 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Not Another SaaS */}
      <section className="py-24 md:py-32 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Not Another SaaS Login
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Why this isn&apos;t HubSpot
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto text-lg">
              Generic CRMs charge you $300/month for 200 features you&apos;ll
              never use. We build exactly what your practice needs — nothing
              more, nothing less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white border border-cream-200 rounded-2xl p-8">
                <h3 className="font-display text-xl text-charcoal-700 mb-4">Generic CRMs</h3>
                <p className="text-charcoal-400 text-sm mb-6">Built for everyone, optimized for no one</p>
                <div className="space-y-3">
                  {[
                    "Months of setup and onboarding",
                    "Features designed for sales teams, not therapy",
                    "Per-seat pricing that scales against you",
                    "Your workflow adapts to their software",
                    "Support tickets, not a direct line",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal-300 mt-2 shrink-0" />
                      <p className="text-charcoal-400 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white border border-teal-300 rounded-2xl p-8">
                <h3 className="font-display text-xl text-charcoal-700 mb-4">Driftlss CRM Portal</h3>
                <p className="text-charcoal-400 text-sm mb-6">Built for your practice, configured by us</p>
                <div className="space-y-3">
                  {[
                    "Configured and ready when your site launches",
                    "Every feature maps to your actual workflow",
                    "Flat pricing — add staff without penalty",
                    "The software adapts to your practice",
                    "Direct access to the team that built it",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <p className="text-charcoal-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              See the dashboard in action.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a call and we&apos;ll walk you through a live CRM portal.
              See exactly how leads flow, reports generate, and your team
              stays organized — all in one place.
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
