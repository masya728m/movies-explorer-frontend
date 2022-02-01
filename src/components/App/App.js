import './App.css';
import '../Header/Header';
import Header from '../Header/Header';
import Main from '../Main/Main';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css'

function App() {
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
      <Main/>
    </div>
  );
}

export default App;
