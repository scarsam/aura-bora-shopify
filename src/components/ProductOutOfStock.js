import React from 'react'
import PropTypes from 'prop-types'
import CactusImage from '../images/out-of-stock/cactus-rose.svg'
import LavenderImage from '../images/out-of-stock/lavender-cucumber.svg'
import BasilImage from '../images/out-of-stock/basil-berry.svg'
import VarietyImage from '../images/out-of-stock/variety-pack.svg'
import LemongrassImage from '../images/out-of-stock/lemongrass-coconut.svg'
import PeppermintImage from '../images/out-of-stock/peppermint-watermelon.svg'

const ProductOutOfStock = ({ productName, title }) => (
  <div className={`bg-${productName}-i text-center out-of-stock c-black`}>
    <h2 className="padding-bottom-50px margin-none h2 font-barlow">
      {title} <span className="d-block">is out of stock</span>
    </h2>
    <div>
      <img
        src={OutOfStockImage(productName)}
        alt="out-of-stock-illustration"
        className="margin-none"
      />
    </div>
    <div className="body-2">
      <p className="margin-none">
        We´re harvesting more.
        <span className="d-block">Check back again soon.</span>
      </p>
    </div>
  </div>
)

ProductOutOfStock.propTypes = {
  productName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProductOutOfStock

const OutOfStockImage = productName => {
  if (productName === 'basil_berry') return BasilImage
  if (productName === 'cactus_rose') return CactusImage
  if (productName === 'lavender_cucumber') return LavenderImage
  if (productName === 'variety_pack') return VarietyImage
  if (productName === 'lemongrass_coconut') return LemongrassImage
  if (productName === 'peppermint_watermelon') return PeppermintImage

  return BasilImage
}
