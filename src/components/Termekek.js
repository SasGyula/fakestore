import React, { useContext } from 'react'
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

function Termekek(props) {
    const {termekLista} = useContext(ApiContext)
  return (
    <div>
        <div className="row">
        {
            termekLista.map((elem,index)=>{
                return <Termek elem={elem} key={index}/>
            })
        }
        </div>
    </div>
  )
}

export default Termekek