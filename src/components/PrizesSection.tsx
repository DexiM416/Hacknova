import AnimatedSection from "./AnimatedSection";
import { Trophy, Medal, Award, GraduationCap, Brain, Shield, Globe, Sparkles, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";

const trackPrizes = [
  { icon: GraduationCap, title: "EdTech", amount: "₹10,000", color: "primary" },
  { icon: Brain, title: "AI / ML", amount: "₹10,000", color: "secondary" },
  { icon: Shield, title: "CyberTech", amount: "₹10,000", color: "accent" },
  { icon: Globe, title: "Web / App Dev", amount: "₹10,000", color: "primary" },
  { icon: Sparkles, title: "Open Innovation", amount: "₹10,000", color: "secondary" },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string; gradient: string }> = {
  primary: {
    border: "border-primary/30 hover:border-primary/60",
    text: "text-primary",
    bg: "bg-primary/10",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
    gradient: "from-primary/20 to-transparent"
  },
  accent: {
    border: "border-accent/30 hover:border-accent/60",
    text: "text-accent",
    bg: "bg-accent/10",
    glow: "hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]",
    gradient: "from-accent/20 to-transparent"
  },
  secondary: {
    border: "border-secondary/30 hover:border-secondary/60",
    text: "text-secondary",
    bg: "bg-secondary/10",
    glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]",
    gradient: "from-secondary/20 to-transparent"
  },
};

const PrizesSection = () => (
  <section id="prizes" className="py-24 relative overflow-hidden bg-black/20">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent text-glow-gold mb-6 tracking-wider">
            PRIZE POOL
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-accent/50" />
            <p className="font-orbitron text-2xl md:text-3xl text-accent tracking-widest text-glow-gold">₹50,000</p>
            <div className="h-[1px] w-12 bg-accent/50" />
          </div>
        </div>
      </AnimatedSection>

      {/* Main Prize Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {/* 1st Place / Main Tracks */}
        <div className="col-span-1 md:col-span-3">
          <h3 className="font-orbitron text-xl text-center text-primary mb-8 tracking-widest uppercase">— Track Winners —</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trackPrizes.map((track, i) => (
              <AnimatedSection key={track.title} delay={0.1 + i * 0.05}>
                <div className="group relative bg-card/40 backdrop-blur-md border border-white/5 p-6 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <track.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-space font-bold text-white mb-1">{track.title}</h4>
                    <p className="font-orbitron text-lg text-primary text-glow-cyan">{track.amount}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Special Prizes */}
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={0.4}>
          <div className="relative bg-card/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl overflow-hidden group hover:border-secondary/50 transition-all duration-300 text-center">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Medal className="w-24 h-24 text-secondary" />
            </div>
            <div className="relative z-10">
              <h4 className="font-orbitron text-xl text-secondary mb-2 tracking-wide">RUNNER UP RECOGNITION</h4>
              <p className="text-muted-foreground">Trophy + Certificate for all track runner-ups</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  </section>
);

export default PrizesSection;
