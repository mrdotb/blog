import { css } from 'styled-components'
import { rgba } from 'polished'

const article = css`
  .article {
    h2 {
      margin-top: 3rem;
    }
    h3 {
      margin-top: 3rem;
    }
    a {
      color: ${props => props.theme.colors.blue};
      box-shadow: ${props => rgba(props.theme.colors.blue, 0.35)} 0px -2px 0px inset;
      border-bottom: 1px solid ${props => rgba(props.theme.colors.blue, 0.35)};
      transition: ${props => props.theme.transition.duration} ease-in;
      &:hover {
        background: ${props => rgba(props.theme.colors.blue, 0.35)};
      }
    }
  }
`

export default article
