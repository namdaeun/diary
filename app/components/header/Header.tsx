import { Link } from '@remix-run/react';
import { Theme, useTheme } from '~/context/ThemeProvider';
import lightLogo from '../../../public/assets/image/img_logo.png';
import darkLogo from '../../../public/assets/image/img_logo_dark.png';
import Switch from '../switch/Switch';
import {
  headerStyle,
  imageStyle,
  linkStyle,
  menuSectionStyle,
  menuStyle,
} from './styles.css';

const logos = {
  [Theme.light]: lightLogo,
  [Theme.dark]: darkLogo,
};

const Header = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.light ? Theme.dark : Theme.light));
  };

  const currentTheme = theme ?? Theme.dark;

  return (
    <header className={headerStyle}>
      <Link to="/">
        <img src={logos[currentTheme]} className={imageStyle} alt="로고" />
      </Link>
      <ul className={menuSectionStyle}>
        <li className={menuStyle}>
          <Link to="/about" className={linkStyle}>
            About
          </Link>
        </li>
        <li className={menuStyle}>
          <Link to="/blog" className={linkStyle}>
            Blog
          </Link>
        </li>
      </ul>
      <Switch
        mode={theme === Theme.light ? 'light' : 'dark'}
        onChange={toggleTheme}
      />
    </header>
  );
};

export default Header;
