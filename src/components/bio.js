import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import {Container} from './utils'
import School from '../../content/assets/school.inline.svg'
import ThailandFlag from '../../content/assets/thailand.inline.svg'

const BioContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
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
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: rhythm(0.5),
          minWidth: 50,
          minHeight: 50,
          borderRadius: '100%',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <p>
        Hi, I am <strong>{author}</strong>,
        <br />
        curious developer.
        <br />
        From {' '}
        <a href="https://42.fr/">
          <School style={{width: rhythm(1 - 1 / 4)}} /> school.
        </a>{' '}
        <br />
        Thailand {'  '} <ThailandFlag style={{width: rhythm(1 - 1 / 4)}}/>.
      </p>
    </BioContainer>
  )
}

export default Bio
