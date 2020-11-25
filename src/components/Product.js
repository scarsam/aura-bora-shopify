import React, { useState } from 'react'
import Image from 'components/image'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers/numberHelpers'
import ProductOutOfStock from './ProductOutOfStock'
import ProductInfo from './ProductInfo'
import { useAddItemToCart } from 'store'
import addToCartAnimation from 'images/products/add-to-cart-slooth.svg'

const Product = ({
  name,
  price,
  description,
  image,
  id,
  title,
  isInStock,
  showInfoPane,
  setShowInfoPane,
}) => {
  const [buttonText, setButtonText] = useState('Add to bouquet')
  const [isAnimating, setAnimating] = useState(false)
  const [isAdding, setAdding] = useState(false)
  const colorRef = name.replace('-', '_')
  const addItemToCart = useAddItemToCart()

  const addToCart = async id => {
    setButtonText('Added')
    setAnimating(true)
    setAdding(true)
    await addItemToCart(id, 1)
    setAdding(false)
    setButtonText('Add to bouquet')

    // Time is matching with css in product.scss
    setTimeout(() => {
      setAnimating(false)
    }, 1500)
  }

  return (
    <div className="col-12 col-md-6 padding-bottom-20px">
      <div
        className={`product-wrapper relative font-space-mono add-to-cart-animation ${isAnimating &&
          'animated'}`}
      >
        <img className="slooth absolute" src={addToCartAnimation} />
        {isInStock ? (
          <>
            <div>
              {description && (
                <button
                  className="product-info-icon absolute z-index-2 primary-btn bg-white d-flex align-items-center justify-content-center padding-none"
                  onClick={() => setShowInfoPane(id)}
                >
                  <strong className="body-2 padding-bottom-3px line-height-1">
                    i
                  </strong>
                </button>
              )}
              <div className={`bg-${colorRef}`}>
                <Image alt="" filename={image} className="product-image" />
              </div>
            </div>

            <div className="text-center bg-white product-text c-black">
              <h2 className="m-0 padding-top-25px padding-top-lg-35px padding-bottom-5px padding-bottom-lg-10px h3 font-barlow">
                {title}
              </h2>
              <p className="m-0 padding-bottom-15px padding-bottom-lg-25px body-3">
                {title === '"Taste and See" Hat'
                  ? `${formatPrice(price)}`
                  : `12x for ${formatPrice(price)}`}
              </p>
              <button
                className="cta primary-btn bg-white padding-top-15px padding-bottom-15px padding-left-lg-30px padding-right-lg-30px margin-bottom-30px margin-bottom-lg-40px add-product-btn"
                onClick={() => addToCart(id)}
                disabled={isAdding}
              >
                {buttonText}
              </button>
            </div>
            <ProductInfo
              showInfoPane={showInfoPane}
              colorRef={colorRef}
              setShowInfoPane={setShowInfoPane}
              title={title}
              description={description}
            />
          </>
        ) : (
          <ProductOutOfStock productName={colorRef} title={title} />
        )}
      </div>
    </div>
  )
}

export default Product

Product.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  showInfoPane: PropTypes.bool.isRequired,
  isInStock: PropTypes.bool.isRequired,
  setShowInfoPane: PropTypes.func.isRequired,
}
