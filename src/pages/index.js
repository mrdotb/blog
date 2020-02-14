import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { Container, Content as ContentBase } from '../components/utils'

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)}
`
const Post = ({node}) => (
  <article>
    <header>
      <Title>
        <Link to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </Title>
      <small>{node.frontmatter.date}</small>
    </header>
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </section>
  </article>
)
Post.propTypes = {
  node: PropTypes.object,
}

const Content = styled(ContentBase)`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${rhythm(2)} 0;
`
const BioBloc = styled.div`
  flex: 1 1 ${rhythm(8)};
  padding: 0 ${rhythm(0.5)};
`
const PostsBloc = styled.div`
  flex: 1 1 ${rhythm(26)};
  padding: 0 ${rhythm(0.5)};
`
class BlogIndex extends React.Component {
  render() {
    const { location, data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location}>
        <SEO title="All posts" description="meta descript" />
        <Container>
          <Content>
            <PostsBloc>
              {posts.map(({ node }) => <Post key={node.fields.slug} node={node} />)}
            </PostsBloc>
            <BioBloc>
              <Bio />
            </BioBloc>
          </Content>
        </Container>
      </Layout>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fileAbsolutePath: {regex: "/content\\/blog/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
