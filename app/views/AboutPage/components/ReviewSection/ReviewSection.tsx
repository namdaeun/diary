import { motion } from 'framer-motion';
import Tag from '~/components/tags/Tag';
import { REVIEWS } from '~/constants/review';
import { titleVariants } from '~/styles/motion';
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
        className={s.descriptionLayout}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Tag>Peer Review</Tag>
        <p className={s.description}>팀원들은 저를 이렇게 평가했어요.</p>
      </motion.div>
      <motion.div
        className={s.reviewList}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {REVIEWS.map((review, index) => (
          <ReviewItem key={review.id} review={review} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection;
