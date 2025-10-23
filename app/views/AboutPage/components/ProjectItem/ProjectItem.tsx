import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tag from '~/components/tags/Tag';
import type { Project } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ProjectItemProps {
  project: Project;
  contentPosition?: 'left' | 'right';
}

const Content = ({ project, contentPosition }: ProjectItemProps) => {
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

const ProjectItem = ({
  project,
  contentPosition = 'right',
}: ProjectItemProps) => {
  const { name, imageUrl, githubUrl } = project;
  const hasRightContent = contentPosition === 'right';
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [hasRightContent ? 300 : -300, 0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);

  return (
    <motion.section
      ref={ref}
      className={s.wrapper}
      style={{ x, opacity }}
      onClick={() => {
        window.open(githubUrl, '_blank');
      }}
    >
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
        <img src={imageUrl} alt={name} className={s.image} />
      </div>
      {hasRightContent && (
        <Content project={project} contentPosition={contentPosition} />
      )}
    </motion.section>
  );
};

export default ProjectItem;
