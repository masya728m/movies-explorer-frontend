import './MoviesCard.css';

function MoviesCard(props) {
  const hours = props.duration / 3600;
  const seconds = props.duration % 60;
  const minutes = seconds / 60;
  const handleSaveButtonClick = () => {
    props.onSave(props.movieId);
  };
  return (
    <div className="movies-card">
      <h2 className="movies-card__title">{props.title}</h2>
      <button onClick={handleSaveButtonClick}
              className={`${props.displayDeleteButton ? 'movies-card__delete-button' : 'movies-card__save-button'} ${props.saved && 'movies-card__save_button_type_active'}`}/>
      <h2 className="movies-card__duration">
        {
          (hours) ? `${hours}ч ` : '' +
          (minutes) ? `${minutes}м ` : ''
        }
      </h2>
      <img className="movies-card__image" src={props.image} alt={props.title}/>
    </div>
  );
}

export default MoviesCard;
