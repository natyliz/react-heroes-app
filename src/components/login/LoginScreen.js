import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  const handleLogin = () => {
   const action = {
        type: types.login,
        payload:{ name : 'Nathaly'}
          
        }
      dispatch(action);
      const lastPath = localStorage.getItem('lastPath') || '/marvel'; // esta linea sirve para cuando se cierra sesion y se vuelve acceder ingrese directamente en la ultima ruta donde estaba

      // navigate( '/marvel', {
      //   replace: true
      // });

      navigate( lastPath, {
        replace: true
      });

  };

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr/>
        <button 
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>
    </div>
  )
}
