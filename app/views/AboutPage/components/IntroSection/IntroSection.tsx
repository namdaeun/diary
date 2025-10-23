import * as s from './styles.css';

const LINKS = {
  GITHUB: 'https://github.com/namdaeun',
  LINKEDIN: 'https://www.linkedin.com/in/skaekdms/',
  EMAIL: 'mailto:nde40345@gmail.com',
  BLOG: 'https://velog.io/@namdaeun/posts',
};

const IntroSection = () => {
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>안녕하세요,</h1>
        <h2 className={s.subTitle}>프론트엔드 개발자 남다은입니다.</h2>
      </div>
      <div className={s.locationWrapper}>
        <i className={`ri-map-pin-line ${s.icon}`} />
        <p className={s.location}>서울, 대한민국</p>
      </div>
      <div className={s.contactWrapper}>
        <button
          className={s.button}
          onClick={() => handleClick(LINKS.GITHUB)}
          type="button"
        >
          <i className={`ri-github-line ${s.buttonIcon}`} />
        </button>
        <button
          className={s.button}
          onClick={() => handleClick(LINKS.LINKEDIN)}
          type="button"
        >
          <i className={`ri-linkedin-box-line ${s.buttonIcon}`} />
        </button>
        <button
          className={s.button}
          onClick={() => handleClick(LINKS.EMAIL)}
          type="button"
        >
          <i className={`ri-mail-line ${s.buttonIcon}`} />
        </button>
        <button
          className={s.button}
          onClick={() => handleClick(LINKS.BLOG)}
          type="button"
        >
          <i className={`ri-blogger-line ${s.buttonIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
