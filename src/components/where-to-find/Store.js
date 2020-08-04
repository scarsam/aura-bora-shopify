import React from 'react'

const Store = ({ name, address }) => {
  return (
    <>
      <strong className="body-4 margin-bottom-5px">{name}</strong>
      <address className="font-style-normal body-4">{address}</address>
    </>
  )
}

export default Store
