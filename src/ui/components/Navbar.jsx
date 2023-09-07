import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {

    logout();

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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <div className="d-flex align-items-center justify-content-between justify-content-md-start">
            <span
              className='text-primary me-md-3'
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
      </div>
    </nav>
  )
}