import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm } from '../utils/typography'
import {Container} from './utils'
import School from '../../content/assets/school.inline.svg'
import ThailandFlag from '../../content/assets/thailand.inline.svg'

const BioContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: ${rhythm(1)};
  }
`
const Text = styled.p`
  display: block;
  width: 150px;
`
const StyledImage = styled(Image)`
  margin-bottom: ${rhythm(0.5)};
  min-width: 50;
  min-height: 50;
  border-radius: 100%;
`
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
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
    <BioContainer>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <Text>
        Hi, I am <strong>{author}</strong>,
        curious developer.
        From {' '}
        <a href="https://42.fr/">
          <School style={{width: rhythm(1 - 1 / 4)}} /> school.
        </a>{' '}
        Thailand {'  '} <ThailandFlag style={{width: rhythm(1 - 1 / 4)}}/>.
      </Text>
    </BioContainer>
  )
}

export default Bio
