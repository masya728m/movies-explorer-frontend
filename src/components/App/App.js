import './App.css';
import '../Header/Header';
import Main from '../Main/Main';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import MoviesCard from '../MoviesCard/MoviesCard';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import React from 'react';
import Header from '../Header/Header';

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

  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/movies"
          components={
            <>
              <Link to="/signup" type="button" className="header__register-button">
                Регистрация
              </Link>
              <Link to="/signin" type="button" className="header__login-button">
                Войти
              </Link>
              <Header>
              </Header>
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
            </>
          }
        />
        <Route
          exact path="/saved-movies"
          element={
            <>
              <Link to="/signup" type="button" className="header__register-button">
                Регистрация
              </Link>
              <Link to="/signin" type="button" className="header__login-button">
                Войти
              </Link>
              <Header>
              </Header>
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
            </>
          }
        />
        <Route
          exact path="/profile"
          element={
            <>
              <Header/>
              <Profile/>
            </>
          }
        />
        <Route
          exact path="/signin"
          element={
            <>
              <Login/>
            </>
          }
        />
        <Route
          exact path="/signup"
          element={
            <>
              <Register/>
            </>
          }
        />
        <Route
          exact path="/"
          element={
            <>
              <Header>
                <Link to="/signup" type="button" className="header__register-button">
                  Регистрация
                </Link>
                <Link to="/signin" type="button" className="header__login-button">
                  Войти
                </Link>
              </Header>
              <Main/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
