import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ShopBanner = () => {
  return (
    <div className="d-flex justify-content-center text-20px padding-top-10px padding-bottom-10px padding-top-lg-15px padding-bottom-lg-15px bg-white">
      <span className="padding-right-15px">Lucky you, shipping is FREE.</span>
      <AnchorLink
        className="primary-link shop-link banner-link"
        to="/#shop"
        title="Shop now"
        stripHash
      />
    </div>
  )
}

export default ShopBanner
