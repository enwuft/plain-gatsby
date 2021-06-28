import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = pageContext
  return (
    <DefaultLayout>
      <SEO title={frontmatter.title} />
      <article className="container mx-auto">
        <div className="content-center">
          <div className="flex items-center justify-between mt-12 mb-6">
            <h1 className="font-sans uppercase text-gray-600 font-medium text-3xl underline">
              {frontmatter.title}
            </h1>
            <span className="mb-4 md:mb-0 sm:mb-0 bg-gray-100 p-2 text-gray-600">
              {frontmatter.date}
            </span>
          </div>
        </div>

        <div
          className="text-lg text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div className="page-navigation code">
        {prev && (
          <Link
            className="prev"
            to={prev.fields.slug}
            title={prev.frontmatter.title}
          >
            &lt;<span>{prev.fields.title}</span>&lt;
          </Link>
        )}
        <span> &middot; </span>
        <Link to="/" title="Back Home">
          {" "}
          Home{" "}
        </Link>
        <span> &middot; </span>
        {next && (
          <Link
            className="next"
            to={next.fields.slug}
            title={next.frontmatter.title}
          >
            &gt;&gt;
          </Link>
        )}
      </div>
    </DefaultLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
