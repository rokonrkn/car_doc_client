import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/home/home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "../components/Private/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Registration></Registration>
      },
      {
        path: 'book/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:4000/service/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }

    ],
  },
]);
