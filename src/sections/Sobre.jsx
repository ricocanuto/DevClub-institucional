import { motion } from "framer-motion";

const missionPoints = [
  { number: "01", text: "Aulas curtas e objetivas, sem enrolação" },
  { number: "02", text: "Projetos reais desde a primeira semana" },
  { number: "03", text: "Comunidade ativa de alunos e tutores" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="sobre-grid">
        <SobreTexto />
        <SobreTerminal />
      </div>
    </section>
  );
}

function SobreTexto() {
  return (
    <motion.div
      className="sobre-text"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <span className="eyebrow">$ cat ./sobre.md</span>
      <h2>
        Ensinamos <span className="accent-cyan">código</span>. Formamos{" "}
        <span className="accent-orange">carreira</span>.
      </h2>
      <p>
        O DevClub nasceu para fechar a distância entre "aprender a
        programar" e "conseguir a primeira vaga". Metodologia prática,
        direto ao ponto, sem enrolação — porque o mercado não espera.
      </p>

      <div className="sobre-list">
        {missionPoints.map((point) => (
          <div key={point.number} className="sobre-item">
            <span className="bracket-num">[{point.number}]</span>
            {point.text}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SobreTerminal() {
  return (
    <motion.div
      className="sobre-terminal"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.15 }}
    >
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">devclub.sh</span>
      </div>
      <div className="terminal-body">
        <pre>
          <span className="t-comment">// missão do DevClub</span>{"\n"}
          <span className="t-key">const</span> aluno = {"{"}
          {"\n"}  antes: <span className="t-str">"nunca programou"</span>,
          {"\n"}  depois: <span className="t-str">"dev contratado"</span>,
          {"\n"}  tempo: <span className="t-num">8</span> <span className="t-comment">// meses</span>
          {"\n"}
          {"}"};{"\n\n"}
          <span className="t-key">function</span> <span className="t-fn">transformar</span>(aluno) {"{"}
          {"\n"}  <span className="t-key">return</span> aluno.depois;
          {"\n"}
          {"}"}
        </pre>
      </div>
    </motion.div>
  );
}