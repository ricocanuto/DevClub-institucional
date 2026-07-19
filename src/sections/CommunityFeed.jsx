import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "MP",
    avatarVariant: "green",
    name: "Marina P.",
    role: "Dev Front-end · iFood",
    quote:
      "Larguei o trabalho no comércio e em 9 meses já estava em processo seletivo. Hoje trabalho remoto e ganho o dobro.",
  },
  {
    initials: "RT",
    avatarVariant: "orange",
    name: "Rafael T.",
    role: "Full Stack · Stone",
    quote:
      "O diferencial foi a prática desde o início. Cheguei nas entrevistas com projeto de verdade pra mostrar, não só teoria.",
  },
  {
    initials: "JS",
    avatarVariant: "cyan",
    name: "Juliana S.",
    role: "Tech Lead · Loft",
    quote:
      "Fiz o MBA depois da formação inicial e hoje lidero um squad de 6 pessoas. Nunca imaginei chegar tão rápido nesse nível.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CommunityFeed() {
  return (
    <section className="section" id="alunos">
      <div className="section-head">
        <span className="eyebrow">$ tail -f ./alunos/depoimentos.log</span>
        <h2>
          Quem <span className="accent-green">saiu do zero</span> e chegou lá.
        </h2>
      </div>

      <motion.div
        className="cards-grid cards-grid--alunos"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </motion.div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div variants={item} className="aluno-card hoverable">
      <div className="aluno-top">
        <div className={`avatar avatar--${testimonial.avatarVariant}`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="aluno-nome">{testimonial.name}</p>
          <p className="aluno-cargo">{testimonial.role}</p>
        </div>
      </div>
      <p className="aluno-quote">{testimonial.quote}</p>
    </motion.div>
  );
}