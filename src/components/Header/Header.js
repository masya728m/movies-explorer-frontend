import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className={`header__logo ${props.onlyLogo && 'header__logo_type_single'}`} alt="logo"/>
      {!props.onlyLogo && (
        <div className="header__side-container">
          {props.children ? props.children : (<></>)}
        </div>
      )}
    </header>
  );
}

export default Header;
