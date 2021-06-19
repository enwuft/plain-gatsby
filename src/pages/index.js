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
      <div className="flex flex-row justify-between space-y-2" key={post.node.id}>
        <div className="text-base hover:text-red-300">
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </div>
        <div className="content-center justify-between">{post.node.frontmatter.date}</div>
      </div>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div className="pt-8 text-gray-600" key={i}>
        <h4 className="text-xl">{year}</h4>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <div className="container mx-auto">
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
