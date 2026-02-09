import AnimatedSection from "./AnimatedSection";
import { Globe, CreditCard, Users, CheckCircle, ArrowRight, Shield, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const rules = [
  { text: "All team members must be currently enrolled students", icon: "🎓" },
  { text: "Cross-college teams are allowed and encouraged", icon: "🤝" },
  { text: "Each participant can only be part of one team", icon: "👤" },
  { text: "Teams must select one of the 5 technology tracks", icon: "🛤️" },
  { text: "Original ideas and code required — no predefined problems", icon: "💡" },
  { text: "Teams must designate a team lead as primary contact", icon: "📱" },
];

const criteria = [
  { icon: Globe, title: "Pan-India Participation", desc: "Open to students from any college or university across India", color: "primary", emoji: "🌍" },
  { icon: CreditCard, title: "Valid Student ID", desc: "Must be currently enrolled with a valid college/university ID", color: "accent", emoji: "🎫" },
  { icon: Users, title: "Team of 2–4 Members", desc: "Form a team with 2 to 4 members to participate", color: "secondary", emoji: "👥" },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", glow: "shadow-[0_0_40px_rgba(6,182,212,0.4)]", gradient: "from-primary/20 via-primary/5 to-transparent" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", glow: "shadow-[0_0_40px_rgba(251,191,36,0.4)]", gradient: "from-accent/20 via-accent/5 to-transparent" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30", glow: "shadow-[0_0_40px_rgba(236,72,153,0.4)]", gradient: "from-secondary/20 via-secondary/5 to-transparent" },
};

const EligibilitySection = () => {
  const [hoveredRule, setHoveredRule] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Grid Bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 p-2 rounded-full border border-primary/20 bg-primary/5">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
              Who Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary text-glow-cyan">Participate?</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto text-center mb-16 bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="px-6 py-2 bg-black border border-accent/50 rounded-full text-accent font-orbitron text-sm tracking-wider uppercase shadow-lg shadow-accent/20">
                Open to All India Students
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              Engineering, Arts, Science, Design — <br />
              <span className="text-primary font-bold">Innovation has no boundaries.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Eligibility criteria - Tech Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {criteria.map((c, i) => {
            const colors = colorMap[c.color as keyof typeof colorMap];
            return (
              <AnimatedSection key={c.title} delay={0.15 + i * 0.1}>
                <div className={`group h-full bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-${c.color}/50 transition-all duration-300 relative overflow-hidden`}>

                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <c.icon size={80} className={`text-${c.color}`} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className={`text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {c.emoji}
                    </div>

                    <h4 className={`font-orbitron font-bold text-xl text-white mb-3 group-hover:text-${c.color} transition-colors`}>{c.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>

                  {/* Bottom line accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${c.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Rules - Tech List */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl text-white mb-10 text-center flex items-center justify-center gap-3">
              <span className="text-primary">//</span> PARTICIPATION PROTOCOLS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className={`relative flex items-center gap-4 p-5 rounded-lg border border-white/5 bg-black/40 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 group`}
                  onMouseEnter={() => setHoveredRule(i)}
                  onMouseLeave={() => setHoveredRule(null)}
                >
                  <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                    {rule.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/70 mb-1">RULE_0{i + 1}</div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{rule.text}</div>
                  </div>

                  {/* Tech corner accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20 group-hover:border-primary/80 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/20 group-hover:border-primary/80 transition-colors" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/register"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-black font-orbitron font-bold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 clip-path-polygon"
                  style={{ clipPath: "polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%)" }}
                >
                  <Zap size={20} fill="currentColor" /> INITIATE REGISTRATION
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EligibilitySection;
