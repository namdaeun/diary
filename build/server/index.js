import { jsx, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import {
  createReadableStreamFromReadable,
  createCookieSessionStorage,
  json,
} from '@remix-run/node';
import {
  RemixServer,
  Link,
  useLoaderData,
  Meta,
  Links,
  Outlet,
  ScrollRestoration,
  Scripts,
  LiveReload,
} from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import {
  createThemeSessionResolver,
  useTheme,
  ThemeProvider,
  PreventFlashOnWrongTheme,
  isTheme,
} from 'remix-themes';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { createRuntimeFn } from '@vanilla-extract/recipes/createRuntimeFn';
import { motion, useScroll, useTransform } from 'framer-motion';
const ABORT_DELAY = 5e3;
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}
function handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: handleRequest,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  },
});
const themeSessionResolver = createThemeSessionResolver(sessionStorage);
var lightTheme = '_1wtyjo6c';
var darkTheme = '_1wtyjo6d';
var footer = '_10np40d0';
var visible = '_10np40d1';
var hidden = '_10np40d2';
var linkSection = '_10np40d3';
var linkList = '_10np40d4';
var linkItem = '_10np40d5';
var link$1 = '_10np40d6';
var period$1 = '_10np40d7';
const LINKS = {
  GITHUB: 'https://github.com/namdaeun',
  LINKEDIN: 'https://www.linkedin.com/in/skaekdms/',
  EMAIL: 'mailto:nde40345@gmail.com',
  BLOG: 'https://velog.io/@namdaeun/posts',
};
const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const introSectionHeight = window.innerHeight;
      if (currentScrollY <= introSectionHeight) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return /* @__PURE__ */ jsxs('footer', {
    className: `${footer} ${isVisible ? visible : hidden}`,
    children: [
      /* @__PURE__ */ jsx('div', {
        className: linkSection,
        children: /* @__PURE__ */ jsxs('ul', {
          className: linkList,
          children: [
            /* @__PURE__ */ jsx('li', {
              className: linkItem,
              children: /* @__PURE__ */ jsx(Link, {
                to: LINKS.GITHUB,
                className: link$1,
                children: 'Github →',
              }),
            }),
            /* @__PURE__ */ jsx('li', {
              className: linkItem,
              children: /* @__PURE__ */ jsx(Link, {
                to: LINKS.LINKEDIN,
                className: link$1,
                children: 'Linkedin →',
              }),
            }),
            /* @__PURE__ */ jsx('li', {
              className: linkItem,
              children: /* @__PURE__ */ jsx(Link, {
                to: LINKS.BLOG,
                className: link$1,
                children: 'Velog →',
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('p', { className: period$1, children: '2023-2025' }),
    ],
  });
};
const SECTIONS = ['about', 'project', 'experience', 'review'];
var navigation = 'ouodtu0';
var link = 'ouodtu1';
const Navigation = ({ activeSection, style }) => {
  const getNavigationItem = () => {
    switch (activeSection) {
      case 'about':
        return { label: 'About', path: '/' };
      case 'project':
        return { label: 'Project', path: '#project' };
      case 'experience':
        return { label: 'Experience', path: '#experience' };
      case 'review':
        return { label: 'Peer Review', path: '#review' };
      default:
        return { label: 'Blog', path: '/blog' };
    }
  };
  const currentItem = getNavigationItem();
  return /* @__PURE__ */ jsx('nav', {
    className: navigation,
    style,
    children: /* @__PURE__ */ jsx(Link, {
      to: currentItem.path,
      className: link,
      children: currentItem.label,
    }),
  });
};
const icDark =
  "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.25C5.54167%2012.25%204.30208%2011.7396%203.28125%2010.7188C2.26042%209.69792%201.75%208.45833%201.75%207C1.75%205.54167%202.26042%204.30208%203.28125%203.28125C4.30208%202.26042%205.54167%201.75%207%201.75C7.13611%201.75%207.26979%201.75486%207.40104%201.76458C7.53229%201.77431%207.66111%201.78889%207.7875%201.80833C7.38889%202.09028%207.07049%202.45729%206.83229%202.90938C6.5941%203.36146%206.475%203.85%206.475%204.375C6.475%205.25%206.78125%205.99375%207.39375%206.60625C8.00625%207.21875%208.75%207.525%209.625%207.525C10.1597%207.525%2010.6507%207.4059%2011.0979%207.16771C11.5451%206.92951%2011.9097%206.61111%2012.1917%206.2125C12.2111%206.33889%2012.2257%206.46771%2012.2354%206.59896C12.2451%206.73021%2012.25%206.86389%2012.25%207C12.25%208.45833%2011.7396%209.69792%2010.7188%2010.7188C9.69792%2011.7396%208.45833%2012.25%207%2012.25Z'%20fill='%233A3A3A'/%3e%3c/svg%3e";
const icLight =
  "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_74_238)'%3e%3cpath%20d='M6.99967%209.91671C6.19273%209.91671%205.50488%209.63233%204.93613%209.06358C4.36738%208.49483%204.08301%207.80699%204.08301%207.00004C4.08301%206.1931%204.36738%205.50525%204.93613%204.9365C5.50488%204.36775%206.19273%204.08337%206.99967%204.08337C7.80662%204.08337%208.49447%204.36775%209.06322%204.9365C9.63197%205.50525%209.91634%206.1931%209.91634%207.00004C9.91634%207.80699%209.63197%208.49483%209.06322%209.06358C8.49447%209.63233%207.80662%209.91671%206.99967%209.91671ZM2.91634%207.58337H0.583008V6.41671H2.91634V7.58337ZM13.4163%207.58337H11.083V6.41671H13.4163V7.58337ZM6.41634%202.91671V0.583374H7.58301V2.91671H6.41634ZM6.41634%2013.4167V11.0834H7.58301V13.4167H6.41634ZM3.73301%204.52087L2.26009%203.10629L3.09134%202.24587L4.49134%203.70421L3.73301%204.52087ZM10.908%2011.7542L9.49343%2010.2813L10.2663%209.47921L11.7393%2010.8938L10.908%2011.7542ZM9.47884%203.73337L10.8934%202.26046L11.7538%203.09171L10.2955%204.49171L9.47884%203.73337ZM2.24551%2010.9084L3.71842%209.49379L4.52051%2010.2667L3.10592%2011.7396L2.24551%2010.9084Z'%20fill='%234299F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_74_238'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var backgroundStyle$1 = createRuntimeFn({
  defaultClassName: '_107c8zu0',
  variantClassNames: { mode: { light: '_107c8zu1', dark: '_107c8zu2' } },
  defaultVariants: {},
  compoundVariants: [],
});
var switchStyle = '_107c8zu3';
var iconStyle = createRuntimeFn({
  defaultClassName: '_107c8zu4',
  variantClassNames: { mode: { light: '_107c8zu5', dark: '_107c8zu6' } },
  defaultVariants: {},
  compoundVariants: [],
});
const Switch = ({ mode: mode2, onChange, ...props }) => {
  return /* @__PURE__ */ jsxs('div', {
    className: backgroundStyle$1({ mode: mode2 }),
    children: [
      /* @__PURE__ */ jsx('input', {
        type: 'checkbox',
        role: 'switch',
        checked: mode2 === 'light',
        onChange,
        'aria-label': 'switch',
        'aria-checked': 'true',
        className: switchStyle,
        ...props,
      }),
      /* @__PURE__ */ jsx('img', {
        src: mode2 === 'light' ? icLight : icDark,
        alt: `${mode2} mode icon`,
        className: iconStyle({ mode: mode2 }),
      }),
    ],
  });
};
var headerStyle = '_1m658ed0';
var logoStyle = '_1m658ed1';
var navigationContainer = '_1m658ed2';
const Header = () => {
  const [theme, setTheme] = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const handleToggle = () => {
    const nextState = {
      light: 'dark',
      dark: 'light',
    };
    const nextTheme = nextState[theme] ?? 'light';
    setTheme(nextTheme);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs('header', {
    className: headerStyle,
    children: [
      /* @__PURE__ */ jsx(Link, {
        to: '/',
        className: logoStyle,
        children: /* @__PURE__ */ jsx('h1', {
          className: logoStyle,
          children: 'Daeun Nam',
        }),
      }),
      /* @__PURE__ */ jsxs('div', {
        className: navigationContainer,
        children: [
          /* @__PURE__ */ jsx(Navigation, { activeSection }),
          /* @__PURE__ */ jsx(Navigation, { activeSection: 'blog' }),
        ],
      }),
      /* @__PURE__ */ jsx(Switch, {
        mode: theme === 'light' ? 'light' : 'dark',
        onChange: handleToggle,
      }),
    ],
  });
};
const links = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
  },
  { rel: 'icon', href: '/assets/icon/ic_favicon.svg', type: 'image/svg+xml' },
  {
    href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
    rel: 'stylesheet',
  },
];
const loader$1 = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return json({
    theme: getTheme(),
  });
};
function App() {
  const [theme] = useTheme();
  return /* @__PURE__ */ jsxs('html', {
    lang: 'ko',
    className: clsx(theme === 'light' ? lightTheme : darkTheme),
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ jsxs('head', {
        children: [
          /* @__PURE__ */ jsx('meta', { charSet: 'utf-8' }),
          /* @__PURE__ */ jsx('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(PreventFlashOnWrongTheme, {
            ssrTheme: Boolean(theme),
          }),
          /* @__PURE__ */ jsx(Links, {}),
        ],
      }),
      /* @__PURE__ */ jsxs('body', {
        children: [
          /* @__PURE__ */ jsxs('div', {
            style: {
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '200px',
            },
            children: [
              /* @__PURE__ */ jsx(Header, {}),
              /* @__PURE__ */ jsx('main', {
                children: /* @__PURE__ */ jsx(Outlet, {}),
              }),
              /* @__PURE__ */ jsx(Footer, {}),
            ],
          }),
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {}),
          /* @__PURE__ */ jsx(LiveReload, {}),
        ],
      }),
    ],
  });
}
function AppWithProviders() {
  const { theme } = useLoaderData();
  return /* @__PURE__ */ jsx(ThemeProvider, {
    specifiedTheme: theme,
    themeAction: '/actions/set-theme',
    children: /* @__PURE__ */ jsx(App, {}),
  });
}
const route0 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: AppWithProviders,
      links,
      loader: loader$1,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const action = async ({ request }) => {
  const { setTheme } = await themeSessionResolver(request);
  const formData = await request.formData();
  const theme = formData.get('theme');
  if (!isTheme(theme)) {
    return {
      success: false,
      message: `theme value ${theme} is not a valid theme`,
    };
  }
  return {
    headers: {
      'Set-Cookie': await setTheme(theme),
    },
  };
};
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      action,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var pageWrapper = '_1feux400';
const route2 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      pageWrapper,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var container$1 = 'o049mm0';
var title$2 = 'o049mm1';
var articleListContainer = 'o049mm2';
var articleList = 'o049mm3';
var articleItem = 'o049mm4';
const route3 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      articleItem,
      articleList,
      articleListContainer,
      container: container$1,
      title: title$2,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const cemwareImage = '/assets/img_cemware-Dr7VxAbO.png';
const dosoptImage = '/assets/img_dosopt-CBi3Zgxa.png';
const makersImage = '/assets/img_makers-DpC9v-yS.png';
const nowsoptImage = '/assets/img_nowsopt-BqWQ6SA3.png';
const EXPERIENCES = [
  {
    id: 1,
    logoUrl: cemwareImage,
    company: 'CEMWARE',
    position: 'Frontend Developer',
    description: ['콘텐츠 팀 소속', '사내 API 기반 디지털 콘텐츠 개발'],
    startDate: '2025.03',
    endDate: '2025.06',
  },
  {
    id: 2,
    logoUrl: nowsoptImage,
    company: 'SOPT 34기',
    position: 'NOW SOPT 34th Web Part',
    description: [
      '34기 APPJAM 우수상 수상',
      '합동세미나 리드 역할을 맡아 컨벤션 준비 및 전반적 개발 과정 총괄',
      'React 스터디장을 맡아 3개월 간 스터디 진행',
      '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
    ],
    startDate: '2024.03',
    endDate: '2024.07',
  },
  {
    id: 3,
    logoUrl: dosoptImage,
    company: 'SOPT 33기',
    position: 'DO SOPT 33rd Web Part',
    description: [
      '34기 APPJAM 우수상 수상',
      '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
    ],
    startDate: '2023.09',
    endDate: '2024.01',
  },
  {
    id: 4,
    logoUrl: makersImage,
    company: 'makers 36기',
    position: 'Admin Team Frontend Developer',
    description: [
      'SOPT의 공홈과, 내부 어드민 시스템, 리크루팅 지원서 유지 및 보수',
      '2주 단위의 애자일 스프린트를 통한 프로젝트 진행',
    ],
    startDate: '2025.03',
    endDate: '2025.06',
  },
];
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};
const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
var wrapper$6 = 'uq6tme0';
var logo = 'uq6tme1';
var contentLayout = 'uq6tme2';
var titleLayout = 'uq6tme3';
var position = 'uq6tme4';
var descriptionList = 'uq6tme5';
var description$3 = 'uq6tme6';
var date = 'uq6tme7';
const ExperienceItem = ({ experience }) => {
  const {
    logoUrl,
    company,
    position: position$1,
    description: description2,
    startDate,
    endDate,
  } = experience;
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: wrapper$6,
      variants: itemVariants,
      whileHover: { scale: 1.02 },
      children: [
        /* @__PURE__ */ jsx('img', {
          src: logoUrl,
          alt: company,
          className: logo,
        }),
        /* @__PURE__ */ jsxs('div', {
          className: contentLayout,
          children: [
            /* @__PURE__ */ jsxs('div', {
              className: titleLayout,
              children: [
                /* @__PURE__ */ jsx('h1', {
                  className: position,
                  children: position$1,
                }),
                /* @__PURE__ */ jsxs('p', {
                  className: date,
                  children: [startDate, ' - ', endDate],
                }),
              ],
            }),
            /* @__PURE__ */ jsx('ul', {
              className: descriptionList,
              children: description2.map((item) =>
                /* @__PURE__ */ jsx(
                  'li',
                  { className: description$3, children: item },
                  item,
                ),
              ),
            }),
          ],
        }),
      ],
    },
    experience.id,
  );
};
var wrapper$5 = '_1s4mzhv0';
var container = '_1s4mzhv1';
var experienceList = '_1s4mzhv4';
const ExperienceSection = () => {
  return /* @__PURE__ */ jsx(motion.section, {
    className: wrapper$5,
    id: 'experience',
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 },
    variants: sectionVariants,
    children: /* @__PURE__ */ jsx('div', {
      className: container,
      children: /* @__PURE__ */ jsx(motion.div, {
        className: experienceList,
        variants: listVariants,
        children: EXPERIENCES.map((experience) =>
          /* @__PURE__ */ jsx(ExperienceItem, { experience }, experience.id),
        ),
      }),
    }),
  });
};
var wrapper$4 = '_8339tn0';
var titleWrapper = '_8339tn1';
var title$1 = '_8339tn2';
var subTitle = '_8339tn3';
var name$1 = '_8339tn4';
var description$2 = '_8339tn5';
const IntroSection = () => {
  return /* @__PURE__ */ jsx('section', {
    className: wrapper$4,
    id: 'about',
    children: /* @__PURE__ */ jsxs('div', {
      className: titleWrapper,
      children: [
        /* @__PURE__ */ jsx('h1', {
          className: title$1,
          children: '안녕하세요',
        }),
        /* @__PURE__ */ jsxs('h1', {
          className: subTitle,
          children: [
            '프론트엔드 개발자 ',
            /* @__PURE__ */ jsx('span', {
              className: name$1,
              children: '남다은',
            }),
            '입니다.',
          ],
        }),
        /* @__PURE__ */ jsx('p', {
          className: description$2,
          children: `
            집중할 땐 깊이 몰입하고, 맡은 일은 끝까지 책임집니다.
            사용자 경험과 개발자 경험을 모두 고려하며, 주어진 목표를 성과로 연결하는 과정을 즐깁니다.
        `,
        }),
      ],
    }),
  });
};
const coasterImage = '/assets/img_coaster-DgsjIxIk.png';
const mileImage = '/assets/img_mile-COyruDnZ.png';
const tikiImage = '/assets/img_tiki-Bvju4hZF.png';
const PROJECTS = [
  {
    id: 1,
    name: 'Tiki',
    period: '2024.07 - 2025.03',
    description: 'Web FE 개발 담당',
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
    period: '2024.01 - 2024.07',
    description: 'Web FE 개발 담당',
    skills: ['React', 'TypeScript', 'Styled-components', 'Figma', 'Git'],
    imageUrl: mileImage,
    githubUrl: 'https://github.com/Mile-Writings/Mile-Client',
  },
  {
    id: 3,
    name: 'Coaster',
    period: '2024.12 - 2025.03',
    description: 'Web FE 개발 담당',
    skills: ['React', 'TypeScript', 'Emotion CSS', 'ky', 'Figma', 'Git'],
    imageUrl: coasterImage,
    githubUrl: 'https://github.com/Coastee/COASTER-Client',
  },
];
var backgroundStyle = createRuntimeFn({
  defaultClassName: '_17dcind0',
  variantClassNames: { size: { sm: '_17dcind1', lg: '_17dcind2' } },
  defaultVariants: {},
  compoundVariants: [],
});
var textStyle = createRuntimeFn({
  defaultClassName: '_17dcind3',
  variantClassNames: { size: { sm: '_17dcind4', lg: '_17dcind5' } },
  defaultVariants: {},
  compoundVariants: [],
});
const Tag = ({ size = 'lg', children }) => {
  return /* @__PURE__ */ jsx('div', {
    className: backgroundStyle({ size }),
    children: /* @__PURE__ */ jsx('span', {
      className: textStyle({ size }),
      children,
    }),
  });
};
var wrapper$3 = 'ei519s0';
var imageContainer = 'ei519s1';
var titleBox = 'ei519s2';
var contentContainer = 'ei519s3';
var image = 'ei519s4';
var title = 'ei519s5';
var period = 'ei519s6';
var description$1 = 'ei519s7';
var tagList = 'ei519s8';
var githubIcon = 'ei519s9';
const Content = ({ project }) => {
  const {
    name: name2,
    period: period$12,
    description: description2,
    skills,
    githubUrl,
  } = project;
  return /* @__PURE__ */ jsxs('div', {
    className: `${contentContainer}`,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: titleBox,
        children: [
          /* @__PURE__ */ jsx('h1', { className: title, children: name2 }),
          /* @__PURE__ */ jsx('p', { className: period, children: period$12 }),
          /* @__PURE__ */ jsx('a', {
            href: githubUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: githubIcon,
            children: /* @__PURE__ */ jsx('i', {
              className: `ri-github-fill ${githubIcon}`,
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('span', {
        className: description$1,
        children: description2,
      }),
      /* @__PURE__ */ jsx('div', {
        className: tagList,
        children: skills.map((skill) =>
          /* @__PURE__ */ jsx(Tag, { size: 'sm', children: skill }, skill),
        ),
      }),
    ],
  });
};
const ProjectItem = ({ project }) => {
  const { name: name2, imageUrl, githubUrl } = project;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 0.3, 1], [300, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  return /* @__PURE__ */ jsxs(motion.section, {
    ref,
    className: wrapper$3,
    style: { x, opacity },
    onClick: () => {
      window.open(githubUrl, '_blank');
    },
    children: [
      /* @__PURE__ */ jsx('div', {
        className: `${imageContainer}`,
        children: /* @__PURE__ */ jsx('img', {
          src: imageUrl,
          alt: name2,
          className: image,
        }),
      }),
      /* @__PURE__ */ jsx(Content, { project }),
    ],
  });
};
var wrapper$2 = '_1283u370';
var projectsContainer = '_1283u373';
const ProjectSection = () => {
  return /* @__PURE__ */ jsx(motion.section, {
    className: wrapper$2,
    id: 'project',
    initial: 'hidden',
    whileInView: 'visible',
    variants: sectionVariants,
    children: /* @__PURE__ */ jsx('div', {
      className: projectsContainer,
      children: PROJECTS.map((project) =>
        /* @__PURE__ */ jsx(ProjectItem, { project }, project.id),
      ),
    }),
  });
};
const REVIEWS = [
  {
    id: 1,
    name: '김가온',
    info: 'Tiki 디자이너',
    description:
      '기술적인 제약 사항이나 구현 가능성에 대해 쉽게 설명해주어 디자이너로서 방향성을 잡기 수월했어용 !!\n그리고 커뮤니케이션을 신속하게 해주어 디자인을 빨리 반영할 수 있었어요 !',
  },
  {
    id: 2,
    name: '임찬기',
    info: 'makers 어드민팀 서버 개발자',
    description:
      '이슈 발생 시 문제 상황을 명확히 공유하고, API 관련 문제에 대해서는 상세한 스펙과 오류 내용을 체계적으로 정리해주어 백엔드 개발자로서 다은님과의 협업이 매우 원활하게 느껴졌습니다.\n또한 트러블 슈팅 속도가 빨라 사용자에게 미치는 영향을 최소화하며 안정적으로 서비스 운영을 할 수 있었습니다.',
  },
  {
    id: 3,
    name: '백승범',
    info: 'CEMWARE 웹 프론트엔드 개발자',
    description:
      '남다은님은 또 함께 일하고 싶은 개발자입니다. \n긍정적이며 사람을 편하게 대해줍니다. 그리고 자신의 생각을 잘 표현할 줄 알며 기술적 고민도 마다하지 않고 적극적으로 함께 생각하며 해결하려 노력합니다.',
  },
  {
    id: 4,
    name: '김규홍',
    info: 'Tiki 웹 프론트엔드 개발자',
    description:
      '다은이는 항상 맡은 테스크에 대해서 책임감 있게 기한내에 모두 완료해내고요. 도입하고 싶은 기술이 있을때 선택의 근거를 자세하게 팀원들에게 설명해 팀원들의 기술에 대해 이해할 수 있게 해줘요.\n코드리뷰를 할때는 스타일, 컨벤션 하나하나까지 꼼꼼하게 확인해줘서 팀원들이 놓친 부분들을 잘 캐치할 수 있게 해줘요.',
  },
  {
    id: 5,
    name: '정보운',
    info: 'Tiki 웹 프론트엔드 개발자',
    description:
      '사람들이 힘들어 속도가 나지않을때는 본인이 직접 나서서 여러운 테스크들도 가져가서 응차응차해내고 힘들텐데도 우리한테 힘든내색없이 잘 해내는 책임감이 엄청난 다은언니였습니다. 하는 대로 금방금방 팀원들과 상황공유를 잘하고 다른 팀원(나)의 못하는 실력을 이해하고 본인이 더 도와줄건 없는지 항상 보살펴주는 이타심과 리더쉽을 가지고 있습니다!',
  },
  {
    id: 6,
    name: '노하은',
    info: 'makers 어드민팀 디자이너 노하은',
    description:
      '다은이는 사용자가 더 나은 경험을 할 수 있도록 고민하고 디자이너와 적극적인 소통과 하는 개발자입니다.\n능력도 우수하여 디자이너가 높은 만족도를 가지고 있습니다.',
  },
  {
    id: 7,
    name: '최영철',
    info: 'makers 어드민팀 서버 개발자',
    description:
      '다은님은 진짜 야무지고 책임감 있는 FE 개발자였어요 ㅎㅎ.\n항상 빠르게 응답해주고, 이슈도 척척 해결해서 너무 든든했어요!',
  },
];
var wrapper$1 = '_2sxdbr0';
var description = '_2sxdbr2';
var infoLayout = '_2sxdbr3';
var name = '_2sxdbr4';
var info = '_2sxdbr5';
const reviewVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const ReviewItem = ({ review }) => {
  const { name: name$12, info: info$1, description: description$12 } = review;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: wrapper$1,
      variants: reviewVariants,
      children: [
        /* @__PURE__ */ jsx('p', {
          className: description,
          children: description$12,
        }),
        /* @__PURE__ */ jsxs('div', {
          className: infoLayout,
          children: [
            /* @__PURE__ */ jsx('h1', { className: name, children: name$12 }),
            /* @__PURE__ */ jsx('span', { className: info, children: info$1 }),
          ],
        }),
      ],
    },
    name$12,
  );
};
var wrapper = 'tzm5md0';
var reviewList = 'tzm5md1';
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
  return /* @__PURE__ */ jsx('section', {
    className: wrapper,
    id: 'review',
    children: /* @__PURE__ */ jsx(motion.div, {
      className: reviewList,
      variants: containerVariants,
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.2 },
      children: REVIEWS.map((review) =>
        /* @__PURE__ */ jsx(ReviewItem, { review }, review.id),
      ),
    }),
  });
};
const meta = () => {
  return [{ title: 'diary' }, { name: 'description', content: '다이어리' }];
};
const About = () => {
  return /* @__PURE__ */ jsxs('div', {
    className: pageWrapper,
    children: [
      /* @__PURE__ */ jsx(IntroSection, {}),
      /* @__PURE__ */ jsx(ProjectSection, {}),
      /* @__PURE__ */ jsx(ExperienceSection, {}),
      /* @__PURE__ */ jsx(ReviewSection, {}),
    ],
  });
};
const route4 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: About,
      meta,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var articleStyle = 'nikokj0';
