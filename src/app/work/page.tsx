import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal, { RevealOnLoad } from "@/components/Reveal";
import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudy } from "./CaseStudyCard";

const caseStudies: CaseStudy[] = [
  {
    name: "Fun Factory Sensory Gym",
    specialty: "Sensory Gym / Pediatric Therapy",
    description:
      "Fun Factory needed a complete website overhaul that matched the energy and heart of their gym. We delivered a full redesign with before/after sliders, an AI chatbot integrated with their CRM, a testimonials section, and a dedicated NBC feature showcase.",
    features: [
      "Full website redesign",
      "AI chatbot + CRM integration",
      "Before/after transformation sliders",
      "Testimonials & NBC feature section",
    ],
    stats: [
      { value: "280%", label: "More website inquiries" },
      { value: "NBC", label: "Featured on affiliate station" },
      { value: "60%", label: "Parent questions handled by AI" },
    ],
    quote:
      "The new site captures who we are. Parents tell us all the time that our website is what made them choose us.",
    author: "Troy",
    authorRole: "Founder",
    link: "https://funfactorysensorygym.com",
    screenshot: "/images/case-studies/ffsg-screenshot.png",
    domain: "funfactorysensorygym.com",
  },
  {
    name: "Spectrum Sensory Gyms",
    specialty: "Sensory Gym / Pediatric Therapy",
    description:
      "We built Spectrum Sensory Gyms a custom website from the ground up — complete with an immersive 3D gym tour, an ROI calculator for prospective franchisees, and an AI-powered chatbot to answer parent questions 24/7.",
    features: [
      "Custom website design & development",
      "Interactive 3D gym tour",
      "ROI calculator for franchise leads",
      "AI chatbot for parent inquiries",
    ],
    stats: [
      { value: "3D", label: "Interactive gym tour" },
      { value: "AI", label: "24/7 parent chatbot" },
      { value: "ROI", label: "Franchise calculator" },
    ],
    quote:
      "Driftlss understood our mission from day one. The website they built doesn't just look incredible, it actually brings families through our doors.",
    author: "Mason",
    authorRole: "Founder",
    link: "https://spectrumsensorygyms.com",
    screenshot: "/images/case-studies/ssg-screenshot.png",
    domain: "spectrumsensorygyms.com",
  },
];

const workItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Driftlss Case Studies",
  description: "Real results for therapy practices and pediatric care centers built with Driftlss websites and AI systems.",
  url: "https://www.driftlss.com/work",
  itemListElement: caseStudies.map((study, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: study.name,
    description: study.description,
    url: study.link,
  })),
};

export default function WorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workItemListJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center">
        <div className="absolute inset-0 bg-cream-50" />

        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <RevealOnLoad>
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-700 leading-tight mb-6">
              Real Results for Real Practices
            </h1>
            <p className="text-charcoal-400 text-lg leading-relaxed max-w-xl mx-auto">
              We partner with therapy practices and pediatric care centers to
              build websites and AI systems that drive measurable growth. Here
              are a few of the transformations we&apos;re most proud of.
            </p>
          </RevealOnLoad>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative bg-cream-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.name} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              Your practice could be next.
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Let&apos;s talk about what a custom website and AI-powered systems
              could do for your therapy practice.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-teal-700 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-black/10 text-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
