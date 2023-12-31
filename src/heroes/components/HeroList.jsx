import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);


  return (
    <div className="row g-3 my-2">
      {
        heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
