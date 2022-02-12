import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className={`header ${props.onlyLogo && 'header_type_single'}`}>
      <img src={logo} className="header__logo" alt="logo"/>
      {!props.onlyLogo && (
        props.children ? props.children : (<></>)
      )}
    </header>
  );
}

export default Header;
