import { Route } from "react-router-dom";
import { RouteConfig } from "../interfaces";

const generateRoutes = (routes: RouteConfig[]) =>
  routes.map(({ path, component: Component, wrapper: Wrapper }, index) => (
    <Route
      key={index}
      path={path}
      element={
        Wrapper ? (
          <Wrapper>
            <Component />
          </Wrapper>
        ) : (
          <Component />
        )
      }
    />
  ));

export default generateRoutes;
