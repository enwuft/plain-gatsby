import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <DefaultLayout>
      <SEO title="About" />
      <div className="container mx-auto pt-5">
        <p className="font-medium pb-6">DEVELOPMENT</p>
        <p>Currently development state</p>
        <Link to="https://ep65.vercel.app/">
            <a>https://ep65.vercel.app/</a>
         </Link>
        เเบ่งปันการ CAD
        <div className="pl-6">
          <Link to="https://vitecad.blogspot.com">
            <a>https://vitecad.blogspot.com/</a>
          </Link>
        </div>
        <span>
          All, The most of free time to learning coding, Electrical & hacking,
          interesting of Rust. This for a long time to be amateur programmer
          loves to code.
        </span>
      </div>
    </DefaultLayout>
  )
}

export default AboutPage
