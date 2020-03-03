import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { scale } from '../../config/typography'
import {Container, Content} from '../elements'

const HContent = styled(Content)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const StyledLink = styled(Link)`
  font-size: ${scale(1.5).fontSize};
  line-height: ${scale(1.5).lineHeight};
  ${MOBILE_MEDIA_QUERY} {
    font-size: ${scale(2.2).fontSize};
    line-height: ${scale(2.2).lineHeight};
  }
`

const Header = ({children}) => (
  <Container black>
    <HContent>
      <div>
        <StyledLink
          className="darklink"
          to={'/'}
        >
          mrdotb
        </StyledLink>
      </div>
      <div>
        {children}
      </div>
    </HContent>
  </Container>
)

Header.propTypes = {
  children: PropTypes.element,
}

export default Header
