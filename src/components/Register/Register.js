import './Register.css';
import InputField from '../InputField/InputField';
import SecureInputField from '../SecureInputField/SecureInputField';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormExit from '../FormExit/FormExit';
import InputForm from '../InputForm/InputForm';

function Register(props) {
  return (
    <InputForm onSubmit={props.onSubmit} title="Рады видеть!">
      <InputField/>
      <InputField/>
      <FormSubmitButton text="Зарегистрироваться"/>
      <FormExit
        navigationPurpose="Уже зарегистрированы?"
        navigateTo="/signin"
        navigationText="Войти"
      />
    </InputForm>
  );
}

export default Register;
