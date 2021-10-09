import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <DefaultLayout>
      <SEO title="About" />
      <div className="container mx-auto pt-5">
        <p className="pb-6">just another Script kiddie blog.</p>
        <p className="font-medium pb-6">DEVELOPMENT</p>
        <div className="">
          <h2>
            Currently development state (A long time to active)
          </h2>
          <Link to="https://ep65.vercel.app/">
            <a>https://ep65.vercel.app/</a>
          </Link>
         <br />
          <Link to="https://vecskill-dev.vercel.app/">
            <a>https://vecskill-dev.vercel.app/</a>
          </Link>
        </div>
        <br />
        <h2>
          เเบ่งปันการ CAD
        </h2>
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
