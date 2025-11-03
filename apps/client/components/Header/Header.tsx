import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { type Theme, useTheme } from 'remix-themes';
import { SECTIONS } from '~/constants/section';
import Navigation from '../Navigation/Navigation';
import Switch from '../Switch/Switch';
import * as s from './styles.css';

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [activeSection, setActiveSection] = useState('about');

  const handleToggle = () => {
    const nextState = {
      light: 'dark',
      dark: 'light',
    };

    const nextTheme = nextState[theme as keyof typeof nextState] ?? 'light';
    setTheme(nextTheme as Theme);
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

  return (
    <header className={s.headerStyle}>
      <Link to="/" className={s.logoStyle}>
        <h1 className={s.logoStyle}>Daeun Nam</h1>
      </Link>

      <div className={s.navigationContainer}>
        <Navigation activeSection={activeSection} />
        <Navigation activeSection="blog" />
      </div>

      <Switch
        mode={theme === 'light' ? 'light' : 'dark'}
        onChange={handleToggle}
      />
    </header>
  );
};

export default Header;
