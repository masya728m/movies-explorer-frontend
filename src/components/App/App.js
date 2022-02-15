import './App.css';
import '../Header/Header';
import Main from '../Main/Main';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import Movies from '../Movies/Movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import React, {useState} from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function App() {
  let movieCards = [];

  for (let i = 0; i < 8; ++i)
    movieCards.push({
      _id: i * 100,
      title: 'ПУЛЯ: Возвращение',
      duration: 60 * 60,
      saved: false,
      image: 'https://i.ytimg.com/vi/mM4DOcfW44E/hqdefault.jpg'
    });

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState(movieCards);
  const location = useLocation();

  React.useEffect(() => {
    navigate('/');
    setLoggedIn(false);
    /** TODO: add business logic */
  }, []);

  const handleLoginSubmit = (inputValues) => {
    navigate('/movies');
    setLoggedIn(true);
  };

  const handleRegisterSubmit = (inputValues) => {
    navigate('/signin');
  };

  const handleProfileEdit = (inputvalues) => {
    /** TODO: add business logic */
  };

  const handleExit = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const handleMovieSave = (movieId) => {
    const newMovies = Array.from(movies)
      .map(movieCard => movieCard._id === movieId
        ? {
          ...movieCard,
          saved: !movieCard.saved
        }
        : movieCard);
    setMovies(newMovies);
  };

  return (
    <div className="app">
      {
        !location.pathname.startsWith('/sign') &&
        <Header>
          <Navigation loggedIn={loggedIn}/>
        </Header>
      }
      <Routes>
        <Route
          exact path="/movies"
          element={
            <Movies>
              {
                movies.map(
                  (movie) =>
                    (
                      <MoviesCard
                        onSave={handleMovieSave}
                        key={movie._id}
                        movieId={movie._id}
                        title={movie.title}
                        duration={movie.duration}
                        image={movie.image}
                        saved={movie.saved}
                      />
                    )
                )
              }
            </Movies>
          }
        />
        <Route
          exact path="/saved-movies"
          element={
            <Movies>
              {
                movies.filter(movie => movie.saved).map(
                  (movie) =>
                    (
                      <MoviesCard
                        onSave={handleMovieSave}
                        key={movie._id}
                        title={movie.title}
                        duration={movie.duration}
                        image={movie.image}
                        saved={true}
                      />
                    )
                )
              }
            </Movies>
          }
        />
        <Route
          exact path="/profile"
          element={<Profile onProfileEdit={handleProfileEdit} onExit={handleExit} title="Ну здарова!"/>}
        />
        <Route
          exact path="/signin"
          element={<Login onSubmit={handleLoginSubmit}/>}
        />
        <Route
          exact path="/signup"
          element={<Register onSubmit={handleRegisterSubmit}/>}
        />
        <Route
          exact path="/"
          element={<Main/>}
        />
      </Routes>
      {
        !location.pathname.startsWith('/sign') &&
        <Footer/>
      }
    </div>
  );
}

export default App;
