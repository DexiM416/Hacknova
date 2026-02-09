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
      {/* Background Layers - Removed to show body background image */}

      {/* Cosmic Visual Effects */}
      <CosmicEffects />
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
