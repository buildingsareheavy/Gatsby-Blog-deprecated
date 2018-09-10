import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
      // Since we are calling 'pageQuery', we can now index all the blog post pages.
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


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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


export default IndexPage
