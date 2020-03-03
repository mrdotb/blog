import React from 'react'
import styled, { keyframes } from 'styled-components'
import {Container, Content} from '../elements'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm } from '../utils/typography'

const OctoContainer = styled(Container)`
  height: ${rhythm(7)};
  ${MOBILE_MEDIA_QUERY} {
    height: ${rhythm(3)};
  }
`

const StyledSvg = styled.svg`
  width: ${rhythm(13)};
  height: ${rhythm(13)};
  ${MOBILE_MEDIA_QUERY} {
    width: ${rhythm(7)};
    height: ${rhythm(7)};
  }
`
const OctoContent = styled(Content)`
  justify-content: flex-end;
  overflow-y: hidden;
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
  animation: ${rotateKeyframe} 15s infinite linear;
`

class OctagonAnimation extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <OctoContainer black>
        <OctoContent>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 114.938 114.938"
          >
            <defs />
            {[0, 10, 20, 30].map(angle => (
              <OctagonPath
                angle={angle}
                key={angle}
                fill="none"
                stroke="#c29948"
                d="M110.008 35.547l.113 43.571-30.73 30.89-43.57.113-30.89-30.73-.114-43.57 30.73-30.89 43.571-.114z"
              />
            ))}
          </StyledSvg>

        </OctoContent>
      </OctoContainer>
    )
  }
}

export default OctagonAnimation
