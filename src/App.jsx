import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CursorFollower from "./components/CursorFollower";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixBackground";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";

// Reseta o scroll para o topo a cada troca de rota — mas não interfere
// quando a navegação tem uma âncora (#formacoes, #sobre...), pois nesse
// caso é o Home.jsx que cuida do scroll suave até a seção.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <MatrixBackground />
      <div className="grid-bg" />
      <CursorFollower />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;