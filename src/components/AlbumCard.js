import React from 'react'
import _get from 'lodash/get'
import { Box, Image, Link } from 'rebass'
import { Dd, Dl, Dt } from './ui'

const artistName = (album) => _get(album, 'artists[0].name')
const imageUrl = (album) => _get(album, 'images[1].url')
const albumLink = (album) => _get(album, 'external_urls.spotify')

const AlbumCard = ({ album }) => (
  <Box width={1/4} p={1}>
    <Link href={albumLink(album)} target='_blank'>
      <Image src={imageUrl(album)} />
    </Link>
    <Dl>
      <Dt display='none'>Title</Dt>
      <Dd center>{album.name}</Dd>
      <Dt display='none'>Artist</Dt>
      <Dd center color='gray'>{artistName(album)}</Dd>
    </Dl>
  </Box>
)

export default AlbumCard
