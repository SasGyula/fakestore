import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Kosar from '../components/Kosar'
import Termekek from '../components/Termekek'

function Public() {
    const {LISTA} = useContext(ApiContext)
  return (
    <div>
        <main className='row'>
          <aside className='col-lg-3'>
            <h3>Kosár</h3>
            <Kosar />
          </aside>
          <article className='col-lg-9'>
            <h3>Termékek</h3>
              <Termekek lista={LISTA} />
          </article>
      </main>
    </div>
  )
}

export default Public