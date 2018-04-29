import React from 'react'
import AlbumGrid from './AlbumGrid'

const Albums = ({ albums, type = 'grid' }) => (
  (type === 'grid')
    ? <AlbumGrid albums={albums} />
    : <AlbumGrid albums={albums} />
)

export default Albums
