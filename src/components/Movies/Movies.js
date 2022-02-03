import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(props) {
  return (
    <main>
      <SearchForm/>
      <MoviesCardList>
        {
          props
            ?.movies
            ?.map(
              movie => <MoviesCard/>
            )
        }
      </MoviesCardList>
    </main>
  );
}

export default Movies;
