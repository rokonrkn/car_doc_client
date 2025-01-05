import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/home/home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          }
        ],
      },
]);
