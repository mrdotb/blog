import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm } from '../../config/typography'
import {Container, Content} from '../elements'

import Github from '../../content/assets/github.inline.svg'
import Linkedin from '../../content/assets/linkedin.inline.svg'

const FContainer = styled(Container)`
  align-items: center;
  min-height: ${rhythm(2)};
  ${MOBILE_MEDIA_QUERY} {
    display: none;
  }
`
const FContent = styled(Content)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const Link = styled.a`
  text-decoration: underline;
`
const LinkIcon = styled.a`
  padding: ${rhythm(1 / 4)};
`

const Footer = ({children}) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const { github, linkedin } = data.site.siteMetadata.social

  return (
    <FContainer black>
      <FContent>
        <div>
          {children}
        </div>

        <div>
          © mrdotb {new Date().getFullYear()}, Built with{' '}
          <Link
            className="darklink"
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </Link>
        </div>

        <div>
          <LinkIcon href={github}>
            <Github style={{width: rhythm(1)}} />
          </LinkIcon>
          <LinkIcon href={linkedin}>
            <Linkedin style={{width: rhythm(1)}} />
          </LinkIcon>
        </div>

      </FContent>
    </FContainer>
  )
}

Footer.propTypes = {
  children: PropTypes.element,
}

export default Footer
