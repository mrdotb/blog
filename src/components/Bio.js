import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../../config/typography'
import School from '../../content/assets/school.inline.svg'
import ThailandFlag from '../../content/assets/thailand.inline.svg'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:${props => props.theme.breakpoints.m}) {
    background-color: red;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: ${rhythm(1)};
  }
`
const Text = styled.p`
`
const StyledImage = styled(Image)`
  left: 0;
  right: 0;
  width: 80%;
  margin-bottom: 1rem;
`
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <Box>
      <StyledImage
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <Text>
        Hi, I am <strong>{author}</strong>, software developer. <br />
        From {' '}
        <a href="https://42.fr/">
          <School style={{width: rhythm(1 - 1 / 4)}} /> school.
        </a>{' '}
        <br />
        I like elixir, javascript and rust.
        <br />
        Currently living in Thailand {'  '} <ThailandFlag style={{width: rhythm(1 - 1 / 4)}}/>.
      </Text>
    </Box>
  )
}

export default Bio
