import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

export const RouteMaker = (props) => {
  const { routes } = props;

  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const routeConfig = routes[key];

        if (typeof routeConfig === "object" && routeConfig.children) {
          // Handle parent routes with children
          return (
            <Route
              key={key}
              path={key}
              element={routeConfig.element || <Outlet />}
            >
               {routeConfig.children.map((child, index) => (
                <Route
                  key={index}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          );
        }

        // Handle simple routes without children
        return <Route key={key} path={key} element={routeConfig} />;
      })}
    </Routes>
  );
};
