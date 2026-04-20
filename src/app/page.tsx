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
