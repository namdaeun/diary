import type { MetaFunction } from "@remix-run/node";
import { indexStyle } from "./index.css";

export const meta: MetaFunction = () => {
  return [{ title: "diary" }, { name: "description", content: "다이어리" }];
};

export default function Index() {
  return (
    <div className={indexStyle}>
    </div>
  );
}
