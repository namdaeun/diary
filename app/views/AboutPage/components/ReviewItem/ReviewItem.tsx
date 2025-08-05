import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Review } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ReviewItemProps {
  review: Review;
  index: number;
}

const ReviewItem = ({ review, index = 0 }: ReviewItemProps) => {
  const { name, info, description } = review;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const startPoint = index * 0.15;
  const endPoint = startPoint + 0.3;

  const y = useTransform(scrollYProgress, [startPoint, endPoint], [300, 0]);

  const opacity = useTransform(scrollYProgress, [startPoint, endPoint], [0, 1]);

  return (
    <motion.article ref={ref} className={s.wrapper} style={{ y, opacity }}>
      <i className={`ri-emotion-line ${s.icon}`} />
      <p className={s.description}>{description}</p>
      <div className={s.infoLayout}>
        <h1 className={s.name}>{name}</h1>
        <span className={s.info}>{info}</span>
      </div>
    </motion.article>
  );
};

export default ReviewItem;
