import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Layers */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black" />
      <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.25]" />
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold font-space text-primary text-glow-cyan">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="inline-flex px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(190_100%_50%/0.5)] transition-all duration-300">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
