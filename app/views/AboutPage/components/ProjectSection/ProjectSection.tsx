import { motion } from 'framer-motion';
import Tag from '~/components/tags/Tag';
import { PROJECTS } from '~/constants/projects';
import { sectionVariants, titleVariants } from '~/styles/motion';
import ProjectItem from '~/views/AboutPage/components/ProjectItem/ProjectItem';
import * as s from './styles.css';

const ProjectSection = () => {
  return (
    <motion.section
      className={s.wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div className={s.titleWrapper} variants={titleVariants}>
        <Tag>Projects</Tag>
        <p className={s.description}>
          제가 작업한 프로젝트 중 일부를 소개할게요.
        </p>
      </motion.div>
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          contentPosition={project.id % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </motion.section>
  );
};

export default ProjectSection;
