import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Kosar() {
    const { kosarLista } = useContext(KosarContext)
    return (
        <div><ul>
            {
                kosarLista.map((elem, index) => {
                    return   <li key={index}>{elem.title}{elem.price} $</li>
                })
            } </ul>
        </div>
    )
}

export default Kosar