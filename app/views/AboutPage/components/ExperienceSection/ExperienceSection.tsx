import Tag from '~/components/tag/Tag';
import { EXPERIENCES } from '~/constants/experiences';
import ExperienceItem from '~/views/AboutPage/components/ExperienceItem/ExperienceItem';
import * as s from './styles.css';

const ExperienceSection = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.titleWrapper}>
        <Tag>Experience</Tag>
        <p className={s.description}>
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className={s.experienceList}>
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
