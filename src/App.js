import './App.css'
import JokesList from './components/JokesList/JokesList'
import { useJokesContext } from './context/jokes_context'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const { fetchJokes, jokes } = useJokesContext()
  const [favourites, setFavourites] = useLocalStorage(
    'favourites',
    []
  )

  return (
    <div className='App'>
      <button className='btn' onClick={() => fetchJokes()}>
        Load Jokes
      </button>
      <JokesList jokes={jokes} />
    </div>
  )
}

export default App
