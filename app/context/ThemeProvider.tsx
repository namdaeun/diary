import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from "react";
import { darkTheme, lightTheme } from "~/styles/global.css";

enum Theme {
  dark = "dark",
  light = "light",
}

type ThemeContextType = [Theme, Dispatch<SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType>([Theme.dark, () => {}]);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={theme === Theme.light ? lightTheme : darkTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { Theme, ThemeProvider, useTheme };
