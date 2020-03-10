import React from 'react'
import styled from 'styled-components'
import get from 'lodash.get'
import uniq from 'lodash.uniq'
import PropTypes from 'prop-types'

import { Card as CardContainerBase } from '../components'

const CardContainer = styled(CardContainerBase)`
  max-width: 45rem;
  margin-bottom: 2rem;
  align-self: ${props => props.end ? 'flex-end' : 'flex-start'}
`
const CardContent = styled.div`
  & > header {
    display: flex;
    justify-content: space-between;
    & > div {
      text-transform: uppercase;
      color: ${props => props.theme.colors.grey};
    }
  }
  & > main {
    padding: .7rem 0;
    & > h3 {
      margin: 0;
    }
    & > div {
      color: ${props => props.theme.colors.grey};
    }
  }
  & > footer {
    display: flex;
    flex-wrap: wrap;
    & > div {
      font-family: 'devicons';
      font-size: 1rem;
      border: solid 1px ${props => props.theme.colors.black};
      border-radius: 20px;
      padding: .1rem .6rem .3rem;
      margin: .2rem .2rem;
    }
  }
`
const Card = ({data, end}) => {
  const { image, category, url, link, description, time, tags } = data

  return (
    <CardContainer end={end % 2} shadow="dark" fluid={image.childImageSharp.fluid}>
      <CardContent>
        <header>
          <div>{category}</div>
          <a href={url}>{link}</a>
        </header>
        <main>
          <h3>{description}</h3>
          <div>{time}</div>
        </main>
        <footer>
          {tags.map(tag => <div key={tag} dangerouslySetInnerHTML={{__html: tag}} />)}
        </footer>
      </CardContent>
    </CardContainer>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  end: PropTypes.number,
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`
const Year = styled.div`
  align-self: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`

function groupByYear(data) {
  const uniqYears = uniq(data.map(e => e.node.frontmatter.year)).sort((a, b) => b - a)

  return data.reduce((acc, e) => {
    const year = e.node.frontmatter.year
    const index = acc.findIndex(ee => get(ee, '[0].node.frontmatter.year') === year)

    if (index === -1) {
      acc.splice(uniqYears.indexOf(year), 0, [e])
    } else {
      acc[index].splice(e.node.frontmatter.order - 1, 0, e)
    }

    return acc
  }, [])
}

const Experiences = ({data}) => {
  let end = 0

  return (
    <>
      {groupByYear(data).map(year =>
        <Box key={year[0].node.frontmatter.year}>
          <Year>{year[0].node.frontmatter.year}</Year>
          {year.map(project =>
            <Card end={end++} key={project.node.id} data={project.node.frontmatter} />
          )}
        </Box>
      )}
    </>
  )
}

Experiences.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Experiences
