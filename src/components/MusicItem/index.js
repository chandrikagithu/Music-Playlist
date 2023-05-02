import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {details, onClickDeleteTrack} = props

  const {id, name, genre, imageUrl, duration} = details

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="music-list-item">
      <div className="track-info-container">
        <img className="music-track-image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={50} />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
