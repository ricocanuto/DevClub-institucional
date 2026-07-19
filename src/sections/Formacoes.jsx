import { motion } from "framer-motion";

const courses = [
  {
    tag: "MAIS PROCURADA",
    tagVariant: "green",
    price: "12x R$ 197",
    title: "Full Stack Pro",
    description:
      "React, Node.js, bancos de dados e deploy real. Do zero ao primeiro projeto entregue.",
    duration: "8 meses",
    meta: "+40 projetos",
  },
  {
    tag: "NOVA",
    tagVariant: "orange",
    price: "12x R$ 147",
    title: "Front-end Avançado",
    description:
      "Interfaces que impressionam: animação, performance e arquitetura de componentes.",
    duration: "5 meses",
    meta: "+25 projetos",
  },
  {
    tag: "MBA",
    tagVariant: "green",
    price: "12x R$ 247",
    title: "MBA em Tech Lead",
    description:
      "Para quem já programa e quer liderar squads e decisões técnicas de produto.",
    duration: "6 meses",
    meta: "+15 estudos de caso",
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

export default function Formacoes() {
  return (
    <section className="section" id="formacoes">
      <div className="section-head">
        <span className="eyebrow">$ ls ./formacoes</span>
        <h2>
          Trilhas que <span className="accent-green">viram</span> profissão.
        </h2>
      </div>

      <motion.div
        className="cards-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </motion.div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <motion.div variants={item} className="course-card hoverable">
      <div className="card-top">
        <span className={`card-tag ${course.tagVariant === "orange" ? "card-tag--orange" : ""}`}>
          {course.tag}
        </span>
        <span className="card-price">{course.price}</span>
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="card-meta">
        <span>{course.duration}</span>
        <span className="dot-sep" />
        <span>{course.meta}</span>
      </div>
      <div className="card-cta">
        Ver trilha <span className="arrow">→</span>
      </div>
    </motion.div>
  );
}