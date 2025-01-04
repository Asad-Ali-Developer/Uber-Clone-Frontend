import { Routes } from "react-router-dom";
import { routes } from "./routes";
import { generateRoutes } from "./utils";

const App = () => {
  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default App;
