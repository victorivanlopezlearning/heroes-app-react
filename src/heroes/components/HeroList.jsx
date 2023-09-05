import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);


  return (
    <ul className="list-group">
      {
        heroes.map((hero) => (
          <li
            className="list-group-item"
            key={hero.id}
          >
            {hero.superhero}
          </li>
        ))
      }
    </ul>
  )
}
