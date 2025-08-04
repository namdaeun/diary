import Tag from '~/components/tag/Tag';
import type { Project } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface SingleProjectProps {
  project: Project;
  contentPosition?: 'left' | 'right';
}

const Content = ({ project, contentPosition }: SingleProjectProps) => {
  const { name, description, skills, githubUrl } = project;
  const hasLeftContent = contentPosition === 'left';

  return (
    <div
      className={
        hasLeftContent
          ? `${s.leftSide} ${s.contentContainer}`
          : `${s.rightSide} ${s.contentContainer}`
      }
    >
      <h1 className={s.title}>{name}</h1>
      <span className={s.description}>{description}</span>
      <div className={s.tagList}>
        {skills.map((skill) => (
          <Tag key={skill} variant="secondary">
            {skill}
          </Tag>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <i className={`ri-github-fill ${s.githubIcon}`} />
      </a>
    </div>
  );
};

const SingleProject = ({
  project,
  contentPosition = 'right',
}: SingleProjectProps) => {
  const { name } = project;
  const hasRightContent = contentPosition === 'right';

  return (
    <section className={s.wrapper}>
      {!hasRightContent && (
        <Content project={project} contentPosition={contentPosition} />
      )}
      <div
        className={
          hasRightContent
            ? `${s.leftSide} ${s.imageContainer}`
            : `${s.rightSide} ${s.imageContainer}`
        }
      >
        <img
          src={`/assets/images/${name}.png`}
          alt={name}
          className={s.image}
        />
      </div>
      {hasRightContent && (
        <Content project={project} contentPosition={contentPosition} />
      )}
    </section>
  );
};

export default SingleProject;
