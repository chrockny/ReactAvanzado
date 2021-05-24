import {useState} from 'react'

export const useLocalStorage=(key,initialValue) =>{
    //Creamos el useState del stored value 
    //De una funcion que retorna el item y el initialValue si ocurro un error;
    const [storedValue,setValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            //Convirtiendo a objeto
            return item !=null ? JSON.parse(item) : initialValue
        }
        catch{
            return initialValue;
        }
    });
    //Guardando el valor en localStorage
    const setLocalStorage = value =>{
        try{
            //Local storage solo guarda cadenas de texto o strings a si que lo convertimos a ello para evitar errores;
            window.localStorage.setItem(key,JSON.stringify(value));
            setValue(value);
        }
        catch(e){
            console.error(e);
        }

    }

    return [storedValue,setLocalStorage];
}
