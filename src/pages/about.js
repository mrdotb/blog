import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import groupBy from 'lodash.groupby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Content } from '../components/utils'
import { rhythm, scale } from '../utils/typography'

import Ansible from '../../content/assets/ansible.inline.svg'
import Ava from '../../content/assets/ava.inline.svg'
import Cmd from '../../content/assets/cmd-line.inline.svg'
import Docker from '../../content/assets/docker.inline.svg'
import Pg from '../../content/assets/postgresql.inline.svg'
import Phoenix from '../../content/assets/phoenix.inline.svg'
import Reakt from '../../content/assets/react.inline.svg'
import Nodejs from '../../content/assets/nodejs.inline.svg'
import Ubuntu from '../../content/assets/ubuntu.inline.svg'
import Vim from '../../content/assets/vim.inline.svg'

const AContent = styled(Content)`
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
const Title = styled.h1`
  margin-bottom: ${rhythm(1)};
`
const Text = styled.div`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
`

const XpContent = styled(Content)`
  padding: ${rhythm(2)} ${rhythm(0.5)};
  flex-direction: column;
`
const CardsContainer = styled(Container)`
  flex-direction: column;
`
const Year = styled.div`
  align-self: center;
  font-size: ${scale(1.2).fontSize};
  line-height: ${scale(1.2).lineHeight};
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rhythm(26)};
  min-height: 300px;
  border-radius: 6px;
  box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
`
const CardImage = styled.div`
  width: 100%;
`
const CardContent = styled.div``
const CardTitle = styled.div``
const Experiences = ({data}) => {
  const groupByYear = groupBy(data, e => e.node.frontmatter.year)
  const years = Object.keys(groupByYear).sort()

  return (
    <XpContent>
      <h2>Experiences</h2>
      <CardsContainer>
        {years.map(year =>
          <div key={groupByYear[year][0].node.frontmatter.year}>
            <Year>{groupByYear[year][0].node.frontmatter.year}</Year>
            {groupByYear[year].map(project =>
              <Card key={project.node.id}>
                <CardImage>
                  <Image
                    fluid={project.node.frontmatter.image.childImageSharp.fluid}
                    alt=""
                    style={{
                      minWidth: 50,
                      minHeight: 50,
                    }}
                    imgStyle={{
                      borderRadius: '6px 6px 0 0'
                    }}
                  />
                </CardImage>
                <CardContent>
                  <CardTitle>{project.node.frontmatter.title}</CardTitle>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardsContainer>
    </XpContent>
  )
}

Experiences.propTypes = {
  data: PropTypes.array,
}

const ThingsContent = styled(Content)`
  padding: ${rhythm(2)} ${rhythm(0.5)}};
  flex-direction: column;
`
const IconContainer = styled(Container)`
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
const Thing = styled.div`
  padding: ${rhythm(0.5)}
`
const Things = () => {
  const iconSize = rhythm(3)

  return (
    <ThingsContent>
      <h2>Things I work with</h2>
      <IconContainer>
        <Thing><Ansible width={iconSize} /></Thing>
        <Thing><Ava width={iconSize} /></Thing>
        <Thing><Cmd width={iconSize}/></Thing>
        <Thing><Docker width={iconSize}/></Thing>
        <Thing><Pg width={iconSize}/></Thing>
        <Thing><Phoenix width={iconSize}/></Thing>
        <Thing><Reakt width={iconSize}/></Thing>
        <Thing><Nodejs width={iconSize}/></Thing>
        <Thing><Ubuntu width={iconSize}/></Thing>
        <Thing><Vim width={iconSize}/></Thing>
      </IconContainer>
    </ThingsContent>
  )
}

const About = () => {
  const data = useStaticQuery(graphql`
    query About {
      site {
        siteMetadata {
          author
          title
          siteUrl
        }
      }

      markdownRemark(fileAbsolutePath: {regex: "/page/about/"}) {
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
              description
              title
              url
              time
              year
              tags
              image {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
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
  console.log(data)

  return (
    <Layout>
      <SEO title="About mrdotb" description="" />

      <Container>
        <AContent>
          <TextBloc>
            <Title>About</Title>
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

      <Container black>
        <Things />
      </Container>

      <Container>
        <Experiences data={data.allMarkdownRemark.edges}/>
      </Container>

    </Layout>
  )
}

export default About
