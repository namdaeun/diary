import { Link } from '@remix-run/react';
import { type Theme, useTheme } from 'remix-themes';
import Switch from '../Switch/Switch';
import * as s from './styles.css';

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
    <header className={s.headerStyle}>
      <Link to="/" className={s.logoStyle}>
        <h1 className={s.logoStyle}>Daeun Nam</h1>
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
