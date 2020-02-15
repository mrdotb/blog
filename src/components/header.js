import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { scale } from '../utils/typography'
import {Container, Content} from './utils'

const HContent = styled(Content)`
  justify-content: space-between;
  align-items: center;
`
const Header = ({children}) => (
  <Container black>
    <HContent>
      <div>
        <Link
          className="darklink"
          style={{
            ...scale(1.5),
          }}
          to={'/'}
        >
          mrdotb
        </Link>
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
