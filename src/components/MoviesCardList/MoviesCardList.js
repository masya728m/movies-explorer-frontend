import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <div className={`movies__card-list ${!props.showFullList && 'movies__card-list_limited'}`}>
      {props.children}
    </div>
  );
}

export default MoviesCardList;
