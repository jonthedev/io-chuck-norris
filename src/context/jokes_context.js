import React, { useContext, useReducer } from 'react'

import jokes_reducer from '../reducers/jokes_reducer'

const initialState = {
  jokes_loading: false,
  jokes_error: false,
  jokes: []
}

const JokesContext = React.createContext()

export const JokesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jokes_reducer, initialState)

  return (
    <JokesContext.Provider
      value={{
        ...state
      }}>
      {children}
    </JokesContext.Provider>
  )
}

export const useJokesContext = () => {
  return useContext(JokesContext)
}
