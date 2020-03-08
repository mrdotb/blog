import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import { rgba } from 'polished'

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  box-shadow: ${props => props.theme.shadow.card} ${props => rgba(props.theme.colors.shadow[props.shadow], 0.15)};
  background-color: ${props => props.theme.colors.background.light};
  & > main {
    padding: 2rem;
  }
`
const StyledImage = styled(Image)`
  borderRadius: '6px 6px 0 0',
  width: '100%',
  marginBottom: '0',
`
const Card = ({children, className, shadow, fluid, alt}) => (
  <CardContainer className={className} shadow={shadow}>
    {fluid && <header>
      <StyledImage fluid={fluid} alt={alt} />
    </header>}
    <main>
      {children}
    </main>
  </CardContainer>
)

Card.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.string,
  fluid: PropTypes.object,
}

Card.defaultProps = {
  alt: null,
  className: null,
  shadow: 'light',
  fluid: null,
}

export default Card
