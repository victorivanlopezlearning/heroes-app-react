import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const heroImageUrl = `heroes-app-react/img/heroes/${id}.jpg`;
  const charactersWithoutAlterEgo = ![characters].includes(alter_ego);

  return (
    <div className="col-md-6 animate__animated animate__zoomInUp">
      <div className="card">
        <div className="row g-0">
          <div className="col col-md-4">
            <img className="img-thumbnail rounded-start" src={heroImageUrl} alt={`Imagen de ${superhero}`} />
          </div>

          <div className="col col-md-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>
              {charactersWithoutAlterEgo && <p className="card-text">{characters}</p>}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link
                to={`/hero/${id}`}
                className="link-dark fw-bold link-offset-2 link-underline-opacity-30 link-underline-opacity-100-hover"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
