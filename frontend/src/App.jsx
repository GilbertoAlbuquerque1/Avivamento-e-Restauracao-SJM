import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SobreNos from './pages/SobreNos/SobreNos';
import NosEncontre from './pages/NosEncontre/NosEncontre';
import Eventos from './pages/Eventos/Eventos';
import Help from './pages/Help/Help';
import Colabore from './pages/Colabore/Colabore';
import AdminLayout from './pages/Admin/AdminLayout/AdminLayout';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import EventosAdmin from './pages/Admin/Eventos/EventosAdmin';
import MinistracoesAdmin from './pages/Admin/Ministracao/MinistracaoAdmin';
import UsuariosAdmin from './pages/Admin/Usuarios/UsuariosAdmin';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/encontre" element={<NosEncontre />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/help" element={<Help />} />
        <Route path="/colabore" element={<Colabore />} />
        <Route path="/painel" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="eventos" element={<EventosAdmin />} />
          <Route path="ministracoes" element={<MinistracoesAdmin />} />
          <Route path="usuarios" element={<UsuariosAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
