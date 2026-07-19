export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <span className="logo__bracket">[</span>
        DevClub
        <span className="logo__bracket">]</span>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
    </footer>
  );
}