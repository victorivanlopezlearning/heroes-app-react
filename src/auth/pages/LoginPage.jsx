import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  };

  return (
    <main className="container mt-5">
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