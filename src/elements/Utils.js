import styled, { css } from 'styled-components'
import { rhythm } from '../../config/typography'

const Container = styled.div`
${props => props.black &&
  css`
  background-color: #26282a;
  color: #fff;
  `
}
`
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: ${props => props.theme.layout.big};
  padding: 0 ${rhythm(0.5)};
`

export { Container, Content }
