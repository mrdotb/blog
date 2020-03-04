import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

//import { Background, Container } from '../elements'

const Box = styled.div`
  overflow-y: hidden;
  height: 10rem;
  ${MOBILE_MEDIA_QUERY} {
    height: 4.35rem;
  }
`
const StyledSvg = styled.svg`
  width: 25rem;
  height: 25rem;
  ${MOBILE_MEDIA_QUERY} {
    width: 10rem;
    height: 10rem;
  }
`
const rotateKeyframe = props => keyframes`
  0% {
    transform: rotate(${props.angle}deg);
  }
  100% {
    transform: rotate(${props.angle + 360}deg);
  }
`
const OctagonPath = styled.path`
  transform-origin: center;
  transform: rotate(${props => props.angle}deg);
  animation: ${rotateKeyframe} 20s infinite linear;
`

const OctagonAnimation = () => (
  <Box>
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114.938 114.938"
    >
      <defs />
      {[0, 1, 2, 3].map(angle => angle * 11).map(angle => (
        <OctagonPath
          angle={angle}
          key={angle}
          fill="none"
          stroke="#c29948"
          strokeWidth="0.25"
          d="M110.008 35.547l.113 43.571-30.73 30.89-43.57.113-30.89-30.73-.114-43.57 30.73-30.89 43.571-.114z"
        />
      ))}
    </StyledSvg>
  </Box>
)

export default OctagonAnimation
