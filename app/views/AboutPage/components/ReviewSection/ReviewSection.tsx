import { motion } from 'framer-motion';
import Tag from '~/components/tag/Tag';
import { REVIEWS } from '~/constants/review';
import { titleVariants } from '~/styles/motion';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as s from './styles.css';

const ReviewSection = () => {
  return (
    <section className={s.wrapper}>
      <motion.div
        className={s.descriptionLayout}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Tag>Peer Review</Tag>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </motion.div>
      <div className={s.reviewList}>
        {REVIEWS.map((review, index) => (
          <ReviewItem key={review.id} review={review} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
