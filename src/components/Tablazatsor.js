import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Tablazatsor(props) {
    const { deleteAdat } = useContext(ApiContext)
    return (
            <tr key={props.index}>
                <th scope="row">{props.elem.id}</th>
                <td>{props.elem.title}</td>
                <td>{props.elem.description}</td>
                <td>{props.elem.category}</td>
                <td index={props.index}><span onClick={() => { deleteAdat("/products", props.elem.id) }}>🗑️</span></td>
                <td index={props.index}>✏️</td>
            </tr>
    )
}

export default Tablazatsor