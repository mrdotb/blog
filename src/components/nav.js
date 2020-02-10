import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

const Nav = () => (
  nav.map(e => (
    <Link
      className="darklink"
      key={e.name}
      to={e.to}
      style={{
        padding: rhythm(1 / 3),
      }}
    >
      {e.name}
    </Link>
  ))
)

export default Nav
