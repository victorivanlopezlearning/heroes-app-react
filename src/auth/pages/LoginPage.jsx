import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    login('Víctor Iván López');

    navigate('/', {
      replace: true
    });
  };

  return (
    <main className="container d-flex flex-column align-items-center mt-5">
      <h1>Inicia sesión en tu cuenta</h1>

      <button
        className="btn btn-dark mt-2"
        onClick={onLogin}
      >
        Iniciar Sesión
      </button>
    </main>
  )
}