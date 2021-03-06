import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useRef, useEffect } from 'react'
import Cart from '../cart'

const Header = () => {
  const navMenu = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false)
    }
  }, [])

  const handleOutsideClick = e => {
    if (navMenu.current && !navMenu.current.contains(e.target)) {
      document.getElementById('menu-btn').checked = false
    }
  }

  const handleLinkClick = () => {
    document.getElementById('menu-btn').checked = false
  }

  const handleKeyDown = e => {
    if (e.keyCode === 37) {
      document.getElementById('menu-btn').checked = false
    }
  }

  return (
    <>
      <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
      <header ref={navMenu}>
        <div className="container padding-top-none padding-bottom-none">
          <nav className="padding-top-50px">
            <label
              className="navicon d-block"
              htmlFor="menu-btn"
              ref={navMenu}
            />
            <ul className="menu margin-none padding-none padding-left-15px">
              <li
                className="margin-top-30px margin-bottom-20px margin-bottom-lg-30px"
                onClick={handleLinkClick}
                onKeyDown={handleKeyDown}
                role="presentation"
              >
                <AnchorLink
                  className="primary-link h1 shop-link"
                  to="/#shop"
                  title="Shop"
                  stripHash
                />
              </li>
              <li
                className="margin-top-20px margin-bottom-20px margin-bottom-lg-30px"
                onClick={handleLinkClick}
                onKeyDown={handleKeyDown}
                role="presentation"
              >
                <AnchorLink
                  className="primary-link h1"
                  to="/about-us"
                  title="About us"
                />
              </li>
              <li
                className="margin-top-20px margin-bottom-20px margin-bottom-lg-30px"
                onClick={handleLinkClick}
                onKeyDown={handleKeyDown}
                role="presentation"
              >
                <AnchorLink
                  className="primary-link h1"
                  to="/where-to-find#menu-btn"
                  title="Where to find"
                  stripHash
                />
              </li>
              <li
                className="margin-top-20px margin-bottom-20px margin-bottom-lg-30px"
                onClick={handleLinkClick}
                onKeyDown={handleKeyDown}
                role="presentation"
              >
                <AnchorLink
                  className="primary-link h1 shop-link"
                  to="/mood"
                  title="Mood"
                />
              </li>
              <li
                className="margin-top-20px padding-bottom-20px padding-bottom-md-none"
                onClick={handleLinkClick}
                onKeyDown={handleKeyDown}
                role="presentation"
              >
                <AnchorLink
                  className="primary-link h1 shop-link"
                  to="/contact"
                  title="Say hey"
                />
              </li>
            </ul>
          </nav>
          <Cart />
        </div>
      </header>
    </>
  )
}

export default Header
