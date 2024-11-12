import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Urlap() {
    const { postAdat, katLista } = useContext(ApiContext)
    const [adat, setAdat] = useState({
        title: 'dsdsdsa',
        price: '1000',
        category: '...',
        description: '',
        image: '...',
    })
    function adatKuld(event) {
        event.preventDefault()
        console.log("Küldés", adat)
        postAdat("/products", adat)
    }
    function valtozasKezeles(event) {
        const sv = { ...adat }
        sv[event.target.id] = event.target.value
        setAdat({ ...sv })
    }

    return (
        <div>
            <form onSubmit={adatKuld}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Termék neve</label>
                    <input type="text" pattern='^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{2,}$' value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" aria-describedby="titleHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Termék ára</label>
                    <input type="number" min="1000" max="100000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price" aria-describedby="priceHelp" />
                </div>
                <div className="mb-3">
                    <div class="form-floating">
                        <textarea className="form-control" placeholder="Leírás" id="description" value={adat.description} onChange={valtozasKezeles}></textarea>
                        <label for="description">Leírás</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Kategória</label>
                    <select class="form-select" aria-label="Kategória" onChange={valtozasKezeles} id='category'>
                        {
                            katLista.map((elem, index) => {
                                return <option value={elem}>{elem}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Urlap