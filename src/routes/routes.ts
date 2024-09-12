import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//componente lazy: para que esto funcione el componente debe ser exportado por defecto

const lazy1 = lazy(() => import("../01-lazy-load/pages/LazyPage1"));
const lazy2 = lazy(() => import("../01-lazy-load/pages/LazyPage2"));
const lazy3 = lazy(() => import("../01-lazy-load/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "Lazy-3",
  },
];
