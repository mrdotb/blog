import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm } from '../utils/typography'

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${MOBILE_MEDIA_QUERY} {
    display: none;
  }
`
const StyledLink = styled(Link)`
  padding: ${rhythm(1 / 3)};
`
const Nav = ({location}) => (
  <Container>
    {nav.map(e => (
      <StyledLink
        className={location.pathname === e.to ? 'darklink active' : 'darklink'}
        key={e.name}
        to={e.to}
      >
        {e.name}
      </StyledLink>
    ))}
  </Container>
)

Nav.propTypes = {
  location: PropTypes.object
}

export default Nav
