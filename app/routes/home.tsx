import { css } from "styled-system/css";
import { button } from "styled-system/recipes";
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
          color: "red",
          textStyle: "Title/24px/24px.700",
        })}
      >
        Welcome to the home sdssssxx22
      </h1>
      <button className={button()}>Click me</button>
      <button className={button({ shape: "circle" })}>Click me</button>
    </div>
  );
}
