import { Link } from "@remix-run/react";
import { Theme, useTheme } from "~/context/ThemeProvider";
import darkLogo from "../../../public/assets/image/img_logo_dark.png";
import lightLogo from "../../../public/assets/image/img_logo_light.png";
import Switch from "../switch/Switch";
import {
  gapStyle,
  headerStyle,
  imageStyle,
  linkStyle,
  menuSectionStyle,
  menuStyle,
} from "./styles.css";

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

      <div className={gapStyle}>
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
          <li className={menuStyle}>
            <Link to="/project" className={linkStyle}>
              Projects
            </Link>
          </li>
          <li className={menuStyle}>
            <Link to="/contact" className={linkStyle}>
              Contact
            </Link>
          </li>
        </ul>

        <Switch
          mode={theme === Theme.light ? "light" : "dark"}
          onChange={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
