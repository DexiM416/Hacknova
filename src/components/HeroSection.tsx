import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, ArrowRight, ArrowDown, Trophy, Globe, CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TARGET_DATE = new Date("2026-02-24T23:59:59");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showNova, setShowNova] = useState(false);

  // Animate NOVA text after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNova(true);
    }, 1500); // Show "2026" for 1.5 seconds, then transform to "NOVA"
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const countdownBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Interactive gradient that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 pointer-events-none"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_100%_50%/0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-lg font-medium mb-10 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default">
            <Zap size={18} />
            Pan-India Hackathon • Hybrid Format
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Circuit Frame Top Left */}
          <svg className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-60" viewBox="0 0 100 100">
            <path d="M 5 5 L 30 5 L 35 10 L 60 10" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
            <path d="M 5 5 L 5 40 L 10 45 L 10 70" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
            <circle cx="5" cy="5" r="1.5" fill="#22d3ee" />
            <circle cx="60" cy="10" r="1" fill="#22d3ee" />
            <circle cx="10" cy="70" r="1" fill="#22d3ee" />
          </svg>

          {/* Circuit Frame Bottom Right */}
          <svg className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-60 rotate-180" viewBox="0 0 100 100">
            <path d="M 5 5 L 30 5 L 35 10 L 60 10" fill="none" stroke="#ec4899" strokeWidth="0.5" />
            <path d="M 5 5 L 5 40 L 10 45 L 10 70" fill="none" stroke="#ec4899" strokeWidth="0.5" />
            <circle cx="5" cy="5" r="1.5" fill="#ec4899" />
            <circle cx="60" cy="10" r="1" fill="#ec4899" />
            <circle cx="10" cy="70" r="1" fill="#ec4899" />
          </svg>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-orbitron text-fluid-h1 font-black tracking-wider mb-6 relative z-10"
        >
          <motion.span
            className="text-white inline-block mr-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(6,182,212,0.8)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HACK
          </motion.span>
          <span className="relative inline-block min-w-[5ch]">
            <AnimatePresence mode="wait">
              {!showNova ? (
                <motion.span
                  key="2026"
                  className="text-primary text-glow-cyan inline-block"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    rotateX: 90,
                    filter: "blur(10px)",
                    scale: 0.8
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  2026
                </motion.span>
              ) : (
                <motion.span
                  key="nova"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-accent text-glow-orange inline-block"
                  initial={{ opacity: 0, y: 20, rotateX: -90, scale: 1.2 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  NOVA
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-orbitron text-2xl md:text-4xl lg:text-5xl font-bold text-secondary text-glow-magenta mb-10 tracking-widest uppercase"
        >
          HACKATHON 2026
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-3"
        >
          Shivajirao S. Jondhale College of Engineering, Dombivli (E)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-base md:text-lg text-muted-foreground mb-12"
        >
          Organized by <span className="text-primary font-medium">Technova</span> • 5 Technology Tracks • 30 Shortlisted Teams
        </motion.p>

        {/* Prize badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="inline-block mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-accent/10 border border-accent/30 box-glow-gold hover:bg-accent/15 transition-all duration-300 cursor-default">
            <Trophy className="w-10 h-10 text-accent" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-accent/70 font-medium uppercase tracking-widest">Total Prize Pool</p>
              <p className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-accent text-glow-gold">₹50,000</p>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-6">Registration Closes In</p>
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 mb-4">
            {countdownBlocks.map((block) => (
              <motion.div
                key={block.label}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-2 hover:border-primary/50 hover:bg-muted/70 transition-all duration-300">
                  <span className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{block.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm md:text-base text-muted-foreground">Registration closes Feb 24, 2026</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg md:text-xl hover:shadow-[0_0_40px_hsl(190_100%_50%/0.6)] transition-all duration-300"
            >
              Register Now <ArrowRight size={22} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/tracks"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl border border-border text-foreground font-medium text-lg md:text-xl hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              View Tracks
            </Link>
          </motion.div>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-8 md:gap-16 mt-20"
        >
          {[
            { icon: Trophy, value: "₹50,000", label: "Prize Pool" },
            { icon: Globe, value: "Pan-India", label: "Participation" },
            { icon: CalendarDays, value: "12hrs", label: "Final Hackathon" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center cursor-default"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mx-auto mb-3" />
              <p className="font-space font-bold text-xl md:text-2xl text-foreground">{stat.value}</p>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={28} className="text-muted-foreground mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

