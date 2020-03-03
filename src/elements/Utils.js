import styled, { css } from 'styled-components'
import { rhythm } from '../../config/typography'

const Container = styled.div`
  display: flex;
  justify-content: center;
${props => props.black &&
  css`
  background-color: #26282a;
  color: #fff;
  `
}
`
const Content = styled.div`
  display: flex;
  width: ${rhythm(36)};
  padding: 0 ${rhythm(0.5)};
`

export { Container, Content }
