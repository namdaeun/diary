import Tag from '~/components/tag/Tag';
import { PROJECTS } from '~/constants/projects';
import SingleProject from '~/views/AboutPage/components/SingleProject/SingleProject';
import * as s from './styles.css';

const Projects = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <Tag>Projects</Tag>
        <div className={s.description}>머시기 머시기 프로젝트들입니다.</div>
      </div>
      {PROJECTS.map((project) => (
        <SingleProject
          key={project.id}
          project={project}
          contentPosition={project.id % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default Projects;