var imgStyle = 'nikokj1';
var contentStyle = 'nikokj2';
var titleStyle = 'nikokj3';
var dateStyle = 'nikokj4';
const ArticleCard = ({ title: title2, date: date2, tagName }) => {
  return /* @__PURE__ */ jsxs('article', {
    className: articleStyle,
    children: [
      /* @__PURE__ */ jsx('img', {
        src: '/images/thumbnail.png',
        className: imgStyle,
        alt: '아티클 썸네일',
      }),
      /* @__PURE__ */ jsxs('div', {
        className: contentStyle,
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: titleStyle,
            children: title2,
          }),
          /* @__PURE__ */ jsx(Tag, { size: 'sm', children: tagName }),
        ],
      }),
      /* @__PURE__ */ jsx('span', {
        className: dateStyle,
        children: date2.getDate(),
      }),
    ],
  });
};
const ARTICLES = [
  {
    id: 1,
    title: 'Remix에서 블로그 만들기',
    date: /* @__PURE__ */ new Date('2024-05-20'),
    tagName: 'Remix',
  },
  {
    id: 2,
    title: 'vanilla-extract 시작하기',
    date: /* @__PURE__ */ new Date('2024-05-15'),
    tagName: 'CSS-in-JS',
  },
  {
    id: 3,
    title: 'TypeScript와 함께하는 리액트',
    date: /* @__PURE__ */ new Date('2024-05-10'),
    tagName: 'TypeScript',
  },
  {
    id: 4,
    title: 'UI/UX 디자인 원칙',
    date: /* @__PURE__ */ new Date('2024-05-05'),
    tagName: 'Design',
  },
];
const loader = async () => {
  return json({ articles: ARTICLES });
};
function Blog() {
  const { articles } = useLoaderData();
  return /* @__PURE__ */ jsxs('div', {
    className: container$1,
    children: [
      /* @__PURE__ */ jsx('h1', { className: title$2, children: 'Blog' }),
      /* @__PURE__ */ jsx('div', {
        className: articleListContainer,
        children: /* @__PURE__ */ jsx('ul', {
          className: articleList,
          children: articles.map((article) =>
            /* @__PURE__ */ jsx(
              'li',
              {
                className: articleItem,
                children: /* @__PURE__ */ jsx(
                  ArticleCard,
                  {
                    title: article.title,
                    date: new Date(article.date),
                    tagName: article.tagName,
                  },
                  article.id,
                ),
              },
              article.id,
            ),
          ),
        }),
      }),
    ],
  });
}
const route5 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Blog,
      loader,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const serverManifest = {
  entry: {
    module: '/assets/entry.client-1mp38WrY.js',
    imports: [
      '/assets/jsx-runtime-56DGgGmo.js',
      '/assets/components-DxV6QW-s.js',
    ],
    css: [],
  },
  routes: {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: true,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/root-B4F7lfSK.js',
      imports: [
        '/assets/jsx-runtime-56DGgGmo.js',
        '/assets/components-DxV6QW-s.js',
        '/assets/createRuntimeFn-62c9670f.esm-Bv4SPzfY.js',
      ],
      css: [
        '/assets/root-Cn7fFWwd.css',
        '/assets/createRuntimeFn-62c9670f-D5AXamKB.css',
      ],
    },
    'routes/actions.set-theme': {
      id: 'routes/actions.set-theme',
      parentId: 'root',
      path: 'actions/set-theme',
      index: void 0,
      caseSensitive: void 0,
      hasAction: true,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/actions.set-theme-l0sNRNKZ.js',
      imports: [],
      css: [],
    },
    'routes/index.css': {
      id: 'routes/index.css',
      parentId: 'root',
      path: 'index/css',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/index.css-DwT0tnv1.js',
      imports: [],
      css: ['/assets/index.css.ts-DzdHgTh2.css'],
    },
    'routes/blog.css': {
      id: 'routes/blog.css',
      parentId: 'routes/blog',
      path: 'css',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/blog.css-BOY_w52W.js',
      imports: [],
      css: ['/assets/blog.css.ts-C28bvfjG.css'],
    },
    'routes/_index': {
      id: 'routes/_index',
      parentId: 'root',
      path: void 0,
      index: true,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/_index-D51T1g3-.js',
      imports: [
        '/assets/jsx-runtime-56DGgGmo.js',
        '/assets/createRuntimeFn-62c9670f.esm-Bv4SPzfY.js',
        '/assets/Tag-D0BAx3Kx.js',
      ],
      css: [
        '/assets/_index-CP6J3B1_.css',
        '/assets/index.css.ts-DzdHgTh2.css',
        '/assets/createRuntimeFn-62c9670f-D5AXamKB.css',
        '/assets/Tag-BbWLLoFn.css',
      ],
    },
    'routes/blog': {
      id: 'routes/blog',
      parentId: 'root',
      path: 'blog',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: true,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/blog-Cxfz3tnm.js',
      imports: [
        '/assets/jsx-runtime-56DGgGmo.js',
        '/assets/Tag-D0BAx3Kx.js',
        '/assets/createRuntimeFn-62c9670f.esm-Bv4SPzfY.js',
        '/assets/components-DxV6QW-s.js',
      ],
      css: [
        '/assets/blog-A4F28mh4.css',
        '/assets/blog.css.ts-C28bvfjG.css',
        '/assets/Tag-BbWLLoFn.css',
        '/assets/createRuntimeFn-62c9670f-D5AXamKB.css',
      ],
    },
  },
  url: '/assets/manifest-fa0a87c5.js',
  version: 'fa0a87c5',
};
const mode = 'production';
const assetsBuildDirectory = 'build/client';
const basename = '/';
const future = {
  v3_fetcherPersist: true,
  v3_relativeSplatPath: true,
  v3_throwAbortReason: true,
  unstable_singleFetch: false,
  unstable_lazyRouteDiscovery: false,
  unstable_optimizeDeps: false,
};
const isSpaMode = false;
const publicPath = '/';
const entry = { module: entryServer };
const routes = {
  root: {
    id: 'root',
    parentId: void 0,
    path: '',
    index: void 0,
    caseSensitive: void 0,
    module: route0,
  },
  'routes/actions.set-theme': {
    id: 'routes/actions.set-theme',
    parentId: 'root',
    path: 'actions/set-theme',
    index: void 0,
    caseSensitive: void 0,
    module: route1,
  },
  'routes/index.css': {
    id: 'routes/index.css',
    parentId: 'root',
    path: 'index/css',
    index: void 0,
    caseSensitive: void 0,
    module: route2,
  },
  'routes/blog.css': {
    id: 'routes/blog.css',
    parentId: 'routes/blog',
    path: 'css',
    index: void 0,
    caseSensitive: void 0,
    module: route3,
  },
  'routes/_index': {
    id: 'routes/_index',
    parentId: 'root',
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4,
  },
  'routes/blog': {
    id: 'routes/blog',
    parentId: 'root',
    path: 'blog',
    index: void 0,
    caseSensitive: void 0,
    module: route5,
  },
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes,
};
