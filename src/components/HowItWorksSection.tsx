import AnimatedSection from "./AnimatedSection";
import { FileText, Users, Flame, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  {
    num: 1,
    title: "Online Registration & Submission",
    desc: "Register your team (2–4 members), select a track, submit your idea abstract, PPT, and optional prototype/demo link.",
    date: "Feb 7 – Feb 28, 2026",
    icon: FileText,
    active: true,
    color: "primary",
    steps: ["Team registration", "Track selection", "Idea submission"],
  },
  {
    num: 2,
    title: "Shortlisting (30 Teams)",
    desc: "Our panel reviews all submissions based on innovation, feasibility, relevance, and execution. Top 30 teams are selected.",
    date: "Mar 1 – Mar 7, 2026",
    icon: Users,
    active: false,
    color: "accent",
    steps: ["Panel review", "Evaluation", "Shortlist announcement"],
  },
  {
    num: 3,
    title: "Offline Final Round",
    desc: "Shortlisted teams compete on-campus at SSJCOE in a 12-hour hackathon. Present to judges, win track-wise prizes!",
    date: "March 17, 2026",
    icon: Flame,
    active: false,
    color: "secondary",
    steps: ["12-hour coding", "Mentor sessions", "Final presentations"],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string; gradient: string }> = {
  primary: {
    border: "border-primary/40",
    text: "text-primary",
    bg: "bg-primary/10",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    gradient: "from-primary/10 to-transparent"
  },
  accent: {
    border: "border-accent/40",
    text: "text-accent",
    bg: "bg-accent/10",
    glow: "shadow-[0_0_40px_rgba(251,191,36,0.2)]",
    gradient: "from-accent/10 to-transparent"
  },
  secondary: {
    border: "border-secondary/40",
    text: "text-secondary",
    bg: "bg-secondary/10",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.2)]",
    gradient: "from-secondary/10 to-transparent"
  },
};

const HowItWorksSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection>
        <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-4">
          How It{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Works
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          A streamlined hybrid process — <span className="text-foreground font-medium">submit online, compete on-campus</span>
        </p>
      </AnimatedSection>

      {/* Timeline connector for desktop */}
      <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[60%] max-w-3xl h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-20" />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {phases.map((phase, i) => {
          const c = colorMap[phase.color];
          return (
            <AnimatedSection key={phase.num} delay={i * 0.12}>
              <motion.div
                className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm border p-8 h-full transition-all duration-500 overflow-hidden ${phase.active
                    ? `${c.border} ${c.glow}`
                    : "border-border/50 hover:border-muted-foreground/30"
                  }`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Gradient overlay for active phase */}
                {phase.active && (
                  <div className={`absolute inset-0 bg-gradient-to-b ${c.gradient} opacity-50`} />
                )}

                <div className="relative z-10">
                  {/* Phase number */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-space font-bold text-lg ${phase.active ? `${c.bg} ${c.text}` : "bg-muted text-muted-foreground"
                        }`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {phase.num}
                    </motion.div>
                    {phase.active && (
                      <span className={`text-[10px] uppercase tracking-widest font-bold ${c.text} ${c.bg} px-3 py-1 rounded-full border border-current/20`}>
                        Active Now
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${phase.active ? c.bg : "bg-muted/50"} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    <phase.icon size={26} className={phase.active ? c.text : "text-muted-foreground"} />
                  </motion.div>

                  <h3 className="font-space font-bold text-lg text-foreground mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{phase.desc}</p>

                  {/* Steps */}
                  <div className="space-y-2 mb-5">
                    {phase.steps.map((step, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle size={12} className={phase.active ? c.text : "text-muted-foreground/50"} />
                        {step}
                      </div>
                    ))}
                  </div>

                  {/* Date */}
                  <div className={`inline-flex items-center gap-2 text-xs font-medium ${phase.active ? c.text : "text-muted-foreground"} px-3 py-1.5 rounded-full ${phase.active ? c.bg : "bg-muted/30"} border ${phase.active ? "border-current/20" : "border-border/50"}`}>
                    {phase.date}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
