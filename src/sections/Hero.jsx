import { motion } from "framer-motion";

const stats = [
  { num: "+2.400", label: "alunos formados" },
  { num: "94%", label: "empregabilidade" },
  { num: "120+", label: "empresas parceiras" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={item} className="badge">
          <span className="badge__dot" />
          SYSTEM.STATUS: ONLINE
        </motion.span>

        <motion.h1 variants={item} className="hero__title glitch" data-text="NÃO APENAS CODIFIQUE.">
          NÃO APENAS CODIFIQUE.
          <br />
          <span className="hero__title-highlight">COMANDE O SEU FUTURO.</span>
        </motion.h1>

        <motion.p variants={item} className="hero__subtitle">
          Formação prática, direto ao ponto, para quem quer sair do zero e
          entrar no mercado dev de verdade.
        </motion.p>

        <motion.div variants={item} className="stats-row">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} isLast={i === stats.length - 1} />
          ))}
        </motion.div>

        <motion.div variants={item} className="cta-row">
          <button className="cta-primary hoverable">
            [ INICIAR_TRAJETO_<span className="terminal-caret" /> ]
          </button>
          <button className="cta-secondary hoverable">Ver formações</button>
        </motion.div>
      </motion.div>

      <span className="scroll-hint">SCROLL ↓</span>
    </section>
  );
}

function StatItem({ stat, isLast }) {
  return (
    <>
      <div className="stat">
        <span className="stat__num">{stat.num}</span>
        <span className="stat__label">{stat.label}</span>
      </div>
      {!isLast && <div className="stat-divider" />}
    </>
  );
}