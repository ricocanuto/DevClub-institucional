import { useEffect, useRef } from "react";

/**
 * Cursor follower global: ponto neon que segue o mouse (com lerp)
 * + halo de luz que revela o grid de fundo.
 * Monta uma vez no App.jsx, fora de qualquer seção.
 */
export default function CursorFollower() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const glow = useRef({ x: mouse.current.x, y: mouse.current.y });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHoverIn = () => dotRef.current?.classList.add("cursor-dot--active");
    const handleHoverOut = () => dotRef.current?.classList.remove("cursor-dot--active");

    document.addEventListener("mousemove", handleMove);
    document.querySelectorAll(".hoverable").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    let frameId;
    const animate = () => {
      glow.current.x += (mouse.current.x - glow.current.x) * 0.08;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = `${glow.current.x}px`;
        glowRef.current.style.top = `${glow.current.y}px`;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}