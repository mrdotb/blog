import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { scale } from '../utils/typography'
import {Container, Content} from './utils'
import Nav from './nav'

const HContent = styled(Content)`
  justify-content: space-between;
  align-items: center;
`
const Header = () => (
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
        <Nav />
      </div>
    </HContent>
  </Container>
)

export default Header
