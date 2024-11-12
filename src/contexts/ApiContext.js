import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("")
export const ApiProvider = ({ children }) => {
    const [termekLista, setTermekLista] = useState([])
    const [katLista, setKatLista] = useState([])
    //axiosszal aszinkron módon GET kérést indítunk 

    const getAdat = async (vegpont, callbackFv) => {
        try {
            const response = await myAxios.get(vegpont);
            console.log("adat:", response.data);
            callbackFv(response.data)
        } catch (err) {
            console.log("Hiba történt az adat elküldésekor.")
        }
    }
    const postAdat = async (vegpont) => {
        try {
            const response = await myAxios.post(vegpont);
            console.log("adat:", response.data);
        } catch (err) {
            console.log("Hiba történt az adat elküldésekor.")
        }
    }
    const deleteAdat = async (vegpont, id) => {
        try {
            const response = await myAxios.delete(vegpont+ "/"+ id);
            console.log(response.data)
        } catch (err) {
            console.log("Hiba történt az adat törlésekor.")
        }
    }
    //useEffect hook segitségével
    useEffect(()=>{
        {getAdat("/products", setTermekLista)};
        {getAdat("/products/categories", setKatLista)};
        },[])
    return <ApiContext.Provider value={{termekLista, katLista, postAdat, deleteAdat}}>
        {children}
    </ApiContext.Provider>;

};