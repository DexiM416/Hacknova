import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Brain, Shield, Globe, Sparkles, Lightbulb } from "lucide-react";

const tracks = [
  {
    icon: GraduationCap,
    title: "EdTech",
    desc: "Build innovative tools for enhanced learning experiences, accessibility, skill development, and educational transformation.",
    examples: ["Interactive learning platforms", "Accessibility tools for education", "Skill assessment systems", "Virtual lab environments"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI / ML",
    desc: "Create intelligent systems leveraging machine learning, NLP, computer vision, and predictive analytics to solve real problems.",
    examples: ["Predictive health systems", "NLP-based assistants", "Computer vision applications", "Recommendation engines"],
    color: "secondary",
  },
  {
    icon: Shield,
    title: "CyberTech",
    desc: "Develop cybersecurity solutions, privacy tools, threat detection, and digital safety innovations.",
    examples: ["Threat detection systems", "Privacy-preserving tools", "Phishing detection", "Secure communication platforms"],
    color: "neon-green",
  },
  {
    icon: Globe,
    title: "Web / App Development",
    desc: "Create full-stack applications, progressive web apps, mobile solutions, and developer tools.",
    examples: ["SaaS platforms", "Community tools", "E-commerce solutions", "Developer productivity tools"],
    color: "neon-purple",
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    desc: "Any technology, any domain — if it solves a real-world problem with originality, it belongs here.",
    examples: ["Healthcare solutions", "Environmental tech", "Social impact tools", "Smart city applications"],
    color: "accent",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; badge: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20", badge: "bg-primary/10 text-primary border-primary/20" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20", badge: "bg-secondary/10 text-secondary border-secondary/20" },
  "neon-green": { text: "text-neon-green", bg: "bg-neon-green/10", border: "border-neon-green/20", badge: "bg-neon-green/10 text-neon-green border-neon-green/20" },
  "neon-purple": { text: "text-neon-purple", bg: "bg-neon-purple/10", border: "border-neon-purple/20", badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/20" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20", badge: "bg-accent/10 text-accent border-accent/20" },
};

const TracksPage = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Fixed Background Layers */}
    <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" />
    <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.25]" />
    <InteractiveBackground />
    <Navbar />
    <main className="relative z-10 pt-[72px]">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
              Technology <span className="text-primary text-glow-cyan">Tracks</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              Choose your track and identify a real-world problem to solve — no predefined problem statements
            </p>
          </AnimatedSection>

          {/* Banner */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl mx-auto rounded-2xl bg-card border border-border p-8 text-center mb-12">
              <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="font-space text-xl font-bold text-foreground mb-2">Your Problem, Your Solution</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                HACKNOVA has no predefined problem statements. Teams identify real-world challenges within their chosen track and build original, innovative solutions.
              </p>
            </div>
          </AnimatedSection>

          {/* Track cards */}
          <div className="max-w-3xl mx-auto space-y-5">
            {tracks.map((track, i) => {
              const c = colorMap[track.color];
              return (
                <AnimatedSection key={track.title} delay={0.15 + i * 0.08}>
                  <div className={`rounded-2xl bg-card border border-border p-6 md:p-8 flex gap-5 md:gap-6 items-start hover:${c.border} transition-all duration-300`}>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                      <track.icon size={24} className={c.text} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-space font-bold text-lg text-foreground mb-2">{track.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{track.desc}</p>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-2">Example areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {track.examples.map((ex) => (
                            <span key={ex} className={`text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TracksPage;
