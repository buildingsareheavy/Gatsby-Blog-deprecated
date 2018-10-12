import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>About</h1>
    <p>Ethan Bradford Barrett is a front-end web developer and 
      designer. <Link to="/cv/">View full CV here</Link>.
    </p>
    <p>This is his biography. He Studies at Rocky Mountain College of Art + Design,
      majoring in Fine Arts, with an emphasis in Photo / Video and Sculpture.
    </p>
    <h2>Key Skills:</h2>
    <ul>
      <li>Front-end Development</li>
      <li>Graphic Design</li>
      <li>Sales</li>
    </ul>
    <Link to="/portfolio/">View Portfolio</Link>

    <h2>Technical Skills:</h2>
    <ul>
      <li><span>OS: </span>MacOS, Linux</li>
      <li><span>Scripting Languages: </span>Javascript, PHP</li>
      <li><span>Version Control: </span>Git, Github, Bitbucket</li>
      <li><span>Frameworks: </span>Bootstrap, Divi, React</li>
      <li><span>Other Skills: </span>CSS, Sass, JQuery, AJAX</li>
      <li><span>Design Tools: </span>Photoshop, Illustrator, Figma, Sketch</li>
    </ul>


    <h2>Connect:</h2>
    <p>If I have a new post on my <Link to="/blog/">blog</Link>, I will always post on my <a href="https://www.instagram.com/buildingsareheavy/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
    <p>I have my most recent projects on my <a href="https://github.com/buildingsareheavy" target="_blank" rel="noopener noreferrer">Github</a>, and host all my daily-projects on my <a href="https://codepen.io/buildingsareheavy/" target="_blank" rel="noopener noreferrer">codepen</a>.</p>
    <p>If you prefer email, you can always reach me at <a href="mailto:hello@buildingsareheavy.com">hello@buildingsareheavy.com</a>.</p>


    <ul>
      <li><Link to="/blog/">Blog</Link></li>
      <li><a href="https://www.instagram.com/buildingsareheavy/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      <li><a href="https://github.com/buildingsareheavy" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li><a href="https://codepen.io/buildingsareheavy/" target="_blank" rel="noopener noreferrer">Codepen</a></li>
      <li><a href="mailto:hello@buildingsareheavy.com" rel="noopener noreferrer">Email</a></li>
    </ul>


    

    <br />
    <br />
    <br />
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
