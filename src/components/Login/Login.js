import './Login.css';
import InputForm from '../InputForm/InputForm';
import InputField from '../InputField/InputField';
import SecureInputField from '../SecureInputField/SecureInputField';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormExit from '../FormExit/FormExit';

function Login(props) {
  return (
    <InputForm onSubmit={props.onSubmit} title="Добро пожаловать!">
      <InputField/>
      <InputField/>
      <SecureInputField/>
      <FormSubmitButton text="Войти"/>
      <FormExit
        navigationPurpose="Ещё не зарегистрированы?"
        navigateTo="/signup"
        navigationText="Регистрация"
      />
    </InputForm>
  );
}

export default Login;
