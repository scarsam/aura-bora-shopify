import React, { useEffect } from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import Banner from 'components/ShopBanner'

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab)
    document.body.setAttribute('ontouchstart', '')
    return () => {
      window.removeEventListener('keydown', handleFirstTab)
    }
  })

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
      window.removeEventListener('keydown', handleFirstTab)
    }
  }
  return (
    <>
      <Banner />
      <Layout>
        <SEO title="Home" />
        <Hero>
          <div className="text-center padding-top-10px padding-top-md-none margin-bottom-5px margin-bottom-md-55px">
            <p className="margin-none body-2">
              Aura Bora is a sparkling water{' '}
              <span className="d-lg-block">
                made from herbs, fruits, and flowers for{' '}
              </span>
              earthly tastes and heavenly feelings.
            </p>
          </div>
        </Hero>
        <ValueProps />
        <ProductGrid />
      </Layout>
    </>
  )
}

export default IndexPage
