import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainNav = styled.nav`
  float: right;
  margin-top: -25px;
  ul {
    margin: inherit;
    li {
      list-style: none;
    }
  }
`

const NavItem = styled(Link)`
  color: #eee;
  background: #333;
  display: inline;
  text-decoration: none;
  margin: 0 5px;
  padding: 10px;
  &:hover {
    background: gold;
  }
`

// const Header = ({ siteTitle }) => (
  const Header = () => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline'
         }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {/* {siteTitle} */}
          Buildings Are <br />
          Heavy
        </Link>
      </h1>
      

    <MainNav>
      <ul>
        <li>
        <NavItem to="/">
        About
        </NavItem>
        </li>

        <li>
        <NavItem to="/blog">
        Blog
        </NavItem>
        </li>

        <li>
        <NavItem to="/portfolio">
        Portfolio
        </NavItem>
        </li>

      </ul>
    </MainNav>
    
    </div>
  </div>
)

export default Header
