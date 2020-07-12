import React, { useState } from 'react'
import City from './City'
import Store from './Store'

const Modal = ({ state, cities, handleCloseModal, innerModalRef }) => {
  const [selectedCity, setSelectedCity] = useState(null)

  const renderSelectedCity = () => {
    const city = cities.find(({ city }) => city === selectedCity)
    return city?.stores.map(({ name, address }) => (
      <Store name={name} address={address} />
    ))
  }

  const backButton = () => {
    setSelectedCity(null)
  }

  const renderCities = () => {
    if (cities.length <= 0) {
      return <h3 className="text-center">No stores in this state</h3>
    }

    return cities.map(({ city }) => (
      <li onClick={() => setSelectedCity(city)}>
        <City key={city} city={city} />
      </li>
    ))
  }

  return (
    <div className="modal">
      <div className="modal-content height-100 relative">
        <div className="container padding-top-20px height-100">
          <div className="row padding-bottom-30px">
            <div
              ref={innerModalRef}
              className="col-12 col-md-10 offset-md-1 padding-bottom-60px"
            >
              <section className="padding-none d-flex justify-content-center align-items-center text-center modal-title z-index-1">
                <h2 className="margin-bottom-none text-30px absolute">
                  {selectedCity ? selectedCity : state}
                </h2>
                {selectedCity && <button onClick={backButton}>Back</button>}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleCloseModal}
                  onKeyDown={handleCloseModal}
                  className="close-icon d-block"
                />
              </section>
              <section className="bg-white padding-top-30px padding-bottom-25px">
                <ul className="text-center">
                  {selectedCity ? renderSelectedCity() : renderCities()}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
