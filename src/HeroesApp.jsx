import { Outlet } from "react-router-dom"

export const HeroesApp = () => {
  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center">Heroes App</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}