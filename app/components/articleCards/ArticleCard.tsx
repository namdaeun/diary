import Tag from '../tags/Tag';
import { articleStyle, dateStyle, titleStyle } from './styles.css';

interface ArticleCardProp {
  title: string;
  date: Date;
  tagName: string;
}

const ArticleCard = ({ title, date, tagName }: ArticleCardProp) => {
  return (
    <article className={articleStyle}>
      {/* <img src={thumbnail} className={imgStyle} alt="아티클 썸네일" /> */}
      <Tag variant="secondary">{tagName}</Tag>
      <h1 className={titleStyle}>{title}</h1>
      <span className={dateStyle}>{date.getDate()}</span>
    </article>
  );
};

export default ArticleCard;
