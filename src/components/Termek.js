import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Termek(props) {
    const {kosarba} = useContext(KosarContext)
  return (
    <div className="card col-md-4">
        <div className="card-header">{props.elem.title}</div>
            <div className="card-body">
            <img src={props.elem.image} className="img-thumbnail"/>
            <p>{props.elem.description}</p>
            </div>
            <div class="card-footer">{props.elem.price} $</div>
            <button className="kosarGomb" onClick={()=>{ kosarba(props.elem)}}>Kosárba</button>
    </div>
  )
}

export default Termek