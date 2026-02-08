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
  <section id="prizes" className="py-24 relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Trophy className="w-5 h-5 text-accent" />
          <p className="text-sm text-accent font-medium uppercase tracking-widest">Rewards Await</p>
        </div>
        <h2 className="font-space text-fluid-h2 font-bold text-center mb-4">
          Win Exciting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary animate-pulse">
            Prizes
          </span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto">
          Compete for a total prize pool of <span className="text-accent font-bold text-2xl">₹60,000</span> across 5 technology tracks
        </p>
      </AnimatedSection>

      {/* Total Prize Pool Banner */}
      <AnimatedSection delay={0.1}>
        <motion.div
          className="max-w-md mx-auto mb-12 rounded-2xl bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 border border-accent/30 p-6 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Crown className="w-8 h-8 text-accent" />
            <h3 className="font-space text-2xl font-bold text-accent">Total Prize Pool</h3>
          </div>
          <p className="font-space text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent animate-pulse">
            ₹60,000
          </p>
        </motion.div>
      </AnimatedSection>

      {/* Track Winners Header */}
      <AnimatedSection delay={0.15}>
        <h3 className="font-space text-xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
          <Star className="w-5 h-5 text-accent" />
          Track Winners — <span className="text-accent">₹10,000</span> Each
          <Star className="w-5 h-5 text-accent" />
        </h3>
      </AnimatedSection>

      {/* Track prizes grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
        {trackPrizes.map((track, i) => {
          const c = colorMap[track.color];
          return (
            <AnimatedSection key={track.title} delay={0.2 + i * 0.05}>
              <motion.div
                className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm ${c.border} ${c.bg} p-5 text-center transition-all duration-500 h-full flex flex-col justify-center items-center overflow-hidden ${c.glow}`}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <motion.div
                    className={`p-3 rounded-full bg-background/80 mb-3 group-hover:scale-110 transition-transform border border-border/50`}
                    whileHover={{ rotate: 10 }}
                  >
                    <track.icon className={`w-8 h-8 ${c.text}`} />
                  </motion.div>
                  <p className="text-sm font-medium text-foreground mb-1">{track.title}</p>
                  <p className={`font-space text-xl font-bold ${c.text}`}>{track.amount}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Additional prizes */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        <AnimatedSection delay={0.45}>
          <motion.div
            className="group rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 text-center hover:border-muted-foreground/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Medal className="w-7 h-7 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <h4 className="font-space font-bold text-foreground mb-2">Runner-Up Recognition</h4>
            <p className="text-sm text-muted-foreground">Trophy + Certificate per track</p>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <motion.div
            className="group rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/30 p-6 text-center hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-secondary" />
            </div>
            <h4 className="font-space font-bold text-foreground mb-2">Jury Special Prizes</h4>
            <p className="text-sm text-muted-foreground">
              <span className="text-secondary font-bold">₹5,000 × 2</span> (cross-track, discretionary)
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrizesSection;
