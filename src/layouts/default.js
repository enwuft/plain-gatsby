/**
 * Default layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from ".././components/header"
import Footer from ".././components/footer"
import "../styles/styles.scss"
import "../styles/global.css"
import "../styles/normalize.css"

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <body className="container mx-auto">
        <Header />
        <div>{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </body>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
