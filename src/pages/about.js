import React from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import groupBy from 'lodash.groupby'
import PropTypes from 'prop-types'

import { Background, Container, Layout, SEO } from '../elements'
import { Things } from '../components'
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
const XpContent = styled.div`
  display: flex;
  padding: ${rhythm(2)} ${rhythm(0.5)};
  flex-direction: column;
`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rhythm(1)} 0;
`
const Year = styled.div`
  align-self: center;
  font-size: ${scale(1.2).fontSize};
  line-height: ${scale(1.2).lineHeight};
  margin: 0;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
  margin: ${rhythm(1)} 0;
  border-radius: 6px;
  box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
  background-color: rgba(252,253,255,1.00);
${props => props.right &&
  css`
  align-self: flex-end;
  `
}
`
const CardImage = styled.div`
  width: 100%;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rhythm(1)};
`
const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 0 ${rhythm(0.5)} 0;
`
const CardCat = styled.header`
  text-transform: uppercase;
  color: rgba(136,136,136,1.00);
`
const CardLink = styled.a`
  text-decoration: underline;
`
const CardMain = styled.main`
  display: flex;
  max-width: ${rhythm(20)};
  flex-direction: column;
  padding: 0 0 ${rhythm(0.5)} 0;
`
const CardDescription = styled.h3`
  margin-bottom: 0;
`
const CardTime = styled.div`
  color: rgba(136,136,136,1.00);
`
const CardFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  //max-width: ${rhythm(20)};
  //align-self: flex-end;
`
const Tags = styled.div`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  font-family: 'devicons';
  border: solid 1px #000;
  padding: ${rhythm(0.1)} ${rhythm(0.6)} ${rhythm(0.2)};
  margin: ${rhythm(0.2)} ${rhythm(0.1)};
  border-radius: 20px;
`
const Experiences = ({data}) => {
  let placement = 0
  const groupByYear = groupBy(data, e => e.node.frontmatter.year)
  const years = Object.keys(groupByYear).sort((a, b) => b - a)
  const byOrder = (a, b) => a.node.frontmatter.order - b.node.frontmatter.order

  return (
    <XpContent>
      <h2>Experiences</h2>
      {years.map(year =>
        <CardsContainer key={groupByYear[year][0].node.frontmatter.year}>
          <Year>{groupByYear[year][0].node.frontmatter.year}</Year>
          {groupByYear[year].sort(byOrder).map(project =>
            <Card key={project.node.id} right={placement++ % 2}>
              <CardImage>
                <Image
                  fluid={project.node.frontmatter.image.childImageSharp.fluid}
                  alt={project.node.frontmatter.description}
                  style={{}}
                  imgStyle={{
                    borderRadius: '6px 6px 0 0',
                    width: '100%',
                    marginBottom: '0',
                  }}
                />
              </CardImage>
              <CardContent>
                <CardHeader>
                  <CardCat>{project.node.frontmatter.category}</CardCat>
                  <CardLink href={project.node.frontmatter.url}>
                    {project.node.frontmatter.link}
                  </CardLink>
                </CardHeader>
                <CardMain>
                  <CardDescription>{project.node.frontmatter.description}</CardDescription>
                  <CardTime>{project.node.frontmatter.time}</CardTime>
                </CardMain>
                <CardFooter>
                  {project.node.frontmatter.tags.map(tag => (
                    <Tags key={tag} dangerouslySetInnerHTML={{__html: tag}}/>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          )}
        </CardsContainer>
      )}
    </XpContent>
  )
}

Experiences.propTypes = {
  data: PropTypes.array,
}

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

      <Container>
        <Experiences data={data.allMarkdownRemark.edges}/>
      </Container>

    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.object
}

export default About
