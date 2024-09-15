import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "daLog" },
    { name: "description", content: "다로그, 다 기록하는 기술블로그" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>
    </div>
  );
}
