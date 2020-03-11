import styled from 'styled-components'
import { rgba } from 'polished'

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.gold};
  box-shadow: ${props => rgba(props.theme.colors.gold, 0.35)} 0px -2px 0px inset;
  border-bottom: 1px solid ${props => rgba(props.theme.colors.gold, 0.35)};
  transition: ${props => props.theme.transition.duration} ease-in;
  &:hover {
    background: ${props => rgba(props.theme.colors.gold, 0.35)};
  }
`

export default ExternalLink
