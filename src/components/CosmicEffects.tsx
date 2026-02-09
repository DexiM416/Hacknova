import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Floating Neon Orbs Component
const FloatingOrbs = () => {
    const orbs = [
        { size: 300, color: "rgba(6, 182, 212, 0.15)", duration: 20, delay: 0, x: "10%", y: "20%" },
        { size: 400, color: "rgba(236, 72, 153, 0.12)", duration: 25, delay: 2, x: "70%", y: "60%" },
        { size: 250, color: "rgba(139, 92, 246, 0.15)", duration: 18, delay: 4, x: "80%", y: "10%" },
        { size: 350, color: "rgba(34, 211, 238, 0.1)", duration: 22, delay: 1, x: "20%", y: "70%" },
        { size: 200, color: "rgba(251, 191, 36, 0.08)", duration: 16, delay: 3, x: "50%", y: "40%" },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-15">
            {orbs.map((orb, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        left: orb.x,
                        top: orb.y,
                    }}
                    animate={{
                        x: [0, 50, -30, 20, 0],
                        y: [0, -40, 30, -20, 0],
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Animated Scan Lines
const ScanLines = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Horizontal scan line */}
            <motion.div
                className="absolute left-0 right-0 h-[2px]"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), rgba(236, 72, 153, 0.6), transparent)",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
                }}
                animate={{
                    top: ["-10%", "110%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3,
                }}
            />
            {/* Vertical scan line */}
            <motion.div
                className="absolute top-0 bottom-0 w-[2px]"
                style={{
                    background: "linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.6), rgba(34, 211, 238, 0.6), transparent)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)",
                }}
                animate={{
                    left: ["-5%", "105%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 5,
                    delay: 2,
                }}
            />
        </div>
    );
};

// Pulsing Vignette Effect
const PulsingVignette = () => {
    return (
        <motion.div
            className="fixed inset-0 pointer-events-none -z-5"
            style={{
                background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)",
            }}
            animate={{
                opacity: [0.7, 1, 0.7],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

// Floating Stars/Sparkles
const FloatingStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        interface Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            twinkleSpeed: number;
            color: string;
        }

        const stars: Star[] = [];
        const starCount = 80;
        const colors = ["#06b6d4", "#ec4899", "#8b5cf6", "#fbbf24", "#22d3ee", "#ffffff"];

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.opacity += star.twinkleSpeed;
                if (star.opacity >= 1 || star.opacity <= 0.1) {
                    star.twinkleSpeed *= -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.opacity;
                ctx.fill();

                // Add glow effect
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    star.x,
                    star.y,
                    0,
                    star.x,
                    star.y,
                    star.size * 3
                );
                gradient.addColorStop(0, star.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.globalAlpha = star.opacity * 0.3;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-18"
            style={{ opacity: 0.7 }}
        />
    );
};

// Circuit Pulse Effect - animated lines that pulse along circuit paths
const CircuitPulse = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-12 overflow-hidden">
            {/* Full screen circuit SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="glow-pulse" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    {/* Consistent Neon Gradients */}
                    <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                        <stop offset="50%" stopColor="#f0abfc" stopOpacity="1" />
                        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="circuitGradient3" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Top left flow */}
                <motion.path
                    d="M 50 150 L 250 150 L 250 350 L 550 350"
                    fill="none"
                    stroke="url(#circuitGradient1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-pulse)"
                    strokeDasharray="550"
                    animate={{ strokeDashoffset: [550, -550] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />

                {/* Bottom right flow */}
                <motion.path
                    d="M 1870 930 L 1600 930 L 1600 750 L 1300 750"
                    fill="none"
                    stroke="url(#circuitGradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-pulse)"
                    strokeDasharray="600"
                    animate={{ strokeDashoffset: [600, -600] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                />

                {/* Top Right vertical flow */}
                <motion.path
                    d="M 1750 50 L 1750 350 L 1550 350 L 1550 550"
                    fill="none"
                    stroke="url(#circuitGradient3)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-pulse)"
                    strokeDasharray="600"
                    animate={{ strokeDashoffset: [600, -600] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
                />

                {/* Bottom Left flow */}
                <motion.path
                    d="M 50 950 L 300 950 L 300 700 L 600 700"
                    fill="none"
                    stroke="url(#circuitGradient1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-pulse)"
                    strokeDasharray="600"
                    animate={{ strokeDashoffset: [600, -600] }}
                    transition={{ duration: 8.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                {/* Center Connectors */}
                <motion.path
                    d="M 800 540 L 1120 540"
                    fill="none"
                    stroke="url(#circuitGradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-pulse)"
                    strokeDasharray="320"
                    animate={{ strokeDashoffset: [320, -320] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 3 }}
                />

                {/* Node Intersections */}
                <motion.circle cx="250" cy="150" r="6" fill="#22d3ee" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="1600" cy="930" r="6" fill="#f0abfc" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="1750" cy="350" r="6" fill="#a78bfa" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />

            </svg>
        </div>
    );
};

// Main Cosmic Effects Component
const CosmicEffects = () => {
    return (
        <>
            <FloatingStars />
            <FloatingOrbs />
            <CircuitPulse />
            <PulsingVignette />
        </>
    );
};

export default CosmicEffects;
