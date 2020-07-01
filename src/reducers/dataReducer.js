import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../actions/dataActions'
import { LOGOUT_SUCCESS } from '../actions/userActions'

const initialState = {
  articles: null,
  totalArticles: 0,
  articlesSearch: null,
  totalArticlesSearch: 0,
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
        totalArticles: action.result.data.totalResults,
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
        totalArticlesSearch: action.result.data.totalResults,
        fetching: false
      }
    case SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}

export default reducer
