import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmicEffects from "@/components/CosmicEffects";
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
    {/* Fixed Background Layers - Removed to match Home Page */}

    <CosmicEffects />
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {tracks.map((track, i) => {
              const c = colorMap[track.color] || colorMap.primary;
              return (
                <AnimatedSection key={track.title} delay={0.15 + i * 0.08}>
                  <div className={`group relative h-full bg-card/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl overflow-hidden hover:${c.border} transition-all duration-300`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="bg-black/40 rounded-xl p-6 h-full flex flex-col items-start relative z-10">
                      <div className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-${track.color}/50 transition-all duration-300`}>
                        <track.icon className={`w-6 h-6 ${c.text} group-hover:text-white transition-colors`} />
                      </div>

                      <h3 className={`font-orbitron text-xl font-bold text-foreground mb-2 group-hover:${c.text} transition-colors`}>{track.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{track.desc}</p>

                      <div className="w-full mb-4">
                        <p className="text-xs text-muted-foreground font-medium mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {track.examples.slice(0, 3).map((ex) => (
                            <span key={ex} className={`text-[10px] px-2 py-1 rounded-full border bg-white/5 border-white/10 text-muted-foreground`}>
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <span className={`text-xs font-mono ${c.text}`}>PRIZE: ₹8,000</span>
                        <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-${track.color}/50`}>
                          <Sparkles size={12} className="text-muted-foreground" />
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
