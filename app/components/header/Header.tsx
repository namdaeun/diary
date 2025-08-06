import { Link } from '@remix-run/react';
import { type Theme, useTheme } from 'remix-themes';
import lightLogo from '../../../public/assets/image/img_logo.png';
import darkLogo from '../../../public/assets/image/img_logo_dark.png';
import Switch from '../switch/Switch';
import { headerStyle, imageStyle } from './styles.css';

const Header = () => {
  const [theme, setTheme] = useTheme();

  const handleToggle = () => {
    const nextState = {
      light: 'dark',
      dark: 'light',
    };

    const nextTheme = nextState[theme as keyof typeof nextState] ?? 'light';

    setTheme(nextTheme as Theme);
  };

  return (
    <header className={headerStyle}>
      <Link to="/">
        <img
          src={lightLogo}
          className={`${imageStyle} light-logo`}
          alt="라이트 모드 로고"
        />
        <img
          src={darkLogo}
          className={`${imageStyle} dark-logo`}
          alt="다크 모드 로고"
        />
      </Link>
      {/* <ul className={menuSectionStyle}>
        <li className={menuStyle}>
          <Link to="/blog" className={linkStyle}>
            Blog
          </Link>
        </li>
      </ul> */}
      <Switch
        mode={theme === 'light' ? 'light' : 'dark'}
        onChange={handleToggle}
      />
    </header>
  );
};

export default Header;
