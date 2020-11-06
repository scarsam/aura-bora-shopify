import React from 'react'
import logo1 from '../images/partner-banner/logo-1.svg'
import logo2 from '../images/partner-banner/logo-2.svg'
import logo3 from '../images/partner-banner/logo-3.svg'

const PartnerBanner = () => {
  return (
    <section className="container padding-top-none partner-banner">
        <div className="partner-banner-background relative d-flex justify-content-center align-items-center ">
            <div className="d-flex">
                <a href="https://www.onepercentfortheplanet.org/" target="_blank" rel="noopener noreferrer">
                <img
                    className="margin-none padding-right-15px padding-left-15px padding-left-md-35px padding-right-md-35px"
                    src={logo1}
                    alt="One procent for the planet logo" />   
                </a>
                <a href="https://www.nongmoproject.org/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="margin-none padding-right-15px padding-left-15px padding-left-md-35px padding-right-md-35px"
                        src={logo2}
                        alt="Non gmo project logo" />   
                </a>
                <a href="https://whole30.com/" target="_blank" rel="noopener noreferrer">
                    <img 
                        className="margin-none padding-right-15px padding-left-15px padding-left-md-35px padding-right-md-35px"
                        src={logo3}
                        alt="Whole 30 logo" />   
                </a>
            </div>  
        </div>
    </section>
  )
}

export default PartnerBanner
