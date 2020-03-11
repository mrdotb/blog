import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { ExternalLink } from './'

import { rhythm } from '../../config/typography'

import BaseSchool from '../../content/assets/school.inline.svg'
import BaseThailand from '../../content/assets/thailand.inline.svg'
import BaseHearth from '../../content/assets/hearth.inline.svg'

const School = styled(BaseSchool)`
  width: 1.2rem;
`
const ThailandFlag = styled(BaseThailand)`
  width: 1.2rem;
`
const Hearth = styled(BaseHearth)`
  width: 1.2rem;
  fill: ${props => props.theme.colors.red};
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width:${props => props.theme.breakpoints.m}) {
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
  width: 300px;
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
        From <ExternalLink href="https://42.fr/"><School /> school.</ExternalLink>
        <br />
        I <Hearth /> elixir and javascript.
        <br />
        I currently living in Chiang Mai, <ThailandFlag />.
      </Text>
    </Box>
  )
}

export default Bio
