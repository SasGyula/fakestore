import React, { useContext } from 'react'
import Tablazatsor from './Tablazatsor'
import { ApiContext } from '../contexts/ApiContext'

function Tablazat() {
    const { termekLista} = useContext(ApiContext)
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
                            return <Tablazatsor elem={elem} key={index} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tablazat