import React from 'react'
import { NavLink, Toolbar } from 'rebass'
import { Header, Nav } from './ui'

const Head = () => (
  <Header>
    <Toolbar color='black' bg='white'>
      <NavLink>What Year</NavLink>

      <Nav ml='auto'>
        <NavLink>Login</NavLink>
      </Nav>
    </Toolbar>
  </Header>
)

export default Head
