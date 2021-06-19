import React from "react"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <DefaultLayout>
      <SEO title="About" />
      <div className="container mx-auto pt-5">
        <div>about</div>
      </div>
    </DefaultLayout>
  )
}

export default AboutPage
