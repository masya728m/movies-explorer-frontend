import './Techs.css';
import UnderlineTitle from '../UnderlineTitle/UnderlineTitle';

function Techs() {
  return (
    <div className="techs">
      <UnderlineTitle>
        Технологии
      </UnderlineTitle>
      <h2 className="techs__title">
        7 технологий
      </h2>
      <h3 className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </h3>
      <div className="techs__used-tools">
        <div className="techs__used-tool">
          HTML
        </div>
        <div className="techs__used-tool">
          CSS
        </div>
        <div className="techs__used-tool">
          JS
        </div>
        <div className="techs__used-tool">
          React
        </div>
        <div className="techs__used-tool">
          Git
        </div>
        <div className="techs__used-tool">
          Express.js
        </div>
        <div className="techs__used-tool">
          mongoDB
        </div>
      </div>
    </div>
  );
}

export default Techs;
