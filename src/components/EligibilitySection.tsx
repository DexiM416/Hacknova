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

// Interactive 3D Card Component - optimized for mobile
const InteractiveCard = ({ children, color, className = "" }: { children: React.ReactNode; color: string; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Skip on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 text-center transition-all duration-300 h-full overflow-hidden cursor-pointer ${isHovered && !isMobile ? colors.glow : ""} ${className}`}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} rounded-2xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 ${colors.border}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Floating particles on hover - DISABLED on mobile */}
      {isHovered && !isMobile && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${colors.bg}`}
              style={{ left: `${20 + i * 25}%`, bottom: "15%" }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -40, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </>
      )}

      <div style={isMobile ? {} : { transform: "translateZ(30px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const EligibilitySection = () => {
  const [hoveredRule, setHoveredRule] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-primary/30"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-2 h-2 rounded-full bg-accent/40"
        animate={{ y: [0, -20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-[5%] w-2 h-2 rounded-full bg-secondary/30"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-sm text-primary font-medium uppercase tracking-widest">Eligibility</p>
          </div>
          <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
            Who Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Participate?
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 mb-4"
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">Open to ALL INDIA Students</span>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Star className="w-4 h-4 text-primary" />
              </motion.div>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Whether you're from engineering, science, design, or any stream — if you have a passion for technology and innovation, you're welcome to participate!
            </p>
          </div>
        </AnimatedSection>

        {/* Eligibility criteria - Interactive 3D Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14 perspective-1000">
          {criteria.map((c, i) => {
            const colors = colorMap[c.color as keyof typeof colorMap];
            return (
              <AnimatedSection key={c.title} delay={0.15 + i * 0.1}>
                <InteractiveCard color={c.color}>
                  <motion.div
                    className="text-3xl mb-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {c.emoji}
                  </motion.div>
                  <motion.div
                    className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <c.icon className={`w-8 h-8 ${colors.text}`} />
                  </motion.div>
                  <h4 className="font-space font-bold text-lg text-foreground mb-2">{c.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </InteractiveCard>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Rules - Interactive List */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-space font-bold text-xl text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
              </motion.div>
              Participation Rules
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {rules.map((rule, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-4 text-sm p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${hoveredRule === i
                    ? "bg-primary/10 border-primary/40 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                    : "bg-card/40 border-border/30 hover:border-primary/30"
                    }`}
                  onMouseEnter={() => setHoveredRule(i)}
                  onMouseLeave={() => setHoveredRule(null)}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredRule === i ? "0%" : "-100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.span
                    className="text-xl relative z-10"
                    animate={hoveredRule === i ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {rule.icon}
                  </motion.span>
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div
                        animate={hoveredRule === i ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle size={14} className={hoveredRule === i ? "text-primary" : "text-muted-foreground"} />
                      </motion.div>
                      <span className="text-xs text-primary font-medium">Rule {i + 1}</span>
                    </div>
                    <span className={`transition-colors ${hoveredRule === i ? "text-foreground" : "text-muted-foreground"}`}>
                      {rule.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/register"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Zap size={20} className="relative z-10" />
                  <span className="relative z-10">Register Your Team Now</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
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
