import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { darkTheme, lightTheme } from "~/styles/global.css";

enum Theme {
  dark = "dark",
  light = "light",
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(Theme.dark);

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
