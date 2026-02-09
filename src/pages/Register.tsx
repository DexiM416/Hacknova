import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmicEffects from "@/components/CosmicEffects";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Users, CalendarDays, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const RegisterPage = () => (
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
              Team <span className="text-primary text-glow-cyan">Registration</span>
            </h1>
            <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
              Register your team for HACKNOVA Hackathon 2026 on Unstop
            </p>
          </AnimatedSection>

          {/* Registration card */}
          {/* Registration card */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-lg mx-auto group relative bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 mb-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="bg-black/40 rounded-xl p-10 text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-orbitron text-2xl font-bold text-foreground mb-3">Register on Unstop</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
                  Team registration for HACKNOVA Hackathon 2026 is hosted on Unstop. Click the button below to register your team.
                </p>
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold font-orbitron tracking-wide hover:shadow-[0_0_30px_hsl(45_100%_55%/0.4)] transition-all duration-300 hover:scale-105"
                >
                  Register on Unstop <ExternalLink size={18} />
                </a>
                <p className="text-xs text-muted-foreground mt-4 font-mono">
                  You will be redirected to Unstop to complete your registration
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Users, title: "Team Size", value: "3–4 Members", color: "primary" },
              { icon: CalendarDays, title: "Deadline", value: "Feb 24, 2026", color: "accent" },
              { icon: Trophy, title: "Prize Pool", value: "₹50,000", color: "secondary" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={0.3 + i * 0.1}>
                <div className={`group relative bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-${item.color}/50 transition-all duration-300`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="bg-black/40 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                    <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 border border-${item.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <p className="font-orbitron font-bold text-foreground mb-1">{item.title}</p>
                    <p className={`text-sm text-${item.color} font-mono tracking-wide`}>{item.value}</p>
                  </div>
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
