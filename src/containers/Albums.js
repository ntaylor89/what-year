import React, { Component } from 'react'
import _take from 'lodash/take'
import AlbumGrid from '../components/AlbumGrid'
import payload from './../radiohead_data.json'

class Albums extends Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: _take(payload.albums.items, 16)
    }
  }

  render (props) {
    const { albums } = this.state
    return (
      <AlbumGrid albums={albums} />
    )
  }
}

export default Albums
