import './FormSubmitButton.css';

function FormSubmitButton(props) {
  return (
    <button type="submit" className="form-submit-button">
      {props.text}
    </button>
  );
}

export default FormSubmitButton;
