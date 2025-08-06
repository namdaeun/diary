import { Link } from '@remix-run/react';
import { useTheme } from 'remix-themes';
import lightLogo from '../../../public/assets/image/img_logo.png';
import darkLogo from '../../../public/assets/image/img_logo_dark.png';
import * as s from './styles.css';

const Footer = () => {
  // `remix-themes`의 훅을 사용합니다.
  // `theme`은 클라이언트에서 'light' 또는 'dark'로 결정됩니다.
  const [theme] = useTheme();

  // 초기 렌더링 시 theme이 아직 결정되지 않은 경우(null)를 대비하여 기본값을 설정합니다.
  const displayTheme = theme ?? 'light';

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftSection}>
          <div className={s.logoSection}>
            <Link to="/about">
              <img
                src={lightLogo}
                className={`${s.logo} light-logo`}
                alt="라이트 모드 로고"
              />
              <img
                src={darkLogo}
                className={`${s.logo} dark-logo`}
                alt="다크 모드 로고"
              />
            </Link>
            <p className={s.description}>개발일지 끄적끄적</p>
          </div>
        </div>

        <div className={s.socialSection}>
          <ul className={s.linkList}>
            <li className={s.linkItem}>
              <a
                href="https://github.com/dareun-nam"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                <i className={`ri-github-fill ${s.socialLinkIcon}`} />
              </a>
            </li>
            <li className={s.linkItem}>
              <a
                href="https://velog.io/@dareun_nam/posts"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                <i className={`ri-blogger-fill ${s.socialLinkIcon}`} />
              </a>
            </li>
            <li className={s.linkItem}>
              <a href="mailto:your.email@example.com" className={s.socialLink}>
                <i className={`ri-mail-fill ${s.socialLinkIcon}`} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.bottomSection}>
        <p className={s.copyright}>
          © {new Date().getFullYear()} 남다은. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
