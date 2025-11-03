export interface Article {
  id: number;
  title: string;
  date: Date;
  tagName: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Remix에서 블로그 만들기',
    date: new Date('2024-05-20'),
    tagName: 'Remix',
  },
  {
    id: 2,
    title: 'vanilla-extract 시작하기',
    date: new Date('2024-05-15'),
    tagName: 'CSS-in-JS',
  },
  {
    id: 3,
    title: 'TypeScript와 함께하는 리액트',
    date: new Date('2024-05-10'),
    tagName: 'TypeScript',
  },
  {
    id: 4,
    title: 'UI/UX 디자인 원칙',
    date: new Date('2024-05-05'),
    tagName: 'Design',
  },
];
