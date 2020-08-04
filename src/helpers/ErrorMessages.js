import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const CouldNotConfirmErrorMsg = (
  <div className="checkout-msg-max-width padding-top-40px">
    <h2 className="h1 font-barlow margin-bottom-35px">Hmmm...</h2>
    <p className="body-4">
      We were unable to confirm your purchase. If you didn’t get a confirmation
      email, your purchase probably didn’t go through.
    </p>
    <p className="body-4">
      To be sure, try checking your bank statement. Still having trouble? Reach
      out and we’ll make it right.
    </p>
    <button className="primary-btn take-me-home-btn margin-top-30px margin-top-lg-50px">
      <AnchorLink to="/contact" title="Say hey" />
    </button>
  </div>
)

export const CheckOutFailMsg = (
  <div className="checkout-msg-max-width padding-top-40px">
    <h2 className="h1 font-barlow margin-bottom-35px">Whoops!</h2>
    <p className="margin-none body-2">
      Something unexplainable happened when confirming your purchase. Try again
      and we'll make it right.
    </p>
    <button className="primary-btn take-me-home-btn margin-top-30px margin-top-lg-50px">
      <AnchorLink to="/#shop" title="The Collection" stripHash />
    </button>
  </div>
)

export const SuccessMsg = (
  <div className="checkout-msg-max-width padding-top-40px">
    <h2 className="h1 font-barlow margin-bottom-35px">Success!</h2>
    <p className="margin-none body-2">
      You’ll get an email confirmation soon. Enjoy your Aura Bora, and enjoy
      this haiku.
    </p>
    <div className="haiku padding-top-40px padding-top-lg-50px">
      <i>
        <p className="body-4 margin-none line-height-34px">
          What is this round fruit?
          <span className="d-block">It has a hard outer shell.</span>
          <span className="d-block">I’m told I do too.</span>
        </p>
      </i>
    </div>
    <button className="primary-btn take-me-home-btn margin-top-30px margin-top-lg-50px">
      <AnchorLink to="/" title="Take me home" />
    </button>
  </div>
)
