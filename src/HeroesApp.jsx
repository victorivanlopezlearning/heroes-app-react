import { Outlet } from "react-router-dom"
import { Navbar } from './ui';

export const HeroesApp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  )
}