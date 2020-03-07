import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background[props.color]};
  color: ${props => props.theme.colors.text[props.color]};
`

const Background = ({children, className, color}) => (
  <Wrapper className={className} color={color}>
    {children}
  </Wrapper>
)

Background.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string
}

Background.defaultProps = {
  color: 'light',
  className: null 
}

export default Background
