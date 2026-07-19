import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommunityFeed from "../sections/CommunityFeed";
import Formacoes from "../sections/Formacoes";
import Hero from "../sections/Hero";
import Sobre from "../sections/Sobre";

export default function Home() {
  const { hash } = useLocation();

  // Se chegou na home vindo de outra página com uma âncora (ex: /blog -> "/#sobre"),
  // rola suavemente até a seção certa depois do primeiro render.
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Hero />
      <Formacoes />
      <Sobre />
      <CommunityFeed />
    </>
  );
}