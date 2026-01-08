import { type Variants, motion } from 'framer-motion';
import { maskName } from '~/utils/maskName';
import type { Review } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ReviewItemProps {
  review: Review;
}

const reviewVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReviewItem = ({ review }: ReviewItemProps) => {
  const { name, info, description } = review;

  return (
    <motion.div key={name} className={s.wrapper} variants={reviewVariants}>
      <p className={s.description}>{description}</p>
      <div className={s.infoLayout}>
        <h1 className={s.name}>{maskName(name)}</h1>
        <span className={s.info}>{info}</span>
      </div>
    </motion.div>
  );
};

export default ReviewItem;
