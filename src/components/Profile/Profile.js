import './Profile.css';
import ProfileInputField from '../ProfileInputField/ProfileInputField';

function Profile(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onProfileEdit();
  }
  const handleExit = () => {
    props.onExit();
  }
  return (
    <form onSubmit={handleSubmit} className="profile">
      <h2 className="profile__title">{props.title}</h2>
      <ProfileInputField name="Имя"/>
      <div className="profile__separator-line"/>
      <ProfileInputField name="E-mail"/>
      <button type="submit" className="profile__edit-button">
        Редактировать
      </button>
      <button onClick={handleExit} className="profile__exit-button">
        Выйти из аккаунта
      </button>
    </form>
  );
}

export default Profile;
