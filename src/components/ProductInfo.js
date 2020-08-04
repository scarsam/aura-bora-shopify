import React from 'react'
import PropTypes from 'prop-types'

const ProductInfo = ({
  colorRef,
  description,
  title,
  showInfoPane,
  setShowInfoPane,
}) => (
  <div
    className={`${
      showInfoPane ? 'product-info-show' : 'product-info-hide'
    } product-info font-barlow c-black bg-${colorRef}-i absolute z-index-3`}
  >
    <div
      className="info-close-icon absolute"
      role="button"
      tabIndex={0}
      onClick={() => setShowInfoPane(false)}
      onKeyDown={() => setShowInfoPane(false)}
    />

    <h2 className="margin-bottom-30px margin-bottom-lg-50px h2 font-barlow">
      {title &&
        title.split(' ').map((word, index) => <div key={index}>{word}</div>)}
    </h2>
    {title && title !== 'Variety pack' ? (
      <div className="padding-right-80px">
        <p className="margin-none padding-bottom-lg-20px body-4">
          <strong>Ingredients</strong>
        </p>
        {description &&
          description.split(',').map((item, index) => (
            <p
              className="margin-none padding-bottom-lg-10px body-3 font-space-mono"
              key={index}
            >
              {item}
            </p>
          ))}

        <div className="padding-top-30px font-space-mono">
          <p className="margin-none body-3 padding-bottom-lg-10px">
            0 calories
          </p>
          <p className="margin-none body-3 padding-bottom-lg-10px">0 sugar</p>
          <p className="margin-none body-3">0 sodium</p>
        </div>
      </div>
    ) : (
      <div className="text-22px line-height-40px">
        {description &&
          description.split(',').map((item, index) => (
            <p className="margin-none" key={index}>
              {item}
            </p>
          ))}
      </div>
    )}
  </div>
)

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  showInfoPane: PropTypes.bool.isRequired,
  setShowInfoPane: PropTypes.func.isRequired,
}

export default ProductInfo
