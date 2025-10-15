import React, { useRef, useEffect } from 'react';

interface FlameParticle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

const FireflyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const particles = useRef<FlameParticle[]>([]);
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
      const particleCount = 5; // More particles for a smoother trail
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 18 + 12; 
        const life = Math.random() * 40 + 30; // Longer lifespan
        particles.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          radius,
          speedX: Math.random() * 2 - 1, 
          speedY: Math.random() * 0.5 + 0.2, // Slower upward movement
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
        lastMousePosition.current = { x: null, y: null };
      }, 100);
    };

    const animate = () => {
      animationFrameId.current = window.requestAnimationFrame(animate);
      
      const { x, y } = lastMousePosition.current;
      if (x !== null && y !== null) {
        createParticles(x, y);
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      ctx.globalCompositeOperation = 'lighter';

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life--;

        if (p.life <= 0 || p.radius <= 0.2) {
          particles.current.splice(i, 1);
          continue;
        }

        p.x += p.speedX;
        p.y -= p.speedY; // Move upwards slowly
        p.radius *= 0.98; // Shrink slower for a longer tail

        const opacity = (p.life / p.maxLife) * 0.8;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(255, 255, 180, ${opacity})`);      // Hot center (bright yellow-white)
        gradient.addColorStop(0.4, `rgba(255, 160, 0, ${opacity * 0.7})`); // Middle (soft orange)
        gradient.addColorStop(1, `rgba(255, 60, 0, 0)`);                   // Edge (deep transparent red)
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
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