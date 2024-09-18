import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazy-load/pages/NoLazy";
import LazyLayout from "../01-lazy-load/layout/LazyLayout";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//componente lazy: para que esto funcione el componente debe ser exportado por defecto

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../01-lazy-load/pages/LazyPage1"));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazy-load/pages/LazyPage2"));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazy-load/pages/LazyPage3"));

const lazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */"../01-lazy-load/layout/LazyLayout"));
export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: lazyLayout,
    name: "Lazy layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },

];
