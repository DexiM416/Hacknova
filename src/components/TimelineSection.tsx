import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { CalendarDays, FileText, CheckCircle, Flame, Users, Search, ChevronDown, Clock, MapPin } from "lucide-react";

// Detailed event data with specific color themes from the logo
const events = [
  {
    id: 1,
    date: "February 7, 2026",
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
    date: "February 21, 2026",
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

const TiltCard = ({ children, className, glowClass }: { children: React.ReactNode, className?: string, glowClass: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Disable 3D tilt on mobile for performance
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-150 ease-out ${className} hover:${glowClass}`}
    >
      <div style={isMobile ? {} : { transform: "translateZ(15px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

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
          <h2 className="font-space text-fluid-h2 font-bold mb-4">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Follow the journey from registration to the grand finale.
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
    primary: "text-primary border-primary/30 bg-primary/5 hover:border-primary/60",
    accent: "text-accent border-accent/30 bg-accent/5 hover:border-accent/60",
    secondary: "text-secondary border-secondary/30 bg-secondary/5 hover:border-secondary/60",
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.25, delay: index * 0.03, ease: "easeOut" }}
      className={`relative flex items-start md:items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline Dot - Pulsing with logo colors */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 bg-background rounded-full p-1.5 border border-border mt-1 md:mt-0 shadow-lg">
        <div
          className={`w-4 h-4 rounded-full ${dotColor} ${event.glow} animate-pulse`}
        />
      </div>

      {/* Connector Line for Desktop */}
      <div className={`hidden md:block absolute top-1/2 w-8 h-[2px] ${isEven ? "right-1/2 mr-4 bg-gradient-to-l" : "left-1/2 ml-4 bg-gradient-to-r"} from-transparent to-${event.color}/50`} />

      {/* Spacer */}
      <div className="hidden md:block flex-1" />

      {/* Content Card with 3D Tilt */}
      <div className="flex-1 pl-12 md:pl-0 w-full max-w-xl lg:max-w-2xl perspective-1000">
        <TiltCard
          className={`group relative bg-card/80 backdrop-blur-md border border-border/60 p-6 md:p-8 rounded-2xl overflow-hidden shadow-xl ${currentColors}`}
          glowClass={event.glow}
        >
          {/* Decorative Gradient Blob */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 ${dotColor} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`} />

          {/* Active Status Header */}
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className={`inline-flex items-center gap-2 font-mono text-xs font-bold px-3 py-1 rounded-full border border-current ${currentColors}`}>
              <event.icon size={12} />
              {event.date}
            </span>
            {event.status === "active" && (
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${dotColor}`}></span>
              </span>
            )}
            {event.status === "completed" && (
              <CheckCircle size={16} className={event.color === 'primary' ? 'text-primary' : event.color === 'accent' ? 'text-accent' : 'text-secondary'} />
            )}
          </div>

          <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${event.color === 'primary' ? 'group-hover:text-primary' : event.color === 'accent' ? 'group-hover:text-accent' : 'group-hover:text-secondary'}`}>
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-medium">
            {event.desc}
          </p>

          {(event.location || event.time) && (
            <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground/80 font-mono">
              {event.time && (
                <span className="flex items-center gap-1">
                  <Clock size={12} className={event.color === 'primary' ? 'text-primary' : event.color === 'accent' ? 'text-accent' : 'text-secondary'} /> {event.time}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={12} className={event.color === 'primary' ? 'text-primary' : event.color === 'accent' ? 'text-accent' : 'text-secondary'} /> {event.location}
                </span>
              )}
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none ${event.color === 'primary' ? 'text-primary/70 hover:text-primary' : event.color === 'accent' ? 'text-accent/70 hover:text-accent' : 'text-secondary/70 hover:text-secondary'}`}
          >
            {isOpen ? "Less Details" : "More Details"}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={14} />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border/50 text-xs text-foreground/80 leading-relaxed font-mono">
              {event.details}
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

export default TimelineSection;
