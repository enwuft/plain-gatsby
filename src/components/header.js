import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import config from "../../gatsby-config"

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <h1 className="text-3xl text-gray-800 uppercase font-medium">
          {config.siteMetadata.author}
        </h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

export default Header
