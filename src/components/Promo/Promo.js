import './Promo.css';

function Promo(props) {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      {props.children}
    </div>
  );
}

export default Promo;
