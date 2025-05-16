import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LinksFunction,
} from "react-router";

import type { Route } from "./+types/root";

import stylesheet from "./app.css?url";

async function getColorsFromDB() {
  // 실제 DB 쿼리 로직으로 교체
  return {
    "--color-primary": "#3700ff",
    "--color-secondary": "#ff7700",
    "--color-tertiary": "#00ff2a",
    "--color-quaternary": "#00e1ff",
    "--color-quinary": "#0026ff",
    "--color-senary": "#d400ff",
    "--color-septenary": "#f2ff00",
  };
}

export async function loader({ request }: Route.LoaderArgs) {
  const colors = await getColorsFromDB();
  return colors;
}
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
};
export function Layout({ children }: { children: React.ReactNode }) {
  const colors = useLoaderData<typeof loader>();
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <style>
          {`
:root {
${Object.entries(colors)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n")}
}
          `}
        </style>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
function createTheme(arg0: {
  tokens: {
    colors: {
      dd: {
        primary: { value: any };
        secondary: { value: any };
        tertiary: { value: any };
        quaternary: { value: any };
        quinary: { value: any };
        senary: { value: any };
        septenary: { value: any };
      };
    };
  };
}) {
  throw new Error("Function not implemented.");
}
function getTheme(): any {
  throw new Error("Function not implemented.");
}
