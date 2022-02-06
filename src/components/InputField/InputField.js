import './InputField.css';
import {useState} from 'react';

function InputField(props) {
  const [error, setError] = useState();
  return (
    <label className="input-field">
      {props.name || 'input'}
      <input className={`input-field__input ${error && 'input-field__input_type_invalid'}`}/>
      <h3 className="input-field__error">
        {error}
      </h3>
    </label>
  );
}

export default InputField;
