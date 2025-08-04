import type { Review } from '~/views/AboutPage/types';
import * as s from './styles.css';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const { name, info, description } = review;

  return (
    <article className={s.wrapper}>
      <i className={`ri-emotion-line ${s.icon}`} />
      <p className={s.description}>{description}</p>
      <div className={s.infoLayout}>
        <h1 className={s.name}>{name}</h1>
        <span className={s.info}>{info}</span>
      </div>
    </article>
  );
};

export default ReviewItem;
