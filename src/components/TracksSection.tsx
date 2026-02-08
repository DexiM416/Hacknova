import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Brain, Shield, Globe, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tracks = [
  { icon: GraduationCap, title: "EdTech", desc: "Tools for enhanced learning experiences, accessibility, and educational innovation", color: "primary" },
  { icon: Brain, title: "AI / ML", desc: "Intelligent systems, machine learning models, and predictive analytics", color: "secondary" },
  { icon: Shield, title: "CyberTech", desc: "Cybersecurity solutions, privacy tools, and digital safety innovations", color: "accent" },
  { icon: Globe, title: "Web / App Dev", desc: "Full-stack applications, progressive web apps, and developer tools", color: "primary" },
  { icon: Sparkles, title: "Open Innovation", desc: "Any technology, any domain — if it solves a real-world problem", color: "secondary" },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string; gradient: string }> = {
  primary: {
    border: "hover:border-primary/50",
    text: "text-primary",
    bg: "bg-primary/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
    gradient: "from-primary/20 via-transparent to-transparent"
  },
  secondary: {
    border: "hover:border-secondary/50",
    text: "text-secondary",
    bg: "bg-secondary/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]",
    gradient: "from-secondary/20 via-transparent to-transparent"
  },
  accent: {
    border: "hover:border-accent/50",
    text: "text-accent",
    bg: "bg-accent/10",
    glow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]",
    gradient: "from-accent/20 via-transparent to-transparent"
  },
};

const TracksSection = () => (
  <section id="tracks" className="py-24 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-primary" />
          <p className="text-sm text-primary font-medium uppercase tracking-widest">Choose Your Path</p>
        </div>
        <h2 className="font-space text-fluid-h2 font-bold text-center mb-4">
          Technology{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Tracks
          </span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto">
          Choose your track and build an original solution — <span className="text-foreground font-medium">no predefined problem statements</span>
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
        {tracks.map((track, i) => {
          const c = colorMap[track.color];
          return (
            <AnimatedSection key={track.title} delay={i * 0.06}>
              <motion.div
                className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 text-center transition-all duration-500 cursor-default h-full overflow-hidden ${c.border} ${c.glow}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(3)].map((_, j) => (
                    <motion.div
                      key={j}
                      className={`absolute w-1 h-1 rounded-full ${c.bg}`}
                      style={{ left: `${20 + j * 30}%`, bottom: "10%" }}
                      animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <track.icon size={28} className={c.text} />
                  </motion.div>
                  <h3 className={`font-space font-bold text-base text-foreground mb-2 group-hover:${c.text} transition-colors`}>
                    {track.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{track.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Teams identify their own real-world problems and build original solutions
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-primary font-medium hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              View detailed track information <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TracksSection;
