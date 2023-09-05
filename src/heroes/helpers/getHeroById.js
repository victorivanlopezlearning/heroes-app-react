import { heroes } from '../data/heroes';

export const getHeroById = (id) => heroes.find((hero => HeroPage.id === id));
