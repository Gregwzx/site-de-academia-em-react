import { useEffect } from "react";

const MouseTrail = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      length: number;
    };

    const particles: Particle[] = [];
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(26,115,255,0.8)";

      particles.forEach((p, i) => {
        ctx.strokeStyle = `rgba(26,115,255,${p.alpha})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * p.length, p.y - p.vy * p.length);
        ctx.stroke();

        // pequenas faíscas
        for (let s = 0; s < 2; s++) {
          ctx.fillStyle = `rgba(26,115,255,${p.alpha})`;
          ctx.fillRect(
            p.x + (Math.random() - 0.5) * 8,
            p.y + (Math.random() - 0.5) * 8,
            2,
            2
          );
        }

        // atualização da partícula
        p.alpha -= 0.02;
        p.x += p.vx;
        p.y += p.vy;

        if (p.alpha <= 0) particles.splice(i, 1);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        alpha: 1,
        length: Math.random() * 30 + 20,
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default MouseTrail;
