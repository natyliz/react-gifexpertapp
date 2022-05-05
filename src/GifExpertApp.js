import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];
    //nota se usa el useState xq puede cambiar el arreglo 
    //const [categories, setCategories] =useState(['One Punch','Samurai X', 'Dragon Ball']);
    const [categories, setCategories] =useState(['One Punch']);
    const handleAdd= () => {
        
        //set Categories se usa para cambiar las propiedades de una constante por eso no se debe usar .push xq cambian las constantes y una constante no debe de cambiar
        //setCategories([...categories,'HunterXHunter']); // se hace de esta manera cuando quiero agregar un valor al arreglo, se coloca los 3 puntos para que muestra el arreglo anterior y el balor actual que quiero agregar 
        setCategories( cats =>[...categories,'HunterXHunter']);// de otra manera

    }

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            {
                categories.map( category =>(
                    <GifGrid 
                        key= {category}
                        category={ category }
                    />
                ))
               
            }
        </ol>
    </>
  )
}




