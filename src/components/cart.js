import React, { useState, useEffect, useRef } from 'react'
import { formatPrice, cartItemsCount } from '../helpers/numberHelpers'
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
  useIsAddingCartItem,
} from 'store'

const Cart = () => {
  const [showMenu, setShowMenu] = useState(false)
  const cartMenu = useRef()
  const items = useCartItems()
  const checkout = useCheckout()
  const addItemToCart = useAddItemToCart()
  const removeFromCart = useRemoveItemFromCart()
  const isAdding = useIsAddingCartItem()
  const { total } = useCartTotals()

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    if (showMenu) {
      document.getElementById('menu-btn').checked = false
      document.querySelector('main').classList.add('cart-overlay')
      document.querySelector('header').classList.add('cart-open')
      document.querySelector('html').classList.add('overflow-hidden')
    } else {
      document.querySelector('main').classList.remove('cart-overlay')
      document.querySelector('header').classList.remove('cart-open')
      document.querySelector('html').classList.remove('overflow-hidden')
    }
    return () => {
      document.removeEventListener('mousedown', handleClick, false)
    }
  }, [showMenu])

  const handleClick = e => {
    if (cartMenu.current && !cartMenu.current.contains(e.target)) {
      setShowMenu(false)
    }
  }

  const handleProductQuantity = (itemQuantity, variantId, productId) => {
    if (!isAdding) {
      if (itemQuantity === 1 || (!itemQuantity && !variantId)) {
        removeFromCart(productId)
      } else if (itemQuantity > 1) {
        addItemToCart(variantId, -1)
      }
    }
  }

  return (
    <div className="cart relative" ref={cartMenu}>
      <button
        className="cart-icon-wrapper padding-none z-index-4"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          width={48}
          height={64}
          xmlns="http://www.w3.org/2000/svg"
          className={`cart-icon ${showMenu ? 'cart-icon-transform' : ''}`}
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M4.416 23.852c-2.152-9.458-2.152-15.5 0-18.125 3.228-3.938 14.168 6.561 14.168 7.56 0 1 7.091-13.846 11.626-12.081 4.536 1.765 1.86 14.62 1.86 15.517 0 .897 10.824-13.39 14.59-8.828 2.512 3.04.183 8.078-6.985 15.112l-35.26.845z"
              fill="#F5ACB9"
            />
            <path
              d="M2.296 22.792c-2.152-9.458-2.152-15.5 0-18.125 3.228-3.938 14.168 6.561 14.168 7.56 0 1 7.091-13.846 11.626-12.081 4.536 1.765 1.86 14.62 1.86 15.517 0 .897 10.824-13.39 14.59-8.828 2.512 3.04.183 8.078-6.985 15.112l-35.26.845z"
              fill="#ECC7CD"
            />
            <path
              d="M42.668 25.808c-.822-1.17-10.131-1.382-19.288-1.211-9.35.175-18.953.797-19.904 1.986-1.89 2.367-.398 12.694 1.078 21.524.443 2.65.757 4.884 1.02 6.761.608 4.333.87 6.717 1.997 7.827 1.63 1.606 26.363.63 29.609-.138.484-.115.874-.547 1.226-1.133.483-.802.872-1.906 1.19-3.152.988-3.857 1.282-9.048 1.282-11.234 0-1.234.39-3.855.844-6.875.847-5.638 2.037-12.801.946-14.355z"
              stroke="#000"
              strokeWidth="1.06"
              fill="#000"
            />
            <path
              d="M40.548 22.628c-.822-1.17-10.131-1.382-19.288-1.211-9.35.175-18.953.797-19.904 1.986-1.89 2.367-.398 12.694 1.078 21.524.443 2.65.757 4.884 1.02 6.761.608 4.333.87 6.717 1.997 7.827 1.63 1.606 26.363.63 29.609-.138.484-.115.874-.547 1.226-1.133.483-.802.872-1.906 1.19-3.152.988-3.857 1.282-9.048 1.282-11.234 0-1.234.39-3.855.844-6.875.847-5.638 2.037-12.801.946-14.355z"
              stroke="#000"
              strokeWidth="1.06"
              fill="#FFF"
            />
          </g>
        </svg>
        <strong
          className={`cart-quantity m-0 p-0 font-barlow
            ${showMenu ? 'cart-quantity-transform' : ''}
            `}
        >
          {items && items.length ? cartItemsCount(items) : 0}
        </strong>
      </button>
      {showMenu && (
        <div
          className={`cart-menu bg-lightYellow z-index-3 margin-bottom-lg-50px font-barlow ${
            items && items.length ? 'cart-menu-items' : 'cart-menu-empty'
          }`}
        >
          <div className="cart-item-container">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setShowMenu(false)}
              onKeyDown={() => setShowMenu(false)}
              className="close-icon d-block margin-bottom-20px margin-bottom-lg-40px padding-top-60px"
            />
            {items?.length > 0 && (
              <h2 className="h2 margin-bottom-lg-10px font-barlow">
                Your order
              </h2>
            )}
            {items &&
              items.map((product, index) => (
                <div
                  key={index}
                  className="padding-top-20px padding-top-lg-40px body-4"
                >
                  <strong className="margin-none d-block padding-bottom-lg-15px font-barlow">
                    {product.title}
                  </strong>
                  <div className="d-flex justify-content-between align-items-center cart-item-detail padding-bottom-30px">
                    <p className="body-5 margin-bottom-none font-space-mono">
                      {product.title === '"Taste and See" Hat'
                        ? `${formatPrice(product.variant.price)}`
                        : `12X for ${formatPrice(product.variant.price)}`}
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        disabled={isAdding}
                        onClick={() =>
                          handleProductQuantity(
                            product.quantity,
                            product.variant.id,
                            product.id
                          )
                        }
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>-</span>
                      </button>
                      <span className="product-quantity font-medium">
                        {product.quantity}
                      </span>
                      <button
                        disabled={isAdding}
                        onClick={() => addItemToCart(product.variant.id, 1)}
                        className="primary-btn padding-none d-flex align-items-center justify-content-center bg-white adjust-quantity-btn"
                      >
                        <span>+</span>
                      </button>
                      <button
                        disabled={isAdding}
                        className="d-flex align-items-center item-remove-btn"
                        onClick={() =>
                          handleProductQuantity(null, null, product.id)
                        }
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {items && items.length ? (
              <>
                <div className="d-flex justify-content-between padding-top-20px padding-top-lg-45px body-4">
                  <p className="margin-none">Subtotal</p>
                  <p className="margin-none font-medium">{total}</p>
                </div>
                <button
                  onClick={checkout}
                  className="primary-btn checkout-btn cta font-space-mono bg-white margin-top-45px margin-bottom-10px"
                >
                  Check out
                </button>
              </>
            ) : (
              <p className="body-5 padding-top-25px font-space-mono">
                You have nothing in your{' '}
                <span className="d-md-block">bouquet yet. Keep picking!</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
