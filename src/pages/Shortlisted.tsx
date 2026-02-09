import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmicEffects from "@/components/CosmicEffects";
import AnimatedSection from "@/components/AnimatedSection";
import { CalendarDays, Clock } from "lucide-react";

const ShortlistedPage = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Fixed Background Layers */}
    {/* Fixed Background Layers - Removed to match Home Page */}

    <CosmicEffects />
    <Navbar />
    <main className="relative z-10 pt-[72px]">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
              Shortlisted <span className="text-primary text-glow-cyan">Teams</span>
            </h1>
            <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
              Top 30 teams will be announced after the review process
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-lg mx-auto group relative bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-black/40 rounded-xl p-12 text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-orbitron text-2xl font-bold text-foreground mb-3">Coming Soon</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  The shortlisted teams will be announced on <span className="text-foreground font-medium">March 7, 2026</span> after our panel reviews all submissions.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground font-mono">
                  <CalendarDays size={14} />
                  Announcement: March 7, 2026
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ShortlistedPage;
