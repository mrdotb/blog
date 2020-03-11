import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Background, Container, Layout, SEO } from '../elements'
import { Experiences, Resume, Things } from '../components'

const Box = styled.div`
  padding: 3rem 0;
`

const About = ({location, data}) => (
  <Layout location={location} title="Who am I ?">
    <SEO title="Resume" />

    <Background color="light">
      <Container>
        <Box>
          <Resume data={data.markdownRemark} />
        </Box>
      </Container>
    </Background>

    <Background color="dark">
      <Container>
        <Box>
          <h2>Things I work with</h2>
          <Things />
        </Box>
      </Container>
    </Background>

    <Background color="light">
      <Container>
        <Box>
          <h2>Experiences</h2>
          <Experiences data={data.allMarkdownRemark.edges}/>
        </Box>
      </Container>
    </Background>

  </Layout>
)

About.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
}

export default About

export const pageQuery = graphql`
  query About {
    site {
      siteMetadata {
        author
        title
        siteUrl
      }
    }

    markdownRemark(fileAbsolutePath: {regex: "/page/about/about.md/"}) {
      id
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        imageCaption
      }
    }

    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/page/about/experiences/"}}) {
      edges {
        node {
          id
          frontmatter {
            order
            year
            category
            link
            url
            description
            time
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 680, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
