import { useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

export const SearchPage = () => {

  const { search, onInputChange, onResetForm } = useForm({
    search: ''
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const heroSearch = searchParams.get('q') || '';

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if ([search.trim()].includes('')) return;

    setSearchParams(`?q=${search}`);
    onResetForm();
  }

  return (
    <>
      <h1>Búsqueda</h1>

      <div className="row mt-4">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <form
            onSubmit={onSearchSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Nombre del heroe"
                autoComplete="off"
                className="form-control"
                value={search}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-dark">Buscar</button>
          </form>
        </div>

        <div className="col-12 col-md-8">
          <div className="alert alert-secondary" role="alert">
            Busca un heroe
          </div>

          <div className="alert alert-danger" role="alert">
            <span className="fw-bold">{heroSearch}</span> no encontrado. Favor de buscar otro heroe
          </div>

        </div>
      </div>
    </>
  )
}
