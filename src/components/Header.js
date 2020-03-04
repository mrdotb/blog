import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Logo from '../../content/assets/logo.inline.svg'
import { Background, Container } from '../elements'
import { OctagonAnimation } from '../components'

const HeadBox = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const StyledLogo = styled(Logo)`
  width: 10rem;
    > #text {
      transition: fill ${props => props.theme.transition.duration} linear; 
    }
  &:hover {
    > #text {
      fill: ${props => props.theme.colors.gold};
    }
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const fadeInDown =  keyframes`
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
`
const Header = ({children}) => {

  return (
    <Background color="dark">
      <Container>
        <HeadBox>
          <div>
            <Link to={'/'}>
              <StyledLogo />
            </Link>
          </div>
          <div>
            {children}
          </div>
        </HeadBox>
      </Container>

      <Container>
        <Box>
          <AnimatedTitle>Software developer</AnimatedTitle>
          <OctagonAnimation />
        </Box>
      </Container>
    </Background>
  )
}

Header.propTypes = {
  children: PropTypes.element,
}

export default Header
