import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">
        <div className="admin-logo">
          IAR ADMIN
        </div>

        <nav className="admin-nav">
          <NavLink to="/painel">Dashboard</NavLink>
          <NavLink to="/painel/eventos">Eventos</NavLink>
          <NavLink to="/painel/ministracoes">Ministrações</NavLink>
          <NavLink to="/painel/usuarios">Usuários</NavLink>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;