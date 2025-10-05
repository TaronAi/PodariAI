import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

const PARTICLE_LIFESPAN = 70; // In frames, a bit over 1 second
const GRAVITY = 0.07;

const FireflyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const particles = useRef<Particle[]>([]);
  const lastMousePosition = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const mouseMoveTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticles = (x: number, y: number) => {
      const particleCount = 5; // A cluster of particles for a wider trail
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 3; // larger size for a fuller effect
        const life = Math.random() * PARTICLE_LIFESPAN + PARTICLE_LIFESPAN * 0.5; // longer, more varied lifespan
        particles.current.push({
          x,
          y,
          size,
          speedX: Math.random() * 4 - 2, // horizontal spread
          speedY: Math.random() * 3 - 2, // initial vertical push
          life,
          maxLife: life,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      if (mouseMoveTimeout.current) {
        window.clearTimeout(mouseMoveTimeout.current);
      }
      mouseMoveTimeout.current = window.setTimeout(() => {
        lastMousePosition.current = { x: null, y: null }; // Stop emitting when mouse is idle
      }, 100);
    };

    const animate = () => {
      animationFrameId.current = window.requestAnimationFrame(animate);
      
      const { x, y } = lastMousePosition.current;
      if (x !== null && y !== null) {
        createParticles(x, y);
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life--;

        if (p.life <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1);
          continue;
        }

        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += GRAVITY; // gentle gravity for a falling ember effect
        p.size *= 0.97; // Particles shrink to fade out

        const opacity = p.life / p.maxLife;
        const hue = 20 + 30 * (p.life / p.maxLife); // Color shifts from bright yellow-orange to deep red

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, ${opacity})`);
        gradient.addColorStop(0.4, `hsla(${hue - 10}, 100%, 55%, ${opacity * 0.8})`);
        gradient.addColorStop(1, `hsla(${hue - 20}, 90%, 40%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
      if (mouseMoveTimeout.current) {
        window.clearTimeout(mouseMoveTimeout.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
};

export default FireflyBackground;