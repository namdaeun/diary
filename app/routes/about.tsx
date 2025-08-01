import * as S from "./about.css";


const LINKS = {
  GITHUB: "https://github.com/namdaeun",
  LINKEDIN: "https://www.linkedin.com/in/skaekdms/",
  EMAIL: "mailto:nde40345@gmail.com",
}

const About = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div className={S.wrapper}>
      <div className={S.titleWrapper}>
        <h1 className={S.title}>안녕하세요,</h1>
        <h2 className={S.subTitle}>프론트엔드 개발자 남다은입니다.</h2>
      </div>
      <div className={S.locationWrapper}>
        <i className={`ri-map-pin-line ${S.icon}`}></i>
        <p className={S.location}>서울, 대한민국</p>
      </div>
      <div className={S.contactWrapper}>
        <button className={S.button} onClick={() => handleClick(LINKS.GITHUB)}>
          <i className={`ri-github-line ${S.buttonIcon}`}></i>
        </button>
        <button className={S.button} onClick={() => handleClick(LINKS.LINKEDIN)}>
          <i className={`ri-linkedin-box-line ${S.buttonIcon}`}></i>
        </button>
        <button className={S.button} onClick={() => handleClick(LINKS.EMAIL)}>
          <i className={`ri-mail-line ${S.buttonIcon}`}></i>
        </button>
      </div>
    </div>
  )
}

export default About