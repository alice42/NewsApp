export const DATA_REQUEST = 'DATA_REQUEST'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_ERROR = 'DATA_ERROR'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_ERROR = 'SEARCH_ERROR'

export const UPDATE_DATA = 'UPDATE_DATA'

export const dataRequest = () => ({ type: DATA_REQUEST })

export const search = (search, page) => {
  return { type: SEARCH_REQUEST, search, page }
}

export const updateData = (newData, dataType) => {
  return { type: UPDATE_DATA, newData, dataType }
}
