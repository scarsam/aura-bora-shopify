import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-35px">
          <div className="row">
            <div className="col-sm-6 col-md-4 d-flex flex-column align-items-start body-2">
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/#shop"
                stripHash
              >
                Shop
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/about-us"
              >
                About us
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/where-to-find"
                stripHash
              >
                Where to find
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/mood"
              >
                Mood
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/contact"
              >
                Say hey
              </AnchorLink>
            </div>
            <div className="col-md-8 col-lg-7 offset-lg-1 padding-top-30px padding-top-md-none d-flex flex-column flex-sm-row">
              <div className="content flex-fill">
                <p className="margin-bottom-none padding-bottom-lg-15px d-block body-4 font-barlow padding-top-5px">
                  <strong>Let's be </strong>rose<strong>buds</strong>
                </p>
                <p className="margin-bottom-25px body-5">
                  We’ll send you
                  <span className="d-block">discounts or pictures</span>
                  of three-toed sloths.
                </p>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
