import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header/Header";

export const meta: MetaFunction = () => {
  return [{ title: "diary" }, { name: "description", content: "다이어리" }];
};

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Header />
    </div>
  );
}
