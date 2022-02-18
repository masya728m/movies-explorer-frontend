import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';

function Movies(props) {
  const [showMore, setShowMore] = useState(false);
  const handleExpandButtonClick = () => {
    setShowMore(true);
  }
  useEffect(() => {
    setShowMore(false);
  }, [props.render])
  return (
    <main>
      <SearchForm/>
      <MoviesCardList showFullList={showMore}>
        {props.children}
      </MoviesCardList>
      {!showMore && <button onClick={handleExpandButtonClick} className="movies__expand-button">Ещё</button>}
    </main>
  );
}

export default Movies;
