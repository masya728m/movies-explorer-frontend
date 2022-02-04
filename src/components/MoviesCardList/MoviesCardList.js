import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <div className="movies">
      {props.children}
    </div>
  );
}

export default MoviesCardList;
