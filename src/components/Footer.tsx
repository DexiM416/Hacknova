import { MapPin, Mail, Phone, Github, Youtube, Linkedin, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DiscordIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0858 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0858 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const socialLinks = [
  { icon: Youtube, href: "#", label: "Youtube", color: "hover:text-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]" },
  { icon: Instagram, href: "https://www.instagram.com/technova_club", label: "Instagram", color: "hover:text-secondary hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/technova24/", label: "LinkedIn", color: "hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-accent hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]" },
  { icon: DiscordIcon, href: "#", label: "Discord", color: "hover:text-[#5865F2] hover:shadow-[0_0_20px_rgba(88,101,242,0.5)]" },
];

const Footer = () => (
  <footer className="relative bg-card pt-20 pb-16 overflow-hidden">
    {/* Circuit Border Top */}
    {/* Circuit Border Top - Removed */}
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
            <h3 className="font-orbitron text-2xl font-bold tracking-wider">
              <span className="text-primary text-glow-cyan">HACK</span>
              <span className="text-accent text-glow-gold">NOVA</span>
            </h3>
          </motion.div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
            SSJCOE's premier hackathon, organized by <span className="text-primary font-medium">Technova</span>. Pan-India participation across 5 technology tracks.
          </p>
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-none border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:bg-white/5 hover:border-primary/50 relative group overflow-hidden`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <social.icon size={18} className="relative z-10" />
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
