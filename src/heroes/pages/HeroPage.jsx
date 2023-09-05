import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  const { id, superhero, alter_ego, characters, first_appearance, publisher } = hero;

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className="col-md-4">
        <img
          className='img-thumbnail'
          src={heroImageUrl}
          alt={`Imagen ${superhero}`}
        />
      </div>

      <div className="mt-2 p-3 mt-md-0 col-md-8">
        <h2>{superhero}</h2>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item fw-bold'>
            Alter ego:
            <span className='fw-normal'> {alter_ego}</span>
          </li>
          <li className='list-group-item fw-bold'>
            Publisher:
            <span className='fw-normal'> {publisher}</span>
          </li>
          <li className='list-group-item fw-bold'>
            First Appearance:
            <span className='fw-normal'> {first_appearance}</span>
          </li>
        </ul>

        <h5 className='mt-3 fw-bold'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-dark'
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}