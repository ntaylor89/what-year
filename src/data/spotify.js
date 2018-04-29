import { urlWithQuery } from './helpers'
import _toPairs from 'lodash/toPairs'
import _uniqBy from 'lodash/uniqBy'
import secrets from './secrets'

const data = {
  baseURL: 'https://api.spotify.com/v1',
  loginURL: 'https://accounts.spotify.com/authorize',
  loginParams: {
    ...secrets,
    response_type: 'token',
    scope: 'user-read-email'
  }
}

const loginPath = urlWithQuery(data.loginURL, data.loginParams)

// Generic search function
const search = async (year, params, token) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  const searchPath = urlWithQuery(`${data.baseURL}/search`, params)

  const result = await fetch(searchPath, { headers })
  return result.json()
}

const albumSearch = async (year, token, options = {}) => {
  const query = encodeURI(
    _toPairs({ year, ...options })
      .map(pair => pair.join(':'))
      .join(' '))
  const params = {
    query,
    type: 'album',
    market: 'US',
    limit: 50
  }
  const pageOffsets = [0, 100, 150]
  const getPage = (offset) => search(year, Object.assign({ offset }, params), token)

  const results = await Promise.all(pageOffsets.map(n => getPage(n)))
  console.log(results)
  const albums = results.map(r => r.albums.items)
    .reduce((a, b) => a.concat(b), [])
    .filter(a => a.album_type === 'album')

  return _uniqBy(albums, 'name')

}

export { albumSearch, search, loginPath }
