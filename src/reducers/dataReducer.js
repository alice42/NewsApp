import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  UPDATE_DATA
} from '../actions/dataActions'
import { LOGOUT_SUCCESS } from '../actions/userActions'

const initialState = {
  articles: null,
  totalarticles: 0,
  articlesSearch: null,
  totalarticlesSearch: 0,
  error: null,
  fetching: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case DATA_SUCCESS:
      return {
        ...state,
        articles: action.result.data.articles,
        totalarticles: action.result.data.totalResults,
        fetching: false
      }
    case DATA_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case SEARCH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        articlesSearch: action.result.data.articles,
        totalarticlesSearch:
          action.result.data.totalResults > 100
            ? 100
            : action.result.data.totalResults,
        fetching: false
      }
    case SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case UPDATE_DATA:
      return {
        ...state,
        [`${action.dataType}`]: action.newData,
        [`total${action.dataType}`]: state[`total${action.dataType}`] - 1,
        fetching: false
      }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}

export default reducer
