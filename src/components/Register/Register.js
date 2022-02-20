import './Register.css';
import InputField from '../InputField/InputField';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormExit from '../FormExit/FormExit';
import InputForm from '../InputForm/InputForm';
import Header from '../Header/Header';

function Register(props) {
  return (
    <InputForm onSubmit={props.onSubmit} title="Рады видеть!" headerElement={<Header onlyLogo={true}/>}>
      <InputField name="имя"/>
      <InputField name="E-mail"/>
      <InputField name="Пароль"/>
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
