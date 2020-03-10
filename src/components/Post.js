import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Post = ({node}) => (
  <article>
    <header>
      <h3>
        <Link to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </h3>
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
