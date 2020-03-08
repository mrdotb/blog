import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

import { Background, Container, Layout, SEO } from '../elements'
import { Experiences, Things } from '../components'
import { rhythm, scale } from '../../config/typography'

const Box = styled.div`
  padding: 3rem 0;
`
const AContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${rhythm(2)} 0};
`
const PictureBloc = styled.div`
  flex: 1 1 ${rhythm(12)};
  padding: 0 ${rhythm(0.5)};
`
const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PictureText = styled.div`
  font-size: ${scale(-1 / 6).fontSize};
  line-height: ${scale(-1 / 6).lineHeight};
  marginBottom: ${rhythm(0.5)};
`
const TextBloc = styled.div`
  flex: 1 1 ${rhythm(22)};
  padding: 0 ${rhythm(0.5)};
`
const Text = styled.div`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
`

const About = ({location}) => {
  const data = useStaticQuery(graphql`
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
  `)

  const { author } = data.site.siteMetadata

  return (
    <Layout location={location} title="About">
      <SEO title="Resume" />

      <Container>
        <AContent>
          <TextBloc>
            <Text dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </TextBloc>
          <PictureBloc>
            <PictureContainer>
              <Image
                fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
                alt={author}
                style={{
                  minWidth: 50,
                  minHeight: 50,
                }}
                imgStyle={{}}
              />
              <PictureText dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.imageCaption}} />
            </PictureContainer>
          </PictureBloc>
        </AContent>
      </Container>

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
}

About.propTypes = {
  location: PropTypes.object
}

export default About
