import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);


  return (
    <ul className="list-group">
      {
        heroes.map((heroe) => (
          <li
            className="list-group-item"
            key={heroe.id}
          >
            {heroe.superhero}
          </li>
        ))
      }
    </ul>
  )
}
