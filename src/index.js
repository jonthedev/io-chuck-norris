import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { JokesProvider } from './context/jokes_context'

ReactDOM.render(
  <React.StrictMode>
    <JokesProvider>
      <App />
    </JokesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
