import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

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
              Search
            </NavLink>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <span
            className='text-primary me-3'
          >
            Víctor Iván
          </span>
          <button
            className='btn btn-outline-light'
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}