import { motion } from 'framer-motion';
import { PROJECTS } from '~/constants/projects';
import { sectionVariants } from '~/styles/motion';
import ProjectItem from '~/views/AboutPage/components/ProjectItem/ProjectItem';
import * as s from './styles.css';

const ProjectSection = () => {
  return (
    <motion.section
      className={s.wrapper}
      id="project"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
    >
      <div className={s.projectsContainer}>
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
