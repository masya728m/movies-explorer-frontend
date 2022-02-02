import './AboutProject.css';

function AboutProject() {
  return (
    <div className="project-description">
      <h2 className="project-description__title">О проекте</h2>
      <div className="project-description__info-container">
        <div className="project-description__text-section">
          <h2 className="project-description__text-title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="project-description__text-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="project-description__text-section">
          <h2 className="project-description__text-title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="project-description__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project-description__timeline">
        <div className="project-description__timeline-part project-description__timeline-part_type_frontend">
          <p className="project-description__timeline-weeks project-description__timeline-weeks_type_frontend">
            1 неделя
          </p>
          <p className="project-description__timeline-brief">
            Back-end
          </p>
        </div>
        <div className="project-description__timeline-part project-description__timeline-part_type_backend">
          <p className="project-description__timeline-weeks project-description__timeline-weeks_type_backend">
            4 недели
          </p>
          <p className="project-description__timeline-brief">
            Front-end
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
