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
      <article className="container mx-auto max-w-screen-lg">
        <div className="flex justify-between pt-10">
          <h1 className="font-bold uppercase text-gray-600 text-4xl">
            {frontmatter.title}
          </h1>
          <span className="justify-between content-end">
            <small className="bg-gray-100 border-white p-2">
              {frontmatter.date}
            </small>
          </span>
        </div>
        <div className="divider" />
        <div className="text-2xl text-gray-700 space-y-4" dangerouslySetInnerHTML={{ __html: html }} />
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
        <Link to="/" className="home" className="home" title="Back Home">
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
