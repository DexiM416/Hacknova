import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AnimatedSection from "@/components/AnimatedSection";
import { CalendarDays, Clock } from "lucide-react";

const ShortlistedPage = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Fixed Background Layers */}
    <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" />
    <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.25]" />
    <InteractiveBackground />
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
            <div className="max-w-lg mx-auto rounded-2xl bg-card border border-border p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-space text-2xl font-bold text-foreground mb-3">Coming Soon</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The shortlisted teams will be announced on <span className="text-foreground font-medium">March 7, 2026</span> after our panel reviews all submissions.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground">
                <CalendarDays size={14} />
                Announcement: March 7, 2026
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
