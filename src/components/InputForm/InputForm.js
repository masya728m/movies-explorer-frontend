import './InputForm.css';

function InputForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="input-form">
      {props.headerElement || (<></>)}
      <h2 className="input-form__title">{props.title}</h2>
      {props.children}
    </form>
  );
}

export default InputForm;
