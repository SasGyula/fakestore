import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Admin() {
    const { termekLista, deleteAdat } = useContext(ApiContext)
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Név</th>
                        <th scope="col">Leírás</th>
                        <th scope="col">Kategória</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        termekLista.map((elem, index) => {
                            return <tr key={index}>
                                    <th scope="row">{elem.id}</th>
                                    <td>{elem.title}</td>
                                    <td>{elem.description}</td>
                                    <td>{elem.category}</td>
                                    <td index={index}><span onClick={()=>{deleteAdat("/products", elem.id)}}>🗑️</span></td>
                                    <td index={index}>✏️</td>
                                   </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin