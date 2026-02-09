import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", color: "primary" },
  { label: "Register", href: "/register", color: "accent" },
  { label: "Tracks", href: "/tracks", color: "secondary" },
  { label: "Shortlisted", href: "/shortlisted", color: "primary" },
  { label: "Contact", href: "/contact", color: "accent" },
];

const colorMap = {
  primary: "text-primary",
  accent: "text-accent",
  secondary: "text-secondary",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        : "bg-background/40 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative mr-2"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src="/college-logo.png"
              alt="College Logo"
              className="h-14 w-14 object-contain"
            />
          </motion.div>
          <div className="h-8 w-[1px] bg-white/20 mx-1" />
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src="/logo.png"
              alt="Technova Logo"
              className="h-10 w-10 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl rounded-full -z-10 group-hover:opacity-100 opacity-50 transition-opacity" />
          </motion.div>
          <span className="font-orbitron text-xl font-bold tracking-wider">
            <motion.span
              className="text-primary inline-block text-glow-cyan"
              whileHover={{ scale: 1.05 }}
            >
              HACK
            </motion.span>
            <motion.span
              className="text-accent inline-block text-glow-gold"
              whileHover={{ scale: 1.05 }}
            >
              NOVA
            </motion.span>
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-none border-x border-primary/20 px-6 py-2 skew-x-[-15deg]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="relative px-4 py-1 text-sm font-orbitron font-medium tracking-wide transition-all duration-300 skew-x-[15deg]"
              >
                <motion.span
                  className={`relative z-10 ${isActive ? colorMap[item.color as keyof typeof colorMap] + " text-glow-" + (item.color === 'primary' ? 'cyan' : item.color === 'accent' ? 'gold' : 'magenta') : "text-muted-foreground hover:text-white"}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <motion.a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/50 text-primary font-orbitron font-bold text-sm uppercase tracking-wider hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={16} />
            Register
          </motion.a>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[72px] left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === item.href
                      ? `${colorMap[item.color as keyof typeof colorMap]} bg-gradient-to-r from-primary/10 via-accent/5 to-transparent border-l-2 border-primary`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                      }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${location.pathname === item.href ? 'bg-current' : 'bg-muted-foreground/30'}`} />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-medium text-center mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Sparkles size={16} />
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
