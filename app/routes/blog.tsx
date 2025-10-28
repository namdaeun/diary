import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ArticleCard from '~/components/ArticleCard/ArticleCard';
import { ARTICLES, type Article } from '~/constants/articles';
import * as S from './blog.css';

export const loader = async () => {
  return json({ articles: ARTICLES });
};

export default function Blog() {
  const { articles } = useLoaderData<{ articles: Article[] }>();

  return (
    <div className={S.container}>
      <h1 className={S.title}>Blog</h1>
      <div className={S.articleListContainer}>
        <ul className={S.articleList}>
          {articles.map((article) => (
            <li key={article.id} className={S.articleItem}>
              <ArticleCard
                key={article.id}
                title={article.title}
                date={new Date(article.date)}
                tagName={article.tagName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
