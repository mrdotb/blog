import React from 'react'
import styled from 'styled-components'

import Ansible from '../../content/assets/ansible.inline.svg'
import Ava from '../../content/assets/ava.inline.svg'
import Cmd from '../../content/assets/cmd-line.inline.svg'
import Docker from '../../content/assets/docker.inline.svg'
import Gatsby from '../../content/assets/gatsby.inline.svg'
import Gimp from '../../content/assets/gimp.inline.svg'
import Git from '../../content/assets/git.inline.svg'
import Graphql from '../../content/assets/graphql.inline.svg'
import Inkscape from '../../content/assets/inkscape.inline.svg'
import Nodejs from '../../content/assets/nodejs.inline.svg'
import Pg from '../../content/assets/postgresql.inline.svg'
import Phoenix from '../../content/assets/phoenix.inline.svg'
import Pug from '../../content/assets/pug.inline.svg'
import Reakt from '../../content/assets/react.inline.svg'
import Redux from '../../content/assets/redux.inline.svg'
import Ruby from '../../content/assets/ruby.inline.svg'
import Ubuntu from '../../content/assets/ubuntu.inline.svg'
import Vim from '../../content/assets/vim.inline.svg'

const Box = styled.div`
  display: flex;
  jusitfy-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Thing = styled.div`
  padding: 0.5rem;
`
const iconSize = '4rem'
const Things = () => (
  <Box>
    <Thing><Ansible style={{width: iconSize}} /></Thing>
    <Thing><Ava style={{width: iconSize}} /></Thing>
    <Thing><Cmd style={{width: iconSize}}/></Thing>
    <Thing><Docker style={{width: iconSize}}/></Thing>
    <Thing><Gatsby style={{width: iconSize}}/></Thing>
    <Thing><Gimp style={{width: iconSize}}/></Thing>
    <Thing><Git style={{width: iconSize}}/></Thing>
    <Thing><Graphql style={{width: iconSize}}/></Thing>
    <Thing><Inkscape style={{width: iconSize}}/></Thing>
    <Thing><Pg style={{width: iconSize}}/></Thing>
    <Thing><Phoenix style={{width: iconSize}}/></Thing>
    <Thing><Pug style={{width: iconSize}}/></Thing>
    <Thing><Reakt style={{width: iconSize}}/></Thing>
    <Thing><Redux style={{width: iconSize}}/></Thing>
    <Thing><Ruby style={{width: iconSize}}/></Thing>
    <Thing><Nodejs style={{width: iconSize}}/></Thing>
    <Thing><Ubuntu style={{width: iconSize}}/></Thing>
    <Thing><Vim style={{width: iconSize}}/></Thing>
  </Box>
)

export default Things
