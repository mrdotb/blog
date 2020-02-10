import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import OctagonAnimation from './octagonAnimation'
import Header from './header'
import Footer from './footer'

// Fixed footer https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css
const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const SiteHeader = styled.div`
  flex: none;
`
const SiteContent = styled.div`
  flex: 1 0 auto;
  width: 100%;
  &::after {
    content: \\00a0,
    display: block,
    height: 0px,
    visibility: hidden
  }
`
const SiteFooter = styled.div`
  flex: none;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <SiteContainer>
        <SiteHeader>
          <Header />
          <OctagonAnimation />
        </SiteHeader>
        <SiteContent>{children}</SiteContent>
        <SiteFooter>
          <Footer />
        </SiteFooter>
      </SiteContainer>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout