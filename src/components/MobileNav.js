import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import mailTo from '../utils/mailTo'

import Home from '../../content/assets/home.inline.svg'
import About from '../../content/assets/about.inline.svg'
import Blog from '../../content/assets/hash.inline.svg'
// import Github from '../../content/assets/github.inline.svg'
import Mail from '../../content/assets/mail.inline.svg'

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
  background-color: ${props => rgba(props.theme.colors.background.dark, 0.95)};
  display: none;
  @media only screen and (max-width:${props => props.theme.breakpoints.s}) {
    display: block;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const linkStyle = css`
  flex: 1;
  padding: 0.7rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: lowercase;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color ${props => props.theme.transition.duration} linear;
  color: ${props => props.active ? props.theme.colors.gold : props.theme.colors.white};
  > svg {
    transition: fill ${props => props.theme.transition.duration} linear;
    fill: ${props => props.active ? props.theme.colors.gold : props.theme.colors.white};
  }
  &:hover, &:active {
    color: ${props => props.theme.colors.gold};
    > svg {
      fill: ${props => props.theme.colors.gold};
    }
  }
`
const StyledLink = styled(Link)`
  ${linkStyle}
`
const StyledA = styled.a`
  ${linkStyle}
`
const Svg = ({name}) => {
  const style = {width: '1.3rem'}

  switch (name) {
  case 'Home':
    return <Home style={style} />
  case 'About':
    return <About style={style} />
  case 'Blog':
    return <Blog style={style} />
  case 'Mail':
    return <Mail style={style} />
  }
}

Svg.propTypes = {
  name: PropTypes.string.isRequired,
}

const MobileNav = ({location}) => {
  return (
    <Fixed>
      <Container>
        {nav.map(e => (
          <StyledLink
            active={location.pathname === e.to ? 1 : 0}
            key={e.name}
            to={e.to}
          >
            <Svg name={e.name} />
            {e.name}
          </StyledLink>
        ))}
        <StyledA onClick={
          e => {
            e.preventDefault()
            mailTo()
          }
        }>
          <Svg name="Mail" />
          Contact
        </StyledA>
      </Container>
    </Fixed>
  )
}

MobileNav.propTypes = {
  location: PropTypes.object
}

export default MobileNav
