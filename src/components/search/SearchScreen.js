import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import {HeroCard} from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate(); // permite navegar
  const location = useLocation();// leer la localizacion es decir la ubicacion donde nos encontramos
  //console.log(location.search);
  const {q=''} = queryString.parse(location.search);
  const [formValues,handleInputChange] =useForm({
    searchText:q,
  });

  const {searchText} = formValues;
  //const heroesFileted = getHeroesByName(q);
  const heroesFileted = useMemo(() => getHeroesByName(q), [q])


  const handleSearch = (e) => {
    e.preventDefault();
    //console.log(searchText);
    navigate(`?q=${ searchText }`); //permite colocar en la ruta de la url lo que escribo en el input
    
  }
 
  
  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr/>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value ={searchText}
                onChange={handleInputChange}
                

              />
              <button 
                className="btn btn-outline-primary mt-1 btn-block"
                type="submit">
                  Buscar.....

              </button>

            </form>

          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr/>
            {
              (q ==='')
              ? <div className="alert alert-info">Buscar un héroe</div>
              : (heroesFileted.length===0) &&  <div className="alert alert-danger">No hay resultados: { q }</div>

            }
            {
              heroesFileted.map(hero =>(
                <HeroCard 
                  Key= {hero.id}
                  {...hero}
                  />

              ))
            }

          </div>
          

        </div>
    </>
  )
}
