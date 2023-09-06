import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const charactersWithoutAlterEgo = ![characters].includes(alter_ego);

  return (
    <div className="col-md animate__animated animate__zoomInUp">
      <div className="card">
        <div className="row no-gutters">
          <div className="col col-md-4">
            <img className="card-img-top" src={heroImageUrl} alt={`Imagen de ${superhero}`} />
          </div>

          <div className="col col-md-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>
              {charactersWithoutAlterEgo && <p>{characters}</p>}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link
                to={`/hero/${id}`}
              >
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
