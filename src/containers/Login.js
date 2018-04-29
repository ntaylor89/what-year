import React, { Component } from 'react'
import { Link, Measure } from 'rebass'
import { paramsFromHash } from '../data/helpers'
import { loginPath } from '../data/spotify'
import Search from './Search'

class Login extends Component {
  constructor (props) {
    super(props)
    const params = paramsFromHash()
    console.log(params)
    const token = params.access_token || ''
    this.state = { token }
  }


  render () {
    if (this.state.token) {
      return <Search token={this.state.token} />
    } else {
      return <Measure mx='auto' pl={5}>Please  <Link href={loginPath}>Login</Link> to continue</Measure>
    }
  }
}

export default Login
