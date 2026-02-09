import { motion } from "framer-motion";
import { Trophy, CalendarDays, Layers, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden bg-gradient-to-t from-primary/5 to-transparent">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-3xl" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-orbitron text-accent tracking-widest uppercase">Limited Spots Available</span>
        </div>

        <h2 className="font-orbitron text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow-cyan">Build</span>?
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Join the most innovative minds at SSJCOE. <br />
          Register now and compete for <span className="text-white font-bold">₹50,000</span> in prizes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-orbitron font-bold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 clip-path-polygon"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
            >
              <Zap size={20} fill="currentColor" /> REGISTER NOW
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-orbitron font-bold uppercase tracking-wider hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </div>
  </section>
);

export default CTASection;
