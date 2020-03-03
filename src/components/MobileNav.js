import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm, scale } from '../utils/typography'
import Home from '../../content/assets/home.inline.svg'
import About from '../../content/assets/about.inline.svg'
import Blog from '../../content/assets/hash.inline.svg'
import Github from '../../content/assets/github.inline.svg'

const nav = [
  { name: 'Home', to: '/'},
  { name: 'About', to: '/about'},
  { name: 'Blog', to: '/blog'},
]

const Fixed = styled.div`
  z-index: 1; 
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(245, 245, 245, .85);
  border-top: 1px solid #c2c2c2;
  display: none;
  ${MOBILE_MEDIA_QUERY} {
    display: block;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const linkStyle = `
  flex: 1;
  padding: ${rhythm(0.3)} 0;
  font-size: ${scale(0.1).fontSize};
  line-height: ${scale(0.1).lineHeight};
  text-transform: lowercase;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .1s linear;
  color: #666;
  > svg {
    transition: fill .1s linear;
    fill: #666;
  }
  &:hover {
    color: #000;
    > svg {
      fill: #000;
    }
  }
${props => props.active &&
  css`
  color: #000;
  > svg {
    fill: #000;
  }
  `
}
`
const StyledLink = styled(Link)`
  ${linkStyle}
`
const StyledA = styled.a`
  ${linkStyle}
`
const Svg = ({name, style}) => {
  switch (name) {
  case 'Home':
    return <Home style={style} />
  case 'About':
    return <About style={style} />
  case 'Blog':
    return <Blog style={style} />
  case 'Github':
    return <Github style={style} />
  }
}

Svg.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object
}

const MobileNav = ({location}) => {
  const data = useStaticQuery(graphql`
    query GithubQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `)
  const { github } = data.site.siteMetadata.social

  return (
    <Fixed>
      <Container>
        {nav.map(e => (
          <StyledLink
            active={location.pathname === e.to ? 1 : 0}
            key={e.name}
            to={e.to}
          >
            <Svg name={e.name} style={{width: rhythm(0.8)}} />
            {e.name}
          </StyledLink>
        ))}
        <StyledA href={github}>
          <Svg name="Github" style={{width: rhythm(0.8)}} />
          Github
        </StyledA>
      </Container>
    </Fixed>
  )
}

MobileNav.propTypes = {
  location: PropTypes.object
}

export default MobileNav
