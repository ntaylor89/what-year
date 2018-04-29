import React from 'react'
import { NavLink, Toolbar } from 'rebass'
import { Header, Nav } from './ui'
import { loginPath } from '../data/spotify'

const Head = () => (
  <Header>
    <Toolbar color='black' bg='white'>
      <NavLink>What Year</NavLink>

      <Nav>
        <NavLink href={loginPath}>Login</NavLink>
      </Nav>
    </Toolbar>
  </Header>
)

export default Head
