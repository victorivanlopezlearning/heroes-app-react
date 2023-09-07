import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid container">
        <Link
          className="navbar-brand"
          to="/"
        >
          Asociaciones
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">

            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/search"
            >
              Buscar
            </NavLink>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <span
            className='text-primary me-3'
          >
            {user?.name}
          </span>
          <button
            className='btn btn-outline-light'
            onClick={onLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  )
}