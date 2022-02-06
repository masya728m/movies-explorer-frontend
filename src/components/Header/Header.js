import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className={`header ${props.onlyLogo && 'header_type_single'}`}>
      <img src={logo} className="header__logo" alt="logo"/>
      {!props.onlyLogo && (
        <div className="header__side-container">
          {props.children ? props.children : (<></>)}
        </div>
      )}
    </header>
  );
}

export default Header;
