import { urlWithQuery } from './helpers'
import _toPairs from 'lodash/toPairs'
import _uniqBy from 'lodash/uniqBy'

const data = {
  baseURL: 'https://api.spotify.com/v1',
  loginURL: 'https://accounts.spotify.com/authorize',
  loginParams: {
    client_id: 'c8fa852cf18c43f9a328c02e00315c9c',
    client_secret: '7ea3249a2eb84ceabe46d09ab76eda6c',
    redirect_uri: 'http://localhost:3000/callback/',
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
  console.log(query)
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
