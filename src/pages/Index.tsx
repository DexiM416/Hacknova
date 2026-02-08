import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import PrizesSection from "@/components/PrizesSection";
import TimelineSection from "@/components/TimelineSection";
import EligibilitySection from "@/components/EligibilitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import CosmicEffects from "@/components/CosmicEffects";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" />
      <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.25]" />

      {/* Cosmic Visual Effects */}
      <CosmicEffects />
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <PrizesSection />
        <TimelineSection />
        <EligibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
