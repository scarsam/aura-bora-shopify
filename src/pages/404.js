import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TinyCloud from '../images/page-not-found/tiny-cloud.svg'
import SmallCloud from '../images/page-not-found/small-cloud.svg'
import MediumCloud from '../images/page-not-found/medium-cloud.svg'
import LargeCloud from '../images/page-not-found/large-cloud.svg'
import XlCloud from '../images/page-not-found/xl-cloud.svg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="not-found">
      <div className="container padding-top-10px">
        <div className="row">
          <div className="col-7 col-md-5">
            <img src={MediumCloud} alt="" />
          </div>
          <div className="col-3 col-md-4 small-cloud">
            <img src={SmallCloud} alt="" />
          </div>
        </div>
        <div className="row d-block d-md-none tiny-cloud">
          <div className="col-3 offset-9">
            <img src={TinyCloud} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 offset-1 offset-md-2">
            <p className="body-1 font-space-mono">This place is not real..</p>
            <button className="primary-btn body-3">
              <AnchorLink className="c-black" to="/" stripHash>
                Take me home{' '}
              </AnchorLink>
            </button>
          </div>
          <div className="col-8 offset-4 col-md-5 offset-md-0 padding-top-none padding-top-lg-60px xl-cloud">
            <img className="margin-none" src={XlCloud} alt="" />
          </div>
        </div>
        <div className="row margin-top-md-40px">
          <div className="col-8">
            <img src={LargeCloud} alt="" />
          </div>
        </div>
        <div className="row d-none d-md-block">
          <div className="col-3 offset-6">
            <img src={TinyCloud} alt="" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
