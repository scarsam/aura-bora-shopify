import React from 'react'
import PropTypes from 'prop-types'
import smileIcon from 'images/smile-icon.svg'

// Desktop
const valuesOneDesktop = ['0 Sugar', '0 Calories', '0 Sodium']
const valuesTwoDesktop = ['Whole30', 'Non GMO', 'Vegan', 'Plant based']
const valuesThreeDesktop = ['No artificial flavors', '1% for the Planet']
// Mobile
const valuesOneMobile = ['0 Sugar', '0 Calories']
const valuesTwoMobile = ['0 Sodium', 'Whole30', 'Non GMO']
const valuesThreeMobile = ['Vegan', 'Plant based']
const valuesFourMobile = ['No artificial flavors', '1% for the Planet']

const ValueProp = ({ valueProp }) => (
  <div className="d-flex">
    <img
      className="value-props-icon"
      src={smileIcon}
      alt="Happy smiling face"
    />
    <p className="font-barlow margin-bottom-none body-4">{valueProp}</p>
  </div>
)

const ValueProps = () => {
  return (
    <section className="bg-lightYellow padding-top-30px padding-bottom-20px padding-top-md-none padding-bottom-md-40px">
      <div className="container padding-top-none padding-bottom-10px padding-top-md-none padding-bottom-md-30px">
        <div className="row d-none d-sm-flex">
          <div className="col-12 align-items-center padding-bottom-15px justify-content-center d-flex value-props-row">
            {valuesOneDesktop.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center padding-bottom-15px justify-content-center d-flex value-props-row">
            {valuesTwoDesktop.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center  justify-content-center d-flex value-props-row">
            {valuesThreeDesktop.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
        </div>
        <div className="row d-sm-none">
          <div className="col-12 align-items-center padding-bottom-5px padding-bottom-lg-15px justify-content-center d-flex value-props-row">
            {valuesOneMobile.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center padding-bottom-5px padding-bottom-lg-15px justify-content-center d-flex value-props-row">
            {valuesTwoMobile.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center padding-bottom-5px padding-bottom-lg-15px justify-content-center d-flex value-props-row">
            {valuesThreeMobile.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center padding-bottom-5px padding-bottom-lg-15px justify-content-center d-flex value-props-row">
            {valuesFourMobile.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

ValueProp.propTypes = {
  valueProp: PropTypes.string.isRequired,
}

export default ValueProps
