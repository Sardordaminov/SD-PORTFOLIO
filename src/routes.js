import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import ProjectsPage from "./pages/projects/ProjectsPage";

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        // { path: "/projects", element: <ProductViewM /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  return useRoutes(PublicRoute);
};
