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
        className="justify-between content-center items-center space-y-3"
        key={post.node.id}
      >
        <div className="text-lg text-gray-800">
          <Link
            className="hover:text-red-400 delay-100 font-medium uppercase"
            to={post.node.fields.slug}
          >
            {post.node.frontmatter.title}
          </Link>
          {/* <p>TOPICS: </p> */}
          <div className="flex float-right">
            {post.node.frontmatter.date}
          </div>
        </div>
      </div>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div className="pt-8 text-gray-900" key={i}>
        <div className="font-medium text-lg pb-2">{year}</div>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <div className="pt-5">
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
