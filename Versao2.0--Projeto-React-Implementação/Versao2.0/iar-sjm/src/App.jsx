import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SobreNos from './pages/SobreNos/SobreNos';
import NosEncontre from './pages/NosEncontre/NosEncontre';
import Eventos from './pages/Eventos/Eventos';
import Help from './pages/Help/Help';
import Colabore from './pages/Colabore/Colabore';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<SobreNos />} />
        <Route path="Encontre" element={<NosEncontre />} />
        <Route path="Eventos" element={<Eventos />} />
        <Route path="Help" element={<Help />} />
        <Route path="Colabore" element={<Colabore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
