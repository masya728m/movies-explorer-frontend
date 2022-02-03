import './SearchForm.css';
import Preloader from '../Preloader/Preloader';
import searchIcon from '../../images/search-icon.svg';

function SearchForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props?.onSubmit?.();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <img src={searchIcon} className="search-form__icon" alt="search-icon"/>
      <input type="text" className="search-form__input" placeholder="Фильм"/>
      <button type="submit" className="search-form__submit-button"/>
      <Preloader/>
    </form>
  );
}

export default SearchForm;
