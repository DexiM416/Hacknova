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
  <section id="about" className="py-24 relative">
    {/* Background decoration */}
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
    <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <AnimatedSection>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <p className="text-sm text-primary font-medium uppercase tracking-widest">About The Event</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        <h2 className="font-space text-fluid-h2 font-bold text-center mb-6">
          Welcome to{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">
              HACKNOVA 2026
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-50" />
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className="text-foreground font-semibold">Shivajirao S. Jondhale College of Engineering (SSJCOE), Dombivli (E)</span> proudly presents HACKNOVA Hackathon 2026 — a hybrid innovation marathon where creativity meets technology across 5 cutting-edge tracks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Organized by <span className="text-primary font-medium">Technova</span>, this hackathon brings together the brightest minds from across India to identify real-world problems, build original solutions, and compete for <span className="text-accent font-bold">₹60,000</span> in prizes.
          </p>
          <motion.div
            className="inline-flex items-center gap-2 mt-4"
            whileHover={{ x: 5 }}
          >
            <Link to="/register" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors">
              Learn more about participation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {features.map((item, i) => {
          const colors = colorMap[item.color as keyof typeof colorMap];
          return (
            <AnimatedSection key={item.title} delay={i * 0.06}>
              <motion.div
                className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 text-center transition-all duration-500 h-full cursor-default overflow-hidden ${item.glow}`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className={`w-7 h-7 ${colors.text}`} />
                  </motion.div>
                  <h3 className={`font-space font-bold text-sm text-foreground mb-2 group-hover:${colors.text} transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
