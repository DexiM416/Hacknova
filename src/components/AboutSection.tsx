import AnimatedSection from "./AnimatedSection";
import { Users, Lightbulb, Layers, Globe, GitBranch, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Technova",
    desc: "A student-driven tech community at SSJCOE, fostering innovation, learning, and collaboration among aspiring developers.",
    color: "primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  {
    icon: Lightbulb,
    title: "Real-World Problems",
    desc: "Teams identify and solve genuine challenges — no predefined problem statements.",
    color: "accent",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]",
  },
  {
    icon: Layers,
    title: "5 Technology Tracks",
    desc: "EdTech, AI/ML, CyberTech, Web/App Dev, and Open Innovation.",
    color: "secondary",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
  {
    icon: Globe,
    title: "Pan-India Scope",
    desc: "Open to students from across India — build your dream team.",
    color: "primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  {
    icon: GitBranch,
    title: "Hybrid Format",
    desc: "Online submissions followed by a 12-hour on-campus final at SSJCOE.",
    color: "accent",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]",
  },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", gradient: "from-primary/20 to-transparent" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", gradient: "from-accent/20 to-transparent" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30", gradient: "from-secondary/20 to-transparent" },
};

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Tech Background Grid */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-orbitron text-primary tracking-widest uppercase">The Event</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technova</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to <strong className="text-white">SSJCOE's Premier Hackathon</strong>. We are bridging the gap between imagination and reality. A 24-hour innovation marathon designed to push boundaries.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Main Feature Cards */}
        <AnimatedSection delay={0.1} className="md:col-span-2">
          <div className="relative h-full bg-card/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-40 h-40 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-orbitron text-2xl text-white mb-3">Student-Driven Community</h3>
              <p className="text-muted-foreground">Fostering innovation, learning, and collaboration among aspiring developers. We believe in the power of student-led initiatives to create real impact.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative h-full bg-card/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-accent/30 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-orbitron text-xl text-white mb-3">Real Problems</h3>
              <p className="text-muted-foreground text-sm">No predefined statements. Identify and solve genuine challenges.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="relative h-full bg-card/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-secondary/30 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                <Layers className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-orbitron text-xl text-white mb-3">5 Tracks</h3>
              <p className="text-muted-foreground text-sm">EdTech, AI/ML, CyberTech, Web/App Dev, Open Innovation.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="md:col-span-2">
          <div className="relative h-full bg-card/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe className="w-40 h-40 text-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-2xl text-white mb-3">Hybrid Format</h3>
                <p className="text-muted-foreground">Online submissions followed by a 12-hour on-campus final at SSJCOE. Experience the best of both worlds.</p>
              </div>
              <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-primary">STATUS</span>
                  <span className="text-xs font-mono text-green-400">ONLINE</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary animate-pulse" />
                </div>
                <div className="mt-4 flex justify-between text-xs text-muted-foreground font-mono">
                  <span>PHASE 1: VIRTUAL</span>
                  <span>PHASE 2: ON-CAMPUS</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
