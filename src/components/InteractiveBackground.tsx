import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load icons image
    const img = new Image();
    img.src = "/grid-icons.jpeg"; // User provided jpeg
    iconsRef.current = img;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 10000), 120);
    const connectionDistance = 150;
    const mouseDistance = 200;

    // Grid Icon Logic
    const gridCellSize = 60; // Size of grid cells
    const activeIcons: GridIcon[] = [];
    const maxActiveIcons = 5; // How many icons visible at once

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // Reduced speed slightly
        this.vy = (Math.random() - 0.5) * 0.8; // Reduced speed slightly
        this.size = Math.random() * 3 + 1; // Slightly larger for squares
        const colors = ["#06b6d4", "#22d3ee", "#0891b2", "#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 0.6;
          const directionY = forceDirectionY * force * 0.6;

          this.vx += directionX;
          this.vy += directionY;
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        // Square particles
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    class GridIcon {
      x: number;
      y: number;
      spriteX: number;
      spriteY: number;
      opacity: number;
      fadingIn: boolean;
      life: number;

      constructor() {
        // Snap to grid
        const col = Math.floor(Math.random() * (width / gridCellSize));
        const row = Math.floor(Math.random() * (height / gridCellSize));
        this.x = col * gridCellSize;
        this.y = row * gridCellSize;

        // Random sprite from 3x3 grid
        this.spriteX = Math.floor(Math.random() * 3);
        this.spriteY = Math.floor(Math.random() * 3);

        this.opacity = 0;
        this.fadingIn = true;
        this.life = Math.random() * 60 + 60; // Increased life (was 30+30)
      }

      update() {
        if (this.fadingIn) {
          this.opacity += 0.05; // Slower fade in (was 0.08)
          if (this.opacity >= 0.6) this.fadingIn = false; // Higher max opacity
        } else {
          this.life--;
          if (this.life <= 0) this.opacity -= 0.03; // Slower fade out (was 0.05)
        }
      }

      draw() {
        if (!ctx || !iconsRef.current || !iconsRef.current.complete) return;

        const spriteSize = iconsRef.current.width / 3; // Assuming 3x3 sprite sheet

        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        // Draw image keeping aspect ratio within the grid cell
        ctx.drawImage(
          iconsRef.current,
          this.spriteX * spriteSize,
          this.spriteY * spriteSize,
          spriteSize,
          spriteSize,
          this.x + 5, // Padding
          this.y + 5,
          gridCellSize - 10,
          gridCellSize - 10
        );
        ctx.restore();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Manage Grid Icons
      if (activeIcons.length < maxActiveIcons && Math.random() < 0.1) { // Increased spawn probability (was 0.02)
        activeIcons.push(new GridIcon());
      }

      for (let i = activeIcons.length - 1; i >= 0; i--) {
        const icon = activeIcons[i];
        icon.update();
        icon.draw();
        if (icon.opacity <= 0 && !icon.fadingIn) {
          activeIcons.splice(i, 1);
        }
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.8 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x + particle.size / 2, particle.y + particle.size / 2);
            ctx.lineTo(otherParticle.x + otherParticle.size / 2, otherParticle.y + otherParticle.size / 2);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none opacity-60"
    />
  );
};

export default InteractiveBackground;
