import styled from 'styled-components'

import Mrdotb from '../../content/assets/logo.inline.svg'

const Logo = styled(Mrdotb)`
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

export default Logo
