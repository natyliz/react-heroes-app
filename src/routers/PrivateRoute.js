import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext);
 const {pathname,search} = useLocation();// permite saber en que ruta me ecnuentro navegando
 localStorage.setItem('lastPath',pathname + search);// lo esta guardando en un localstorage para posterior cuando se cierra sesion y se vuleve acceder aubicarse en la misma ruta que se encontraba
   
  return user.logged
  ?children 
  : <Navigate to="/login"/>
}
