import './Login.css';
import InputForm from '../InputForm/InputForm';
import InputField from '../InputField/InputField';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormExit from '../FormExit/FormExit';
import Header from '../Header/Header';

function Login(props) {
  return (
    <InputForm onSubmit={props.onSubmit} title="Добро пожаловать!" headerElement={<Header onlyLogo={true}/>}>
      <InputField name="E-mail"/>
      <InputField name="Пароль"/>
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
