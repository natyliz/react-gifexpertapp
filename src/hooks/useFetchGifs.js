import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)  =>{
    const [state, setState]=useState({
        data: [],
        loading: true
    });

     useEffect( () => {
         
        getGifs( category)
        .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
    
                });
            
        });
     },[category]); // se usa el useEffect para que solamente una sola  vez se ejecute algo poniendo un arreglo como dependecnia []
     // es decir se ejecuta esa instruciion cuando el componente es renderizado por primera vez


    return state; //{ data: [],loading: true }

}