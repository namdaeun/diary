import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Switch from "~/components/switch/Switch";
import { Theme, useTheme } from "~/context/ThemeProvider";

export const meta: MetaFunction = () => {
  return [{ title: "diary" }, { name: "description", content: "다이어리" }];
};

export default function Index() {
  // 후에 헤더로 옮길 theme 코드
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.light ? Theme.dark : Theme.light));
  };

  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>

      <Switch
        mode={theme === Theme.light ? "light" : "dark"}
        onChange={toggleTheme}
      />
    </div>
  );
}
