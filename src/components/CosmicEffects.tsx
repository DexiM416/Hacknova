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
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                {/* Top left area circuits */}
                <motion.path
                    d="M 0 100 L 200 100 L 200 300 L 400 300 L 400 200 L 600 200"
                    fill="none"
                    stroke="url(#circuitGradient1)"
                    strokeWidth="1.5"
                    strokeDasharray="400"
                    animate={{
                        strokeDashoffset: [400, 0, -400],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.path
                    d="M 100 0 L 100 200 L 300 200 L 300 400 L 500 400"
                    fill="none"
                    stroke="url(#circuitGradient2)"
                    strokeWidth="1.5"
                    strokeDasharray="500"
                    animate={{
                        strokeDashoffset: [500, 0, -500],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                    }}
                />

                {/* Top right area circuits */}
                <motion.path
                    d="M 1920 150 L 1700 150 L 1700 350 L 1500 350 L 1500 250 L 1300 250"
                    fill="none"
                    stroke="url(#circuitGradient3)"
                    strokeWidth="1.5"
                    strokeDasharray="450"
                    animate={{
                        strokeDashoffset: [450, 0, -450],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                    }}
                />
                <motion.path
                    d="M 1800 0 L 1800 250 L 1600 250 L 1600 450 L 1400 450"
                    fill="none"
                    stroke="url(#circuitGradient4)"
                    strokeWidth="1.5"
                    strokeDasharray="500"
                    animate={{
                        strokeDashoffset: [500, 0, -500],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                    }}
                />

                {/* Center area circuits */}
                <motion.path
                    d="M 700 400 L 900 400 L 900 600 L 1100 600 L 1100 500 L 1200 500"
                    fill="none"
                    stroke="url(#circuitGradient1)"
                    strokeWidth="1.5"
                    strokeDasharray="400"
                    animate={{
                        strokeDashoffset: [400, 0, -400],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3,
                    }}
                />
                <motion.path
                    d="M 960 300 L 960 500 L 760 500 L 760 700 L 960 700 L 960 800"
                    fill="none"
                    stroke="url(#circuitGradient5)"
                    strokeWidth="1.5"
                    strokeDasharray="600"
                    animate={{
                        strokeDashoffset: [600, 0, -600],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5,
                    }}
                />

                {/* Bottom left area circuits */}
                <motion.path
                    d="M 0 900 L 250 900 L 250 750 L 450 750 L 450 850 L 650 850"
                    fill="none"
                    stroke="url(#circuitGradient2)"
                    strokeWidth="1.5"
                    strokeDasharray="450"
                    animate={{
                        strokeDashoffset: [450, 0, -450],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2.5,
                    }}
                />
                <motion.path
                    d="M 150 1080 L 150 850 L 350 850 L 350 650 L 550 650"
                    fill="none"
                    stroke="url(#circuitGradient3)"
                    strokeWidth="1.5"
                    strokeDasharray="500"
                    animate={{
                        strokeDashoffset: [500, 0, -500],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 4,
                    }}
                />

                {/* Bottom right area circuits */}
                <motion.path
                    d="M 1920 950 L 1650 950 L 1650 800 L 1450 800 L 1450 900 L 1250 900"
                    fill="none"
                    stroke="url(#circuitGradient4)"
                    strokeWidth="1.5"
                    strokeDasharray="500"
                    animate={{
                        strokeDashoffset: [500, 0, -500],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                    }}
                />
                <motion.path
                    d="M 1750 1080 L 1750 850 L 1550 850 L 1550 700 L 1350 700"
                    fill="none"
                    stroke="url(#circuitGradient5)"
                    strokeWidth="1.5"
                    strokeDasharray="450"
                    animate={{
                        strokeDashoffset: [450, 0, -450],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3.5,
                    }}
                />

                {/* Additional diagonal circuits for more coverage */}
                <motion.path
                    d="M 400 100 L 600 100 L 600 300 L 800 300 L 800 500"
                    fill="none"
                    stroke="url(#circuitGradient1)"
                    strokeWidth="1"
                    strokeDasharray="350"
                    animate={{
                        strokeDashoffset: [350, 0, -350],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5,
                    }}
                />
                <motion.path
                    d="M 1400 100 L 1200 100 L 1200 300 L 1000 300 L 1000 500"
                    fill="none"
                    stroke="url(#circuitGradient2)"
                    strokeWidth="1"
                    strokeDasharray="350"
                    animate={{
                        strokeDashoffset: [350, 0, -350],
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 6,
                    }}
                />

                {/* Node circles at intersections */}
                <motion.circle cx="200" cy="100" r="4" fill="#06b6d4"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle cx="400" cy="300" r="4" fill="#ec4899"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.circle cx="1700" cy="150" r="4" fill="#8b5cf6"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.circle cx="1500" cy="350" r="4" fill="#22d3ee"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
                />
                <motion.circle cx="960" cy="500" r="5" fill="#fbbf24"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                />
                <motion.circle cx="250" cy="900" r="4" fill="#06b6d4"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
                <motion.circle cx="1650" cy="950" r="4" fill="#ec4899"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: 2.5 }}
                />

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="circuitGradient3" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="circuitGradient4" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="circuitGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                </defs>
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
