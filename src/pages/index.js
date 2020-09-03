import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Bio, Post, Contact } from '../components'
import { Layout, SEO, Container, Background } from '../elements'

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0;
  flex-wrap: wrap;
`

const BlogIndex = ({ location, data }) => (
  <Layout location={location} title={'Freelance Web Developer'}>
    <SEO title="Home" />

    <Background color="light">
      <Container>
        <Box>
          <Bio />
        </Box>
      </Container>
    </Background>

    <Background color="dark">
      <Container>
        <Box>
          <Contact />
        </Box>
      </Container>
    </Background>


    <Background color="light">
      <Container>
        <Box>
          <h2>My Latest Posts</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => <Post key={node.frontmatter.title} node={node} />)}
        </Box>
      </Container>
    </Background>


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
