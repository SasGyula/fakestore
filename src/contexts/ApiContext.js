import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("")
export const ApiProvider = ({ children }) => {
    const [termekLista, setTermekLista] = useState([])
    //axiosszal aszinkron módon GET kérést indítunk 

    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont);
            console.log("adat:", response.data);
            setTermekLista(response.data)
        } catch (err) {
            console.log("Hiba történt az adat elküldésekor.")
        }
    }
   
    //useEffect hook segitségével
    useEffect(()=>
    {getAdat("/products")},
    [])
    return <ApiContext.Provider value={{termekLista}}>
        {children}
    </ApiContext.Provider>;

};