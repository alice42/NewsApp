import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  INFO_SUCCESS,
  INFO_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../actions/userActions'

const initialState = {
  username: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        username: action.data.identifiant,
        error: null
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.data
      }
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}

export default reducer
