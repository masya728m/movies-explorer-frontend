import './ProfileInputField.css';

function ProfileInputField(props) {
  return (
    <label className="profile-input">
      <h2 className="profile-input__name">{props.name}</h2>
      <input className="profile-input__field"/>
    </label>
  );
}

export default ProfileInputField
