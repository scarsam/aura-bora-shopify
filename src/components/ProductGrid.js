import React, { useState } from 'react'
import Product from './Product'
import { graphql, useStaticQuery } from 'gatsby'
import ShopImage from '../images/header-shop.svg'

export const ProductGrid = () => {
  const [showInfoPane, setShowInfoPane] = useState(null)
  const data = useProducts()
  const { products } = data[0].node || []
  const availableItems = products.filter(item => item.availableForSale)

  return (
    <section>
      <div className="container padding-top-30px" id="shop">
        <div className="padding-bottom-50px padding-bottom-lg-45px text-center">
          <img className="margin-none" src={ShopImage} alt="" />
        </div>

        <div className="row">
          {availableItems &&
            availableItems.map((item, index) => (
              <Product
                key={index}
                id={item.variants[0].shopifyId}
                title={item.title}
                description={item.descriptionHtml}
                price={item.variants[0].price}
                image={item.variants[0].image.localFile.name}
                isInStock={item.availableForSale}
                showInfoPane={
                  showInfoPane === item.variants[0].shopifyId ? true : false
                }
                setShowInfoPane={setShowInfoPane}
                name={item.handle}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export const useProducts = () => {
  const { data } = useStaticQuery(
    graphql`
      {
        data: allShopifyCollection(
          filter: { title: { eq: "Shop" } }
          limit: 1
        ) {
          edges {
            node {
              title
              products {
                title
                description
                descriptionHtml
                availableForSale
                handle
                variants {
                  price
                  shopifyId
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    localFile {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data.edges
}
