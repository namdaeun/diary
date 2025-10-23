import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tag from '~/components/Tag/Tag';
import type { Project } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ProjectItemProps {
  project: Project;
}

const Content = ({ project }: ProjectItemProps) => {
  const { name, period, description, skills, githubUrl } = project;

  return (
    <div className={`${s.contentContainer}`}>
      <div className={s.titleBox}>
        <h1 className={s.title}>{name}</h1>
        <p className={s.period}>{period}</p>
      </div>

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

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { name, imageUrl, githubUrl } = project;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.3, 1], [300, 0, 0]);

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
      <div className={`${s.imageContainer}`}>
        <img src={imageUrl} alt={name} className={s.image} />
      </div>
      <Content project={project} />
    </motion.section>
  );
};

export default ProjectItem;
