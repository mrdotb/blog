import React from 'react'
import styled, { css } from 'styled-components'
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
import Gatsby from '../../content/assets/gatsby.inline.svg'
import Git from '../../content/assets/git.inline.svg'
import Graphql from '../../content/assets/graphql.inline.svg'
import Pg from '../../content/assets/postgresql.inline.svg'
import Pug from '../../content/assets/pug.inline.svg'
import Phoenix from '../../content/assets/phoenix.inline.svg'
import Reakt from '../../content/assets/react.inline.svg'
import Redux from '../../content/assets/redux.inline.svg'
import Ruby from '../../content/assets/ruby.inline.svg'
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
  max-width: ${rhythm(26)};
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
  color: rgba(136,136,136,1.00);
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
  padding: ${rhythm(0.2)} ${rhythm(0.6)};
  margin: ${rhythm(0.1)};
  border-radius: 20px;
`
const Experiences = ({data}) => {
  let placement = 0
  const groupByYear = groupBy(data, e => e.node.frontmatter.year)
  const years = Object.keys(groupByYear).sort((a, b) => b - a)
  const byOrder = (a, b) => a.node.frontmatter.order - b.node.frontmatter.order
  //const spanify = tag => {
  //  const split = tag.split(' ')
  //  if (split.length === 1) {
  //    return tag
  //  }

  //  return `${split[0]} <span class="devicons">${split[1]}</span>`
  //}

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
        <Thing><Gatsby width={iconSize}/></Thing>
        <Thing><Git width={iconSize}/></Thing>
        <Thing><Graphql width={iconSize}/></Thing>
        <Thing><Pg width={iconSize}/></Thing>
        <Thing><Phoenix width={iconSize}/></Thing>
        <Thing><Pug width={iconSize}/></Thing>
        <Thing><Reakt width={iconSize}/></Thing>
        <Thing><Redux width={iconSize}/></Thing>
        <Thing><Ruby width={iconSize}/></Thing>
        <Thing><Nodejs width={iconSize}/></Thing>
        <Thing><Ubuntu width={iconSize}/></Thing>
        <Thing><Vim width={iconSize}/></Thing>
      </IconContainer>
    </ThingsContent>
  )
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
    <Layout location={location}>
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

About.propTypes = {
  location: PropTypes.object
}

export default About
