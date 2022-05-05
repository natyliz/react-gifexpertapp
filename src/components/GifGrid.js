//import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrid( {category}) {
    //const [count, setCount] =useState(0);
    // const [images, setImages]=useState([]);
    const {data:images,loading} = useFetchGifs(category);
    // useEffect( () => {
    //     getGifs( category)
    //     .then(setImages);
    // },[category]); // se usa el useEffect para que solamente una sola  vez se ejecute algo poniendo un arreglo como dependecnia []
    // // es decir se ejecuta esa instruciion cuando el componente es renderizado por primera vez
    
  return (
    <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
       
        <div className="card-grid">
        
            {
                images.map( img => (
                    <GifGridItem 
                    key={img.id}
                    {...img}
                    />
                ))
                
            }
        
        </div>
      
    </>

  )
}
