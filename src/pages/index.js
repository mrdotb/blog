import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

import { Bio, Post } from '../components'
import { Layout, SEO, Container } from '../elements'

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 3rem 0;
  flex-wrap: wrap;
  ${MOBILE_MEDIA_QUERY} {
    flex-wrap: wrap-reverse;
  }
`
const PostsBox = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 47rem;
`
const BioBox = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 12rem;
  margin-left: 1rem;
  @media only screen and (max-width:${props => props.theme.breakpoints.m}) {
    margin-left: 0; 
  }
`

const BlogIndex = ({ location, data }) => (
  <Layout location={location} title={'Software Developer & Problem Solver'}>
    <SEO title="Home" />
    <Container>
      <Box>
        <PostsBox>
          <h2>Latest posts</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => <Post key={node.fields.slug} node={node} />)}
        </PostsBox>
        <BioBox>
          <Bio />
        </BioBox>
      </Box>
    </Container>
  </Layout>
)

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    allMarkdownRemark: PropTypes.object.isRequired
  }),
  location: PropTypes.object.isRequired,
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
