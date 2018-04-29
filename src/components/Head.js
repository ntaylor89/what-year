import React from 'react'
import { NavLink, Toolbar } from 'rebass'
import { Header, Nav } from './ui'
import { loginPath } from '../data/spotify'
import { isLoggedIn } from '../data/helpers'

const Head = () => (
  <Header>
    <Toolbar color='black' bg='white'>
      <NavLink>What Year</NavLink>

      {isLoggedIn()
        ? ''
        : (<Nav><NavLink href={loginPath}>Login</NavLink></Nav>)
      }

    </Toolbar>
  </Header>
)

export default Head
