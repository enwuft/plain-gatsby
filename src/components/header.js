import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import config from "../../gatsby-config"

const Header = () => (
  <header className="mt-6 flex flex-row justify-between items-center uppercase">
    <Link to="/">
      <div className="text-sm lg:text-2xl text-gray-800 font-medium">
        {config.siteMetadata.author}
      </div>
    </Link>
    <small className="text-sm lg:text-2xl text-gray-800 font-thin">
      ซ้ายจัด ไม่ดัดจริต
    </small>
    <nav>
      <Link to="/about">
        <span className="text-sm lg:text-2xl text-gray-800 font-medium">About</span>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

export default Header
