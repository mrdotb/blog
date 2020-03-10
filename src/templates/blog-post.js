import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import timeToRead from '../utils/timeToRead'
import PropTypes from 'prop-types'

import {Background, Container, Layout, SEO} from '../elements'

const Box = styled.div`
  padding: 3rem 0;
  display: block;
`
const Article = styled.article`
  & > header {
    margin-bottom: 2rem;
    & > h1 {
      margin-bottom: .25rem;
    }
    & > div {
      color: ${props => props.theme.colors.darkGrey};
    }
  }
  & > footer > nav > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
const StyledLink = styled(Link)`
  padding: 0.5;
  border: 1px solid rgb(59, 115, 188);
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background-color: rgb(59, 115, 188);
  }
`

const BlogPostTemplate = ({data, location, pageContext}) => {
  const post = data.markdownRemark
  const siteUrl = data.site.siteMetadata.siteUrl
  const pathname = location.pathname
  const disqusConfig = {
    url: siteUrl + pathname,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  const { previous, next } = pageContext
  const categories = post.frontmatter.categories.reduce((acc, e) => `${acc} ${e},`, '').slice(0, -1)

  return (
    <Layout location={location} title="">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Background color="light">
        <Container>
          <Box>
            <Article className="article">
              <header>
                <h1>{post.frontmatter.title}</h1>
                <div>
                  {`
                  ${post.frontmatter.date} - 
                  ${timeToRead(post.html.toString())} min read - 
                  ${categories}
                  `}
                </div>
              </header>

              <section dangerouslySetInnerHTML={{ __html: post.html }} />

              <footer>
                <nav>
                  <ul>
                    <li>
                      {previous && (
                        <StyledLink to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </StyledLink>
                      )}
                    </li>
                    <li>
                      {next && (
                        <StyledLink to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </StyledLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </footer>

            </Article>
          </Box>
        </Container>
      </Background>

      <Background color="light">
        <Container>
          <Box>
            <Disqus config={disqusConfig} />
          </Box>
        </Container>
      </Background>

    </Layout>

  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        categories
        description
      }
    }
  }
`
