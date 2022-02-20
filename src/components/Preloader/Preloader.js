import './Preloader.css';

function Preloader(props) {
  return (
    <div className="preloader">
      <label className="preloader__switch">
        <input type="checkbox" className="preloader__checkbox"/>
        <span className="preloader__slider preloader__slider_shape_round"/>
      </label>
      <h2 className="preloader__text">
        Короткометражки
      </h2>
    </div>
  );
}

export default Preloader;
