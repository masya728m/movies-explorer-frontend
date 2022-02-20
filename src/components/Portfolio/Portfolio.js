import './Portfolio.css';
import photo from '../../images/photo.png';
import UnderlineTitle from '../UnderlineTitle/UnderlineTitle';

function Portfolio() {
  return (
    <div className="portfolio">
      <UnderlineTitle>
        Студент
      </UnderlineTitle>
      <div className="portfolio__info-container">
        <img className="portfolio__image" src={photo} alt={'photo'}/>
        <div className="portfolio__text-section">
          <h2 className="portfolio__name">
            Марина
          </h2>
          <h3 className="portfolio__text portfolio__text_type_title">
            Фронтенд-разработчик, 23 года
          </h3>
          <p className="portfolio__text">
            Родилась в Казахстане в г. Алматы, живу в Санкт-Петербурге, закончила
            факультет приборостроения ФИБС в СПБГЭТУ. У меня есть рыжая собачка корги.
            Недавно начала заниматься программированием и меня это быстро увлекло.
          </p>
          <div className="portfolio__contact-list">
            <a className="portfolio__contact-link" href="#" target="_blank">
              Telegram
            </a>
            <a className="portfolio__contact-link" href="https://github.com/masya728m" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
      <h2 className="portfolio__label">
        Портфолио
      </h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <a
            className="portfolio__project-link"
            href="https://masya728m.github.io/how-to-learn"
            target="_blank" rel="noreferrer">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            className="portfolio__project-link"
            target="_blank"
            href="https://masya728m.github.io/russian-travel/#" rel="noreferrer">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            className="portfolio__project-link"
            href="https://bulkin.students.nomoredomains.rocks/login"
            target="_blank" rel="noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
