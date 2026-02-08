import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Users, CalendarDays, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const RegisterPage = () => (
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
              Team <span className="text-primary text-glow-cyan">Registration</span>
            </h1>
            <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
              Register your team for HACKNOVA Hackathon 2026 on Unstop
            </p>
          </AnimatedSection>

          {/* Registration card */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-lg mx-auto rounded-2xl bg-card border border-border p-10 text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-space text-2xl font-bold text-foreground mb-3">Register on Unstop</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Team registration for HACKNOVA Hackathon 2026 is hosted on Unstop. Click the button below to register your team.
              </p>
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-[0_0_30px_hsl(45_100%_55%/0.4)] transition-all duration-300 hover:scale-105"
              >
                Register on Unstop <ExternalLink size={18} />
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                You will be redirected to Unstop to complete your registration
              </p>
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Users, title: "Team Size", value: "2–4 Members" },
              { icon: CalendarDays, title: "Deadline", value: "Feb 21, 2026" },
              { icon: Trophy, title: "Prize Pool", value: "₹60,000" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={0.3 + i * 0.1}>
                <div className="rounded-2xl bg-card border border-border p-6 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="font-space font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RegisterPage;
