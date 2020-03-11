import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Text = styled.div`
  max-width: 43rem;
  width: 100%;
  @media only screen and (max-width:${props => props.theme.breakpoints.l}) {
    max-width: 28rem;
  }
  @media only screen and (max-width:${props => props.theme.breakpoints.m}) {
    max-width: none;
  }
`
const Picture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width:${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`
const StyledImage = styled(Image)`
  width: 100%;
  transition: filter ${props => props.theme.animation.duration} ease-in-out;
  margin-bottom: .5rem;
  &:hover {
    filter: invert(100%);
  }
`
const Resume = ({data}) => (
  <Box className="outer-link">
    <Text dangerouslySetInnerHTML={{ __html: data.html }} />
    <Picture>
      <StyledImage
        fixed={data.frontmatter.image.childImageSharp.fixed}
        alt={data.frontmatter.imageCaption}
      />
      <div dangerouslySetInnerHTML={{ __html: data.frontmatter.imageCaption}} />
    </Picture>
  </Box>
)

Resume.propTypes = {
  data: PropTypes.object
}

export default Resume
