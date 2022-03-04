import React, { useContext, useEffect, useReducer } from 'react'
import jokes_reducer from '../reducers/jokes_reducer'

import {
  JOKES_ERROR,
  JOKES_FETCH,
  JOKES_LOADING
} from '../utils/actions'

import { URL } from '../utils/constants'

const initialState = {
  jokes_loading: false,
  jokes_error: false,
  favourites: [],
  jokes: []
}

const JokesContext = React.createContext()

export const JokesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jokes_reducer, initialState)

  async function fetchJokes() {
    dispatch({ type: JOKES_LOADING })
    try {
      const response = await fetch(URL)
      const json = await response.json()
      const data = json.value
      dispatch({ type: JOKES_FETCH, payload: data })
    } catch (error) {
      dispatch({ type: JOKES_ERROR })
    }
  }

  const addToFavourites = () => {}

  return (
    <JokesContext.Provider
      value={{
        ...state,
        fetchJokes
      }}>
      {children}
    </JokesContext.Provider>
  )
}

export const useJokesContext = () => {
  return useContext(JokesContext)
}
