import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  padding 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
`

const Container = ({children, type, className}) => (
  <Wrapper type={type} className={className}>
    {children}
  </Wrapper>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['article', 'base', 'big']),
}

Container.defaultProps = {
  className: null,
  type: 'base'
}

export default Container
