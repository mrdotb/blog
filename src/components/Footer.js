import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
//import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { rhythm } from '../../config/typography'
import { Background, Container } from '../elements'

import Github from '../../content/assets/github.inline.svg'
import Linkedin from '../../content/assets/linkedin.inline.svg'

const Box = styled.div`
  height: 4rem;
  display: flex;
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
const StyledGithub = styled(Github)`
  width: 1.5rem;
`
const StyledLinkedin = styled(Linkedin)`
  width: 1.5rem;
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
    <Background color="dark">
      <Container>
        <Box>
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
              <StyledGithub />
            </LinkIcon>
            <LinkIcon href={linkedin}>
              <StyledLinkedin />
            </LinkIcon>
          </div>

        </Box>
      </Container>
    </Background>
  )
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Footer
