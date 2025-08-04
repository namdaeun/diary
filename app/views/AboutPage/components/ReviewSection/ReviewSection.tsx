import Tag from '~/components/tag/Tag';
import { REVIEWS } from '~/constants/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import * as s from './styles.css';

const ReviewSection = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.descriptionLayout}>
        <Tag>Peer Review</Tag>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={s.reviewList}>
        {REVIEWS.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
