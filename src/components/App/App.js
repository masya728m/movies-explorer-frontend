import './App.css';
import '../Header/Header';
import Header from '../Header/Header';
import Main from '../Main/Main';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css'
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import MoviesCard from '../MoviesCard/MoviesCard';

function App() {
  let movies = [];

  for (let i = 0; i < 8; ++i)
    movies.push({
      _id: i,
      title: 'ПУЛЯ: Возвращение',
      duration: 60 * 60,
      image: 'https://i.ytimg.com/vi/mM4DOcfW44E/hqdefault.jpg'
    })

  return (
    <div className="app">
      <Header>
        <button className="header__register-button">
          Регистрация
        </button>
        <button className="header__login-button">
          Войти
        </button>
      </Header>
      {/*<Main/>*/}
      <Movies>
        {
          movies.map(
            (movie) =>
              (
                <MoviesCard
                  key={movie._id}
                  title={movie.title}
                  duration={movie.duration}
                  image={movie.image}
                />
              )
          )
        }
      </Movies>
      <Footer/>
    </div>
  );
}

export default App;
