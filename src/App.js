import './App.css'
import JokesList from './components/JokesList/JokesList'
import { useJokesContext } from './context/jokes_context'

function App() {
  const { fetchJokes, jokes } = useJokesContext()

  return (
    <div className='App'>
      <button onClick={() => fetchJokes()}>Load Jokes</button>
      <JokesList jokes={jokes} />
    </div>
  )
}

export default App
