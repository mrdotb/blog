import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import {Bio, Post} from '../components'
import {Layout, SEO, Container, Content as ContentBase} from '../elements'
import { rhythm } from '../../config/typography'

const Content = styled(ContentBase)`
  justify-content: center;
  flex-direction: row;
  padding: ${rhythm(2)} 0;
  flex-wrap: wrap;
  ${MOBILE_MEDIA_QUERY} {
    flex-wrap: wrap-reverse;
  }
`
const BioBloc = styled.div`
  flex: 1 1 ${rhythm(8)};
  padding: 0 ${rhythm(0.5)};
  ${MOBILE_MEDIA_QUERY} {
    flex: 1;
  }
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
        <SEO title="Home" />
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
