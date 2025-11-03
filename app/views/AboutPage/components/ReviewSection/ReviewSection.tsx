import { motion } from 'framer-motion';
import { REVIEWS } from '~/constants/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as s from './styles.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ReviewSection = () => {
  return (
    <section className={s.wrapper} id="review">
      <motion.div
        className={s.reviewListLayout}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {REVIEWS.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection;
