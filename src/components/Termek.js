import React from 'react'

function Termek(props) {
    function kattintas(){
        
    }
  return (
    <div className="card col-md-4">
        <div className="card-header">{props.elem.title}</div>
            <div className="card-body">
            <img src={props.elem.image} className="img-thumbnail"/>
            <p>{props.elem.description}</p>
            </div>
            <div class="card-footer">{props.elem.price} ft</div>
            <button className="kosarGomb" onClick={kattintas}>Kosárba</button>
    </div>
  )
}

export default Termek