import { type Variants, motion } from 'framer-motion';
import { REVIEWS } from '~/constants/review';
import { vars } from '~/styles/global.css';
import type { Review } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ReviewItemProps {
  review: Review;
  index: number;
}

const reviewVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReviewItem = ({ review, index }: ReviewItemProps) => {
  const { name, info, description } = review;

  return (
    <motion.div
      key={name}
      className={s.wrapper}
      variants={reviewVariants}
      style={{
        borderBottom:
          index === REVIEWS.length - 1
            ? 'none'
            : `1px solid ${vars.themeColor.color.border}`,
      }}
    >
      <i className={`ri-emotion-line ${s.icon}`} />
      <p className={s.description}>{description}</p>
      <div className={s.infoLayout}>
        <h1 className={s.name}>{name}</h1>
        <span className={s.info}>{info}</span>
      </div>
    </motion.div>
  );
};

export default ReviewItem;
