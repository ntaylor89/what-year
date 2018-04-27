import React, { Component } from 'react'
import { Provider } from 'rebass'
import WhatYear from './WhatYear'
import theme from './theme'

class App extends Component {
  render () {
    return (
      <Provider theme={theme}>
        <WhatYear />
      </Provider>
    )
  }
}

export default App
