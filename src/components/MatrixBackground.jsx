import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコ{}<>/;=+-DEVCLUB".split("");
const FONT_SIZE = 16;

/**
 * Fundo de "chuva de código" em canvas. Monta uma vez no App.jsx,
 * atrás de todo o conteúdo (z-index controlado via index.css).
 */
export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let columns, drops, intervalId;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(5,5,5,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const gradient = ctx.createLinearGradient(0, y * FONT_SIZE - 40, 0, y * FONT_SIZE);
        gradient.addColorStop(0, "rgba(10,255,157,0)");
        gradient.addColorStop(1, "rgba(10,255,157,0.6)");
        ctx.fillStyle = gradient;
        ctx.fillText(char, i * FONT_SIZE, y * FONT_SIZE);

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    setup();
    intervalId = setInterval(draw, 55);
    window.addEventListener("resize", setup);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-bg" />;
}