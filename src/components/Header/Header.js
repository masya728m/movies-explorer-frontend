import './Header.css';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.onlyLogo && 'header_type_single'}`}>
      <Link to="/" className="header__logo"/>
      {!props.onlyLogo && (
        props.children ? props.children : (<></>)
      )}
    </header>
  );
}

export default Header;
