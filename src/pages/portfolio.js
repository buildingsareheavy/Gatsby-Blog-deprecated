import React from 'react'
import Link from 'gatsby-link'


const portfolioPage = ({data}) => (
    <div>
      <h1>Portfolio</h1>
      <ul>
      {data.allMarkdownRemark.edges.map(post => (
        // Since we are calling 'portfolioQuery', we can now index all the blog post pages.
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

  


export const portfolioQuery = graphql`
  query portfolioQuery {
    allMarkdownRemark(
      limit: 100
      sort: { 
          fields: [frontmatter___portfolioOrder], order: DESC
        }
      filter: { 
          frontmatter: { 
              published: { eq: true } 
              portfolio: { eq: true }
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
            portfolio
            portfolioOrder
          }
        }
      }
    }
  }
`

export default portfolioPage
