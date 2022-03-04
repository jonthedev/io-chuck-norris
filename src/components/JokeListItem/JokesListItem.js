import './JokesListItem.css'

const JokesListItem = ({ joke }) => {
  return (
    <li className='jokes-list-item'>
      <p>{joke.joke}</p>
    </li>
  )
}

export default JokesListItem
