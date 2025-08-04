import Tag from '~/components/tag/Tag';
import { PROJECTS } from '~/constants/projects';
import ProjectItem from '~/views/AboutPage/components/ProjectItem/ProjectItem';
import * as s from './styles.css';

const ProjectSection = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.titleWrapper}>
        <Tag>Projects</Tag>
        <p className={s.description}>머시기 머시기 프로젝트들입니다.</p>
      </div>
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          contentPosition={project.id % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </section>
  );
};

export default ProjectSection;
