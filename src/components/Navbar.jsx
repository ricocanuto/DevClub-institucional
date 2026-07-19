import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const anchorLinks = [
  { label: "Formações", id: "formacoes" },
  { label: "Sobre", id: "sobre" },
  { label: "Alunos", id: "alunos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo hoverable" onClick={() => setIsOpen(false)}>
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

      {/* Botão hambúrguer — só aparece em telas pequenas via CSS */}
      <button
        className="navbar__toggle hoverable"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Painel do menu mobile */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            {anchorLinks.map((link) => (
              <li key={link.id}>
                <a href={`/#${link.id}`} onClick={(e) => handleAnchorClick(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
