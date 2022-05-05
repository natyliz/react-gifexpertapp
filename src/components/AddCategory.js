import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, SetInputValue] = useState('');
    const handleInputChange = (e) => {
       
        SetInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        if(inputValue.trim().length>2){
            setCategories( cats =>[inputValue, ...cats]);
            SetInputValue('');

        }

        
    

    }

    // nota se hace onsubmit para que no se me actualize la pagina cada vex que doy enter
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange = {handleInputChange}
        />
    </form>

    
  )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
} //cuando es obligatorio usar los protypes y si no se envia en el componente padre envie un error en consola indicando que es obligacion

