import _toPairs from 'lodash/toPairs'
import _fromPairs from 'lodash/fromPairs'

const toQuery = (params, sep = '=') => (
  _toPairs(params)
    .map(([k, v]) => `${k}${sep}${v}`)
    .reduce((accum, current) => `${accum}&${current}`)
)

const paramsFromHash = () => {
  if (!window.location.hash) return {}

  return _fromPairs(
    window.location.hash.replace('#', '')
      .split('&')
      .map(p => p.split('='))
  )
}

const isLoggedIn = () => !!(paramsFromHash().access_token)

const urlWithQuery = (path, queryParams) => (
  `${path}?${toQuery(queryParams)}`
)

export { toQuery, paramsFromHash, urlWithQuery, isLoggedIn }
