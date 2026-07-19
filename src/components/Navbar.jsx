import { Link, useLocation, useNavigate } from "react-router-dom";

const anchorLinks = [
  { label: "Formações", id: "formacoes" },
  { label: "Sobre", id: "sobre" },
  { label: "Alunos", id: "alunos" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // já está na home: rola direto, sem navegação
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // está em outra página: navega pra home com a âncora, o Home cuida do scroll
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo hoverable">
        <span className="logo__bracket">[</span>
        DevClub
        <span className="logo__bracket">]</span>
      </Link>

      <ul className="navbar__links">
        {anchorLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`/#${link.id}`}
              className="hoverable"
              onClick={(e) => handleAnchorClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/blog" className="hoverable">
            Blog
          </Link>
        </li>
      </ul>

      <Link to="/login" className="navbar__cta hoverable">
        Login
      </Link>
    </nav>
  );
}