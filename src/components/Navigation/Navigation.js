import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';
import React from 'react';

function Navigation(props) {
  const location = useLocation();

  const [expandMenu, setExpandMenu] = React.useState(false);

  const handleExpandButtonClick = () => {
    setExpandMenu(!expandMenu);
  };

  if (!props.loggedIn)
    return (
      <>
        <Link to="/signup" type="button" className="header__register-button">
          Регистрация
        </Link>
        <Link to="/signin" type="button" className="header__button">
          Войти
        </Link>
      </>
    );

  return (
    <div className="navigation">
      <button onClick={handleExpandButtonClick} className="navigation__expand-button"/>
      <div className={`navigation__links ${expandMenu && 'navigation__links_expanded'}`}>
        <button onClick={handleExpandButtonClick} className="navigation__links__exit-button"/>
        <Link
          to="/"
          className={`navigation__link-button ${location.pathname === '/' && 'navigation__link-button_type_active'}`}>
          Главная
        </Link>
        <Link
          to="/movies"
          className={`navigation__link-button ${location.pathname === '/movies' && 'navigation__link-button_type_active'}`}>
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`navigation__link-button ${location.pathname === '/saved-movies' && 'navigation__link-button_type_active'}`}>
          Сохраненные фильмы
        </Link>
        <Link
          to="/profile" type="button"
          className={`navigation__account-button ${location.pathname === '/profile' && 'navigation__account-button_type_active'}`}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
