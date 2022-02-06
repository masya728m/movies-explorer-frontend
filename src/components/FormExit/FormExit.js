import './FormExit.css';
import {Link} from 'react-router-dom';

function FormExit(props) {
  return (
    <div className="form-exit">
      <h2>{props.navigationPurpose}</h2>
      <Link to={props.navigateTo}>
        {props.navigationText}
      </Link>
    </div>
  );
}

export default FormExit;
