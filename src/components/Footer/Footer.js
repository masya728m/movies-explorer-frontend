import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <ul className="footer__features">
          <li className="footer__feature">
            Яндекс.Практикум
          </li>
          <li className="footer__feature">
            Github
          </li>
          <li className="footer__feature">
            Facebook
          </li>
        </ul>
        <h2 className="footer__year">
          &copy;2022
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
