import './InputForm.css';

function InputForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }
  return (
    <form onSubmit={handleSubmit} className="input-form">
      {props.headerElement || (<></>)}
      <h2 className="input-form__title">{props.title}</h2>
      {props.children}
    </form>
  );
}

export default InputForm;
