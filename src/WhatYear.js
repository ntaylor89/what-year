import React from 'react'
import { Container } from 'rebass'
import Foot from './components/Foot'
import Head from './components/Head'
import Login from './containers/Login'
import Search from './containers/Search'

const WhatYear = () => (
  <Container mx='auto' px={5}>
    <Head />
    <Login />
    <Foot />
  </Container>
)

export default WhatYear
