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
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-background/60 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
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
          <span className="font-space text-xl font-bold">
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
            >
              HACK
            </motion.span>
            <motion.span
              className="text-accent inline-block"
              whileHover={{ scale: 1.05 }}
            >
              NOVA
            </motion.span>
            <span className="text-foreground text-sm font-normal ml-1">2026</span>
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-muted/30 backdrop-blur-sm rounded-2xl p-1.5 border border-border/50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              >
                <motion.span
                  className={`relative z-10 ${isActive ? colorMap[item.color as keyof typeof colorMap] : "text-muted-foreground hover:text-foreground"}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl border border-primary/20 -z-0"
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
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={16} />
            Register Now
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
