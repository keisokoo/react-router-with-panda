import { css } from "styled-system/css";
import { Button } from "~/components/button";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <div>
      <h1
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          color: "dd.primary",
          textStyle: "title-24-700",
        })}
      >
        Welcome to the home sdssssxx22
      </h1>
      <Button size={"md"} color={"blue"}>
        Click me
      </Button>
    </div>
  );
}
