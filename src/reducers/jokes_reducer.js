import {
  JOKES_LOADING,
  JOKES_ERROR,
  JOKES_FETCH
} from '../utils/actions'

const jokes_reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case JOKES_LOADING:
      return { ...state, jokes_loading: true }

    case JOKES_FETCH:
      return {
        ...state,
        jokes_loading: false,
        jokes_error: false,
        jokes: payload
      }

    case JOKES_ERROR:
      return {
        ...state,
        jokes_loading: false,
        jokes_error: true
      }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default jokes_reducer
