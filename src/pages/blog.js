import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {Post} from '../components'
import {Layout, SEO, Container} from '../elements'
import { rhythm } from '../../config/typography'

const Content = styled.div`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${rhythm(2)} 0;
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
      <Layout location={location} title="A mix of thoughts & tutorials">
        <SEO title="Blog" />
        <Container>
          <Content>
            <PostsBloc>
              {posts.map(({ node }) => <Post key={node.fields.slug} node={node} />)}
            </PostsBloc>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {collection: { eq: "blog" }}}) {
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
