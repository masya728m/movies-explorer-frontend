import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main>
      <SearchForm/>
      <MoviesCardList>
        {props.children}
      </MoviesCardList>
    </main>
  );
}

export default Movies;
