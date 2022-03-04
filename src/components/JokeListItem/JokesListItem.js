import './JokesListItem.css'

const JokesListItem = ({ joke }) => {
  return (
    <li className='jokes-list-item'>
      <p>{joke.joke}</p>
      <div className='jokes-list-item-action'>
        <button className='btn'>Add to favourites</button>
        <span>star</span>
      </div>
    </li>
  )
}

export default JokesListItem
