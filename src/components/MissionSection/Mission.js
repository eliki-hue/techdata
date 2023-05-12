import React from 'react'
import logo from '../../images/techdata logo.png'
import './mission.css'

const Mission = () => {
  return (
    <div className='container mb-4'>
        <div className='row'>
            <div className='col mission-cards'>
              <div className="card-parent">
                <div className="card mb-4 mt-4 ">
                  <img className="img mb-4" variant="top" src={logo} />

                  <h3>{'Mission'}</h3>
                  <p>To provide quality uncompromised services and
solutions to our clients, keeping them connected
and protected.</p>
                </div>
              </div>

              <div className="card-parent">
                <div className="card mb-4 mt-4 ">
                  <img className="img mb-4" variant="top" src={logo} />

                  <h3>{'Vision'}</h3>
                  <p>To be the East Africa’s premier service and
solutions provider in ICT by building and
investing in quality services and systems to serve
our clients’ requirements.</p>
                </div>
              </div>
              <div className="card-parent">
                <div className="card mb-4 mt-4 ">
                  <img className="img mb-4" variant="top" src={logo} />

                  <h3>{'Values'}</h3>
                  <p>Built upon the founders’ personal guiding
principles, these central, underlying philosophies
guide every aspect in our duties to our internal
and external clients.</p>
                </div>
              </div>
    

            </div>
        </div>
    </div>
  )
}

export default Mission