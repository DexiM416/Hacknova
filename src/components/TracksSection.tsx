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
    {/* Background Tech Elements */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
    <svg className="absolute w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="10 20" />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#ec4899" strokeWidth="1" strokeDasharray="10 20" />
    </svg>

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-orbitron tracking-widest uppercase">
            CHOOSE YOUR PATH
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            Technology <span className="text-primary text-glow-cyan">Tracks</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Build original solutions for real-world problems.
            <span className="block text-white font-medium mt-2">No predefined problem statements.</span>
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
        {tracks.map((track, i) => (
          <AnimatedSection key={track.title} delay={i * 0.1}>
            <div className="group relative h-full bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              {/* Circuit lines decorative */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="bg-black/40 rounded-xl p-6 h-full flex flex-col items-start relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                  <track.icon className={`w-6 h-6 text-white group-hover:text-primary transition-colors`} />
                </div>

                <h3 className="font-orbitron text-xl text-white mb-2 group-hover:text-primary transition-colors">{track.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{track.desc}</p>

                <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-primary/70">PRIZE: ₹10,000</span>
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/tracks"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-primary text-black font-orbitron font-bold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 clip-path-polygon"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
            >
              EXPLORE ALL TRACKS <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TracksSection;
