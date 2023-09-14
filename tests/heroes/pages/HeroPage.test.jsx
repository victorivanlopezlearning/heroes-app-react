import { fireEvent, render, screen } from '@testing-library/react';
import { HeroPage } from '../../../src/heroes/pages/HeroPage';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { MarvelPage } from '../../../src/heroes/pages';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Tests in <HeroPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('should show a hero', () => {

    const heroId = 'dc-batman';

    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
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

  test('should call navigate function if button clicked', () => {

    const heroId = 'dc-batman';

    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path="hero/:heroId" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith(-1);
  });
});