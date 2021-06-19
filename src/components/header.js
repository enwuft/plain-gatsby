import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import config from "../../gatsby-config"

const Header = () => (
  <header className="mt-6 flex flex-row justify-between items-center uppercase">
    <Link to="/">
      <h1 className="text-2xl text-gray-800 font-medium">
        {config.siteMetadata.author}
      </h1>
    </Link>
    <small className="text-lg text-gray-800 font-thin">
      อีหยังว่ะ
    </small>
    <nav>
      <Link to="/about">
        <span className="text-lg text-gray-800 font-medium">About</span>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

export default Header
