import React from 'react'
import Link from 'gatsby-link'


const blogPage = ({data}) => (
    <div>
      <h1>Blog</h1>
      <ul>
      {data.allMarkdownRemark.edges.map(post => (
        // Since we are calling 'blogQuery', we can now index all the blog post pages.
        // This is probably better as a component and the properties should probably be rewritten cleaner, but for now, it gets the job done.
        <li>
          <Link
          key={post.node.id}
          to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  )



export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          published: { eq: true } 
          portfolio: { eq: null }
        } 
      }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date
          }
        }
      }
    }
  }
`

export default blogPage
