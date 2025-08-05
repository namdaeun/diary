import { type Variants, motion } from 'framer-motion';
import type { Experience } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ExperienceItemProps {
  experience: Experience;
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { company, position, description, startDate, endDate } = experience;

  return (
    <motion.article
      className={s.wrapper}
      variants={itemVariants}
      key={experience.id}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
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
    </motion.article>
  );
};

export default ExperienceItem;
