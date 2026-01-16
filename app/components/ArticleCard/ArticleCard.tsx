import { formatDate } from '~/utils/format';
import Tag from '../Tag/Tag';
import * as s from './styles.css';

interface ArticleCardProp {
  title: string;
  date: string;
  tagName: string;
}

const ArticleCard = ({ title, date, tagName }: ArticleCardProp) => {
  return (
    <article className={s.articleStyle}>
      <img
        src="/images/thumbnail.png"
        className={s.imgStyle}
        alt="아티클 썸네일"
      />
      <div className={s.contentStyle}>
        <h1 className={s.titleStyle}>{title}</h1>
        <Tag size="sm">{tagName}</Tag>
      </div>
      <span className={s.dateStyle}>{formatDate(date)}</span>
    </article>
  );
};

export default ArticleCard;
