import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'

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

export default Post
