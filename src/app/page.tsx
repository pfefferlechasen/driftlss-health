import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";
import BenefitsSection from "./components/home/BenefitsSection";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import { WhyItMattersSection, ProcessSection } from "./components/home/ContentSections";
import FaqSection from "./components/home/FaqSection";
import CtaSection from "./components/home/CtaSection";
import "./landing.css";

export default function HomePage() {
  return (
    <>
      <Navbar transparent />
      <HeroSection />
      <div className="flex justify-center py-8 bg-transparent">
        <a
          href="https://www.betterlaunch.co"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Featured on Better Launch"
        >
          <img
            src="https://www.betterlaunch.co/badge-dark.svg"
            alt="Featured on Better Launch"
            style={{ width: 200, height: "auto" }}
          />
        </a>
      </div>
      <StatsSection />
      <BenefitsSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyItMattersSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
