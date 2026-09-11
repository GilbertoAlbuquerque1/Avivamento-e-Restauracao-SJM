import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import NosEncontre from "./pages/NosEncontre";
import Eventos from "./pages/Eventos";
import Ajuda from "./pages/Ajuda";
import Colabore from "./pages/Colabore";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/nos-encontre" element={<NosEncontre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/colabore" element={<Colabore />} />
        {/* Redirecionamento padrão para rotas não encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
