import { createContext, useState } from "react";

export const KosarContext = createContext("")
export const KosarProvider = ({ children }) => {
    const [kosarLista, setKosarLista] = useState([])
    function kosarba(obj){
        const sLista = [...kosarLista]
        sLista.push(obj)
        setKosarLista([...sLista])
    }
    return <KosarContext.Provider value={{kosarLista, kosarba}}>
        {children}
    </KosarContext.Provider>;
}