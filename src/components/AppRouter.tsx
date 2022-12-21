import React from "react";
import { IRoute, routes } from "../routes";
import List from "./List";
import { Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route: IRoute) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
