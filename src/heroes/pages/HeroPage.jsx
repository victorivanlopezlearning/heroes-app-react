import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  const { id, superhero, alter_ego, characters, first_appearance, publisher } = hero;

  const heroImageUrl = `/heroes-app-react/img/heroes/${id}.jpg`;

  return (
    <>
      <div className='row my-5'>
        <div className="col-8 col-md-4 mx-auto mx-md-0">
          <img
            className='img-thumbnail animate__animated animate__fadeInLeft'
            src={heroImageUrl}
            alt={`Imagen ${superhero}`}
          />
        </div>

        <div className="col-12 col-md-8 mt-2 p-3 mt-md-0">
          <h2>{superhero}</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item fw-bold'>
              Alter ego:
              <span className='fw-normal'> {alter_ego}</span>
            </li>
            <li className='list-group-item fw-bold'>
              Editorial:
              <span className='fw-normal'> {publisher}</span>
            </li>
            <li className='list-group-item fw-bold'>
              Primera aparición:
              <span className='fw-normal'> {first_appearance}</span>
            </li>
          </ul>

          <h5 className='mt-3 fw-bold'>Personajes</h5>
          <p>{characters}</p>

          <button
            className='btn btn-dark'
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  )
}