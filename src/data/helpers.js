import _toPairs from 'lodash/toPairs'

const toQuery = (params, sep = '=') => (
  _toPairs(params)
    .map(([k, v]) => `${k}${sep}${v}`)
    .reduce((accum, current) => `${accum}&${current}`)
)

const urlWithQuery = (path, queryParams) => (
  `${path}?${toQuery(queryParams)}`
)

export { toQuery, urlWithQuery }
