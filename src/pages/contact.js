import React from 'react'
import SEO from 'components/seo'
import Banner from 'components/ShopBanner'
import Layout from 'components/layout'
import Toast from 'components/Toast'
import { useQueryParam } from 'gatsby-query-params'
import heroImage from 'images/header-say-hey.svg'

const Contact = () => {
  const success = useQueryParam('success', false)

  return (
    <>
      <Banner />
      <Layout>
        <SEO title="Say hey" />
        {success === 'true' && <Toast text={'Message sent'} />}
        <section className="where-to-find padding-bottom-md-20px">
          <div className="container padding-top-20px">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <div className="text-center padding-bottom-lg-10px hero">
                  <img alt="How to contact us" src={heroImage} />
                </div>
                <form
                  className="contact"
                  action="/contact?success=true"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <p>
                    <input
                      className="d-block margin-top-10px body-5"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name.."
                    />
                  </p>
                  <p>
                    <input
                      className="d-block margin-top-10px body-5"
                      type="email"
                      name="email"
                      placeholder="Your email.."
                      required
                    />
                  </p>
                  <p>
                    <textarea
                      className="d-block margin-top-10px body-5"
                      name="message"
                      rows="10"
                      required
                      placeholder="Your message.."
                    ></textarea>
                  </p>
                  <p>
                    <button
                      className="primary-btn cta margin-top-5px"
                      type="submit"
                    >
                      Send
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
