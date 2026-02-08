import { MapPin, Mail, Phone, Github, Twitter, Linkedin, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]" },
  { icon: Instagram, href: "https://www.instagram.com/technova_club", label: "Instagram", color: "hover:text-secondary hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/technova24/", label: "LinkedIn", color: "hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-accent hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]" },
];

const Footer = () => (
  <footer className="relative bg-card border-t border-border/50 py-16 overflow-hidden">
    {/* Decorative gradient orbs */}
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <motion.div
            className="flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <img src="/logo.png" alt="Technova Logo" className="h-12 w-12 object-contain" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10" />
            </div>
            <h3 className="font-space text-2xl font-bold">
              <span className="text-primary text-glow-cyan">HACK</span>
              <span className="text-accent text-glow-gold">NOVA</span>
              <span className="text-foreground text-sm font-normal ml-1">2026</span>
            </h3>
          </motion.div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            SSJCOE's premier hackathon, organized by <span className="text-primary font-medium">Technova</span>. Pan-India participation across 5 technology tracks.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-5 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/register", label: "Register" },
              { to: "/tracks", label: "Technology Tracks" },
              { to: "/shortlisted", label: "Shortlisted Teams" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1"
              >
                {link.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-foreground mb-5 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Resources
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/contact#faq", label: "FAQ" },
              { href: "#", label: "Rules & Guidelines" },
              { href: "#", label: "Code of Conduct" },
              { href: "#", label: "Privacy Policy" },
            ].map((link, i) => (
              link.to ? (
                <Link
                  key={i}
                  to={link.to}
                  className="group text-sm text-muted-foreground hover:text-accent transition-all duration-300 flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  className="group text-sm text-muted-foreground hover:text-accent transition-all duration-300 flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-5 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-start gap-3 group"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <MapPin size={14} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shivajirao S. Jondhale College of Engineering, Dombivli (E)
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 group"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <Mail size={14} className="text-secondary" />
              </div>
              <a href="mailto:hacknova@ssjcoe.edu.in" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                hacknova@ssjcoe.edu.in
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 group"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone size={14} className="text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">+91 98765 43210</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 <span className="text-primary">Technova</span>, SSJCOE. All rights reserved.
        </p>
        <motion.p
          className="text-xs text-muted-foreground flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Sparkles size={12} className="text-accent" /> by <span className="text-accent font-medium ml-1">Technova Team</span>
        </motion.p>
      </div>
    </div>
  </footer>
);

export default Footer;
