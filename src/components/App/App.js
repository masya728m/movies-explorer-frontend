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
  let movies = [];

  for (let i = 0; i < 8; ++i)
    movies.push({
      _id: i,
      title: 'ПУЛЯ: Возвращение',
      duration: 60 * 60,
      image: 'https://i.ytimg.com/vi/mM4DOcfW44E/hqdefault.jpg'
    });

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    navigate('/');
    setLoggedIn(false);
  }, []);

  const handleLoginSubmit = (inputValues) => {
    navigate('/movies');
    setLoggedIn(true);
  };

  const handleRegisterSubmit = (inputValues) => {
    navigate('/signin');
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
                        key={movie._id}
                        title={movie.title}
                        duration={movie.duration}
                        image={movie.image}
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
          }
        />
        <Route
          exact path="/profile"
          element={<Profile title="Ну здарова!"/>}
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
