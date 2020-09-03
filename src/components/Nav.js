import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import mailTo from '../utils/mailTo'

import { rhythm } from '../../config/typography'

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width:${props => props.theme.breakpoints.s}) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${rhythm(1 / 3)};
  color: ${props => props.active ? props.theme.colors.gold : props.theme.colors.grey};
  &:hover, &:active {
    color: ${props => props.theme.colors.gold};
  }
`
const Nav = ({location}) => (
  <Box>
    {nav.map(e => (
      <StyledLink
        active={location.pathname === e.to ? 1 : 0}
        key={e.name}
        to={e.to}
      >
        {e.name}
      </StyledLink>
    ))}
    <StyledLink onClick={
      e => {
        e.preventDefault()
        mailTo()
      }
    }>Contact</StyledLink>
  </Box>
)

Nav.propTypes = {
  location: PropTypes.object
}

export default Nav
