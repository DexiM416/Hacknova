import { motion } from "framer-motion";
import { Trophy, CalendarDays, Layers, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_100%_50%/0.08)_0%,_transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(45_100%_55%/0.05)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(320_100%_60%/0.05)_0%,_transparent_50%)]" />

    {/* Floating decorative elements */}
    <motion.div
      className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary"
      animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent"
      animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-secondary"
      animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
    />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles size={16} />
          Limited Spots Available
        </motion.div>

        <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Build Something{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Amazing?
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
          Join innovators from across India at HACKNOVA 2026. Register now and compete for <span className="text-accent font-bold">₹60,000</span> in prizes!
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          {[
            { icon: Trophy, value: "₹60,000", label: "Prize Pool", color: "accent" },
            { icon: CalendarDays, value: "12hrs", label: "Final Round", color: "primary" },
            { icon: Layers, value: "5", label: "Tech Tracks", color: "secondary" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center group cursor-default"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // @ts-ignore
              transitionDelay={`${i * 0.1}s`}
            >
              <div className={`w-12 h-12 rounded-xl bg-${s.color}/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-6 h-6 text-${s.color}`} />
              </div>
              <p className="font-space font-bold text-2xl text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Zap size={20} />
              Register Now <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact#faq"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-medium text-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Have Questions?
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
