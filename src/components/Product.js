import React, { useState } from 'react'
import Image from 'components/image'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers/numberHelpers'
import ProductOutOfStock from './ProductOutOfStock'
import ProductInfo from './ProductInfo'
import { useAddItemToCart } from 'store'

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
  const colorRef = name.replace('-', '_')
  const addItemToCart = useAddItemToCart()
  const [buttonText, setButtonText] = useState('Add to bouquet')

  const addToCart = async id => {
    console.log(buttonText)
    setButtonText('Added')
    await addItemToCart(id, 1)
    setButtonText('Add to bouquet')
  }

  return (
    <div className="col-12 col-md-6 padding-bottom-20px">
      <div className="product-wrapper relative font-space-mono">
        {isInStock ? (
          <>
            <div>
              {description && (
                <button
                  className="product-info-icon absolute z-index-2 primary-btn bg-white d-flex align-items-center justify-content-center padding-none"
                  onClick={() => setShowInfoPane(id)}
                >
                  <strong className="text-24px padding-bottom-3px line-height-1">
                    i
                  </strong>
                </button>
              )}
              <div className={`bg-${colorRef}`}>
                <Image alt="" filename={image} className="product-image" />
              </div>
            </div>

            <div className="text-center bg-white product-text c-black">
              <h2 className="m-0 padding-top-25px padding-top-lg-35px padding-bottom-5px padding-bottom-lg-10px h3">
                {title}
              </h2>
              <p className="m-0 padding-bottom-15px padding-bottom-lg-25px body-3">
                12x for {formatPrice(price)}
              </p>
              <button
                className="cta primary-btn bg-white padding-top-15px padding-bottom-15px padding-left-lg-30px padding-right-lg-30px margin-bottom-30px margin-bottom-lg-40px add-product-btn"
                onClick={() => addToCart(id)}
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
          <ProductOutOfStock colorRef={colorRef} title={title} />
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
