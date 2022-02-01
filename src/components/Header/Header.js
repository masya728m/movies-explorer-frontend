import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo"/>
      <div className="header__side-container">
        {props.children}
      </div>
    </header>
  );
}

export default Header;
