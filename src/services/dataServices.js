import {
  basicFetch,
  api,
  headLines,
  everything,
  country,
  query,
  apiKey
} from './utils'

export const dataMethod = () =>
  basicFetch('GET', `${api}${headLines}${country}${apiKey}`, {})

export const searchMethod = ({ search, page }) =>
  basicFetch(
    'GET',
    `${api}${everything}${query}${search}&page=${page || 1}${apiKey}`,
    {}
  )
