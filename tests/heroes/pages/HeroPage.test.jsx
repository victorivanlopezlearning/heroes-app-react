import { render, screen } from '@testing-library/react';
import { HeroPage } from '../../../src/heroes/pages/HeroPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../../../src/heroes/pages';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

describe('Tests in <HeroPage />', () => {

  // beforeEach(() => jest.clearAllMocks());

  test('should show a hero', () => {

    const heroId = 'dc-batman';

    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading.textContent).toBe('Batman');
  });

  test('should navigate to Marvel page if hero not found', () => {

    const heroId = 'dc-batman123';

    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading.textContent).toBe('Marvel Comics');
  });
});