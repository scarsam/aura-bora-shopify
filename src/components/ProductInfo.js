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
      {title}
    </h2>
    <div
      className="description body-3"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
)

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  showInfoPane: PropTypes.bool.isRequired,
  setShowInfoPane: PropTypes.func.isRequired,
}

export default ProductInfo
