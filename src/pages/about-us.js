import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Banner from 'components/ShopBanner'
import heroImage from 'images/about/about-header.svg'
import varietiesImage from 'images/about/varieties.svg'
import herbsImage from 'images/about/herbs.svg'
import tastesImage from 'images/about/tastes.svg'
import happyImage from 'images/about/carousel/carousel-header.svg'
import lizardImage from 'images/about/carousel/grazzlizard.svg'
import Carousel from '../components/Carousel'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const About = ({ data }) => {
  const testamonials = data?.allMarkdownRemark?.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  return (
    <>
      <Banner />
      <Layout>
        <SEO title="About us" />
        <section className="about-us">
          <div className="container padding-top-20px padding-bottom-10px padding-bottom-lg-30px">
            <div className="row">
              <div className="col-12">
                <div className="text-center hero">
                  <img className="margin-none" alt="About us" src={heroImage} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="selling-points">
          <div className="container padding-top-none">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-2 selling-point c-black padding-bottom-40px">
                <img
                  className="margin-bottom-5px"
                  src={varietiesImage}
                  alt="Two pink bushes"
                />
                <h2 className="h2 c-black margin-bottom-lg-15px font-barlow">
                  One-of-a-kind varieties
                </h2>
                <p className="margin-bottom-none">
                  Instead of artificial, uninspired fruit flavors, Aura Bora
                  uses plant-based ingredients to herb up (like spice up HAHA)
                  your sparkling water experience.
                </p>
              </div>
              <div className="col-12 col-md-6 offset-md-2 selling-point c-black padding-bottom-40px">
                <img
                  className="margin-bottom-5px"
                  src={herbsImage}
                  alt="Two green leefs"
                />
                <h2 className="h2 c-black margin-bottom-lg-15px font-barlow">
                  Real herbs
                </h2>
                <p className="margin-bottom-none">
                  It turns out, when you combine real herbal extracts and
                  sparkles, you get vivid flavors, floral aromas, and good
                  feelings.
                </p>
              </div>
              <div className="col-12 col-md-6 offset-md-2 selling-point c-black">
                <img
                  className="margin-bottom-5px"
                  src={tastesImage}
                  alt="Rainbow above clouds"
                />
                <h2 className="h2 c-black margin-bottom-lg-15px font-barlow">
                  Heavenly tastes
                </h2>
                <p className="margin-bottom-none">
                  Aura Bora’s flavor profile is unlike any other{' '}
                  <span className="no-wrap">— it’s bold, </span>
                  refreshing, and dare we say…{' '}
                  <span className="no-wrap">full-bodied</span> with a soft
                  floral finish?
                </p>
                <button className="primary-btn cta margin-top-60px">
                  <AnchorLink className="c-black" to="/#shop" stripHash>
                    Shop now
                  </AnchorLink>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="happy-thoughts bg-lightPink">
          <div className="container padding-top-40px padding-top-lg-40px padding-bottom-none">
            <div className="row padding-top-md-60px">
              <div className="col-8 offset-1 col-md-12 offset-md-0">
                <div className="hero text-left text-center-md">
                  <img
                    className="margin-none padding-right-15px"
                    alt="About us"
                    src={happyImage}
                  />
                  <img
                    className="margin-bottom-15px d-none d-md-inline"
                    alt="About us"
                    src={lizardImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <Carousel testamonials={testamonials} />
        </section>
      </Layout>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 12
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
    ) {
      edges {
        node {
          frontmatter {
            text
            author
            url
          }
        }
      }
    }
  }
`
