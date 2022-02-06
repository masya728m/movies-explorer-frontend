import './FormExit.css';
import {Link} from 'react-router-dom';

function FormExit(props) {
  return (
    <div className="form-exit">
      <h2 className="form-exit__description">{props.navigationPurpose}</h2>
      <Link to={props.navigateTo} className="form-exit__button">
        {props.navigationText}
      </Link>
    </div>
  );
}

export default FormExit;
