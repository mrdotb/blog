import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {Container, Content} from '../components/utils'
import { rhythm, scale } from '../utils/typography'

const BPContent = styled(Content)`
  padding: ${rhythm(2)} ${rhythm(0.5)};
`
const Title = styled.h1`
  margin-bottom: 0;
`
const Date = styled.p`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  display: block,
  marginBottom: ${rhythm(1)},
`
const Pagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const pathname = this.props.location.pathname
    const disqusConfig = {
      url: siteUrl + pathname,
      identifier: post.id,
      title: post.frontmatter.title,
    }
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <BPContent>
            <article>
              <header>
                <Title>{post.frontmatter.title}</Title>
                <Date>{post.frontmatter.date}</Date>
              </header>

              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <footer>
                <Disqus config={disqusConfig} />
              </footer>
            </article>
          </BPContent>
        </Container>

        <nav>
          <Pagination>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </Pagination>
        </nav>
      </Layout>
    )
  }
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
        description
      }
    }
  }
`
