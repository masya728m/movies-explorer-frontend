import './Promo.css';

function Promo(props) {
  return (
    <div className="promo">
      <h2 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h2>
      {props.children}
    </div>
  );
}

export default Promo;
