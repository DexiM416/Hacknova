import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { CalendarDays, FileText, CheckCircle, Flame, Users, Search, ChevronDown, Clock, MapPin } from "lucide-react";

// Detailed event data with specific color themes from the logo
const events = [
  {
    id: 1,
    date: "February 10, 2026",
    title: "Registration Opens",
    desc: "Team registration and track selection begins.",
    details: "Gather your team of 3-4 members and register on the portal. Choose your preferred track and start brainstorming!",
    icon: CalendarDays,
    status: "completed",
    color: "primary", // Cyan
    glow: "box-glow-cyan"
  },
  {
    id: 2,
    date: "February 24, 2026",
    title: "Registration Closes",
    desc: "Last date to register your team.",
    details: "Ensure all team members have joined via the invite link. No new registrations will be accepted after 11:59 PM.",
    icon: Users,
    status: "upcoming",
    color: "accent", // Gold
    glow: "box-glow-gold"
  },
  {
    id: 3,
    date: "February 28, 2026",
    title: "Submission Deadline",
    desc: "Submit your idea abstract, PPT, and demo link.",
    details: "Upload your PPT ensuring it covers the problem statement, solution, tech stack, and USP. A short video demo is recommended.",
    icon: FileText,
    status: "upcoming",
    color: "secondary", // Magenta
    glow: "box-glow-magenta"
  },
  {
    id: 4,
    date: "March 1, 2026",
    title: "Shortlisting Begins",
    desc: "Panel reviews all submissions.",
    details: "Our panel of industry experts will review submissions based on innovation, feasibility, and impact. Stay tuned for updates!",
    icon: Search,
    status: "upcoming",
    color: "primary",
    glow: "box-glow-cyan"
  },
  {
    id: 5,
    date: "March 7, 2026",
    title: "Shortlist Announced",
    desc: "Top 30 teams announced.",
    details: "The list of finalists will be published on the website and social media. Selected teams will receive confirmation emails.",
    icon: CheckCircle,
    status: "upcoming",
    color: "accent",
    glow: "box-glow-gold"
  },
  {
    id: 6,
    date: "March 17, 2026",
    title: "Offline Final Round",
    desc: "12-hour hackathon at SSJCOE campus.",
    details: "Join us for the grand finale! Coding starts at 8:00 AM. Mentoring sessions, food, and fun activities included.",
    icon: Flame,
    status: "upcoming",
    location: "SSJCOE, Dombivli",
    time: "8:00 AM - 8:00 PM",
    color: "secondary",
    glow: "box-glow-magenta"
  },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.01
  });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-wider text-white">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse text-glow-cyan">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light">
            From Registration to the Grand Finale
          </p>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto">
          {/* Central Line with Multi-color Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-muted/30 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-secondary origin-top"
              style={{ height: "100%", scaleY }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {events.map((ev, index) => (
              <TimelineItem key={ev.id} event={ev} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-2/3 left-1/4 w-60 h-60 bg-accent/10 rounded-full blur-[90px] pointer-events-none mix-blend-screen" />
    </section>
  );
};

const TimelineItem = ({ event, index }: { event: any, index: number }) => {
  const isEven = index % 2 === 0;
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic Color Mapping based on event.color
  const colorClasses = {
    primary: "text-primary border-primary/30 bg-primary/5 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    accent: "text-accent border-accent/30 bg-accent/5 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]",
    secondary: "text-secondary border-secondary/30 bg-secondary/5 hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
  };

  const bgColors = {
    primary: "bg-primary",
    accent: "bg-accent",
    secondary: "bg-secondary",
  };

  const currentColors = colorClasses[event.color as keyof typeof colorClasses];
  const dotColor = bgColors[event.color as keyof typeof bgColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex items-start md:items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline Dot - Tech Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 bg-black rounded-lg p-2 border border-white/10 mt-1 md:mt-0 shadow-xl">
        <div
          className={`w-3 h-3 rounded-sm ${dotColor} ${event.glow} animate-pulse relative`}
        >
          <div className={`absolute inset-0 ${dotColor} blur-sm opacity-50`} />
        </div>
      </div>

      {/* Connector Line for Desktop - Circuit Trace */}
      <div className={`hidden md:block absolute top-1/2 w-8 h-[1px] ${isEven ? "right-1/2 mr-4 bg-gradient-to-l" : "left-1/2 ml-4 bg-gradient-to-r"} from-transparent to-${event.color}/50`} />

      {/* Spacer */}
      <div className="hidden md:block flex-1" />

      {/* Content Card - Tech Panel */}
      <div className="flex-1 pl-12 md:pl-0 w-full max-w-xl lg:max-w-2xl">
        <div
          className={`group relative bg-card/60 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-none clip-path-polygon transition-all duration-300 ${currentColors}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}
        >
          {/* Circuit Decor */}
          <div className={`absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl ${currentColors.split(' ')[0].replace('text-', 'border-')}`} />

          {/* Active Status Header */}
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className={`inline-flex items-center gap-2 font-orbitron text-xs tracking-wider font-bold px-3 py-1 border-b ${currentColors.split(' ')[0].replace('text-', 'border-')}`}>
              <event.icon size={14} />
              {event.date}
            </span>
            {event.status === "active" && (
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
                </span>
                <span className={`text-[10px] font-mono ${event.color === 'primary' ? 'text-primary' : 'text-accent'}`}>LIVE</span>
              </span>
            )}
            {event.status === "completed" && (
              <CheckCircle size={16} className="text-white/30" />
            )}
          </div>

          <h3 className={`font-orbitron text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 text-white group-hover:text-${event.color}`}>
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-light">
            {event.desc}
          </p>

          {(event.location || event.time) && (
            <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground/80 font-mono border-l-2 border-white/10 pl-3">
              {event.time && (
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {event.time}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {event.location}
                </span>
              )}
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 text-xs font-orbitron uppercase tracking-widest transition-colors focus:outline-none opacity-70 hover:opacity-100 mt-2`}
          >
            {isOpen ? "Hide Intel" : "View Intel"}
            <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
          >
            <div className="pt-4 border-t border-white/10 text-xs text-muted-foreground font-mono leading-relaxed">
              &gt; {event.details}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineSection;
