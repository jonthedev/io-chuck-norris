import './App.css'
import { useJokesContext } from './context/jokes_context'

function App() {
  const { fetchJokes } = useJokesContext()

  return (
    <div className='App'>
      <button onClick={() => fetchJokes()}>Load Jokes</button>
    </div>
  )
}

export default App
