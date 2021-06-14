import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import config from "../../gatsby-config"

const Header = () => (
  <header className="">
    <div>
      <Link to="/">
        <h1 className="font-sans text-3xl text-gray-700 uppercase font-medium">
          {config.siteMetadata.author}
        </h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
