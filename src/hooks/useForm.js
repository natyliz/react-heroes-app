import React, { useState } from 'react';

export const useForm = (initialState ={}) => {
    const [values, setValues] =useState(initialState);
    const reset = () => {
        setValues(initialState);
    }
    const handleInputChange= ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
        //console.log(formState);
  
      } 

      return [values, handleInputChange, reset]; 
  
}