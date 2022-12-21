import React from "react";
import Home from "../pages/Home/Home";
import NewsById from "../pages/NewsById/NewsById";
import { Navigate } from "react-router-dom";
import Search from "../pages/Search/Search";
export interface IRoute {
  path: string;
  component: JSX.Element;
}

const routeNames = {
  HOME: "/",
  NEWS_BY_ID: "/news-by-id",
  SEARCH: "/search",
  ERROR: "*",
};

export const routes: IRoute[] = [
  { path: routeNames.HOME, component: <Home /> },
  { path: routeNames.NEWS_BY_ID, component: <NewsById /> },
  { path: routeNames.SEARCH, component: <Search /> },
  { path: routeNames.ERROR, component: <Navigate to="/" replace /> },
];
