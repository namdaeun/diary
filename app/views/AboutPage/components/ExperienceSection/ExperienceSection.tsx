import { motion } from 'framer-motion';
import Tag from '~/components/tag/Tag';
import { EXPERIENCES } from '~/constants/experiences';
import { sectionVariants, titleVariants } from '~/styles/motion';
import ExperienceItem from '~/views/AboutPage/components/ExperienceItem/ExperienceItem';
import * as s from './styles.css';

const ExperienceSection = () => {
  return (
    <motion.section
      className={s.wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div className={s.titleWrapper} variants={titleVariants}>
        <Tag>Experience</Tag>
        <p className={s.description}>
          Here is a quick summary of my most recent experiences:
        </p>
      </motion.div>
      <motion.div className={s.experienceList}>
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
