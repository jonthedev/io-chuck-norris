const JokesList = ({ jokes = [] }) => {
  return (
    <div className='jokes-list'>
      {jokes.map(joke => {
        return <p key={joke.id}>{joke.joke}</p>
      })}
    </div>
  )
}

export default JokesList
