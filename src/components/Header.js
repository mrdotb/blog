import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import { Background, Container } from '../elements'
import { OctagonAnimation, Logo } from '../components'

const HeadBox = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width:${props => props.theme.breakpoints.s}) {
    justify-content: center;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleBox = styled.div`
  width: 42rem;
`
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
const AnimatedTitle = styled.h1`
  animation: ${props => props.theme.animation.duration} ${fadeInDown} ease-in-out;
  margin: 0;
`
const Header = ({children, title}) => (
  <Background color="dark">
    <Container>
      <HeadBox>
        <div>
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>
        <div>
          {children}
        </div>
      </HeadBox>
    </Container>

    <Container>
      <Box>
        <TitleBox>
          <AnimatedTitle>{title}</AnimatedTitle>
        </TitleBox>
        <OctagonAnimation />
      </Box>
    </Container>
  </Background>
)

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string
}

export default Header
