import type { Experience } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { company, position, description, startDate, endDate } = experience;

  return (
    <article className={s.wrapper}>
      <img
        src={`/assets/images/${company}.png`}
        alt={company}
        className={s.logo}
      />
      <div className={s.contentLayout}>
        <h1 className={s.position}>{position}</h1>
        <ul className={s.descriptionList}>
          {description.map((item) => (
            <li key={item} className={s.description}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className={s.date}>
        {startDate} - {endDate}
      </p>
    </article>
  );
};

export default ExperienceItem;
