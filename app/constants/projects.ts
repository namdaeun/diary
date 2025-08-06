import coasterImage from '/public/assets/image/img_coaster.png';
import mileImage from '/public/assets/image/img_mile.png';
import tikiImage from '/public/assets/image/img_tiki.png';

export const PROJECTS = [
  {
    id: 1,
    name: 'Tiki',
    description: '',
    skills: [
      'React',
      'TypeScript',
      'Emotion CSS',
      'Zustand',
      'MSW',
      'Storybook',
      'Figma',
      'Git',
    ],
    imageUrl: tikiImage,
    githubUrl: 'https://github.com/Team-Tiki/tiki-client',
  },
  {
    id: 2,
    name: 'Mile',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    skills: ['React', 'TypeScript', 'Styled-components', 'Figma', 'Git'],
    imageUrl: mileImage,
    githubUrl: 'https://github.com/Mile-Writings/Mile-Client',
  },
  {
    id: 3,
    name: 'Coaster',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    skills: ['React', 'TypeScript', 'Emotion CSS', 'ky', 'Figma', 'Git'],
    imageUrl: coasterImage,
    githubUrl: 'https://github.com/Coastee/COASTER-Client',
  },
];
