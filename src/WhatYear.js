import React from 'react'
import { Container } from 'rebass'
import Albums from './containers/Albums'
import Foot from './components/Foot'
import Head from './components/Head'

const WhatYear = () => (
  <Container mx='auto' px={5}>
    <Head />
    <Albums />
    <Foot />
  </Container>
)

export default WhatYear
