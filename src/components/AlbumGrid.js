import React from 'react'
import { Flex } from 'rebass'
import AlbumCard from './AlbumCard'

const AlbumGrid = ({ albums }) => (
  <Flex flexWrap='wrap' py={4}>
    {albums.map(album => (
      <AlbumCard album={album} key={album.id} />
    ))}
  </Flex>
)

export default AlbumGrid
