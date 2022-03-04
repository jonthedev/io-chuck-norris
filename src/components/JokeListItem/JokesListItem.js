import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './JokesListItem.css'

const JokesListItem = ({ joke }) => {
  const [isFavourite, setIsFavourite] = useState(false)

  const addToFavouriteHandler = () => {
    setIsFavourite(!isFavourite)
  }

  return (
    <li className='jokes-list-item'>
      <p>{joke.joke}</p>
      <div className='jokes-list-item-action'>
        <button className='btn' onClick={addToFavouriteHandler}>
          {isFavourite
            ? 'Remove from favourites.'
            : 'Add to favourites'}
        </button>
        <span>
          <FaStar style={isFavourite && { color: 'gold' }} />
        </span>
      </div>
    </li>
  )
}

export default JokesListItem
