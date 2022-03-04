import JokesListItem from '../JokeListItem/JokesListItem'

const JokesList = ({ jokes = [] }) => {
  return (
    <ul className='jokes-list'>
      {jokes.map(joke => {
        return <JokesListItem key={joke.id} joke={joke} />
      })}
    </ul>
  )
}

export default JokesList
