import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"

const IndexPage = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    (p) => p.node.frontmatter.date !== null
  )
  const postsList = (posts) =>
    posts.map((post) => (
      <div
        className="flex flex-row justify-between space-y-3"
        key={post.node.id}
      >
        <h4 className="text-lg text-gray-700">
          <Link className="hover:text-red-400 delay-100 font-medium uppercase" to={post.node.fields.slug}>
            {post.node.frontmatter.title}
          </Link>
          {/* <p>TOPICS: </p> */}
        </h4>
        <div className="content-center justify-between">
          {post.node.frontmatter.date}
        </div>
      </div>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div className="pt-8 text-gray-900" key={i}>
        <h4 className="font-medium text-lg pb-2">{year}</h4>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <div className="container mx-auto pt-5">
        <div>{postsListContainer}</div>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
