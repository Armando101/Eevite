import { useRoutes } from "react-router-dom";
import { MyAccount } from "../Pages/MyAccount/MyAccount";
import { MyOrder } from "../Pages/MyOrder/MyOrder";
import { Home } from "../Pages/Home/Home";
import { MyOrders } from "../Pages/MyOrders/MyOrders";
import { SignIn } from "../Pages/SignIn/SignIn";
import { NotFound } from "../Pages/NotFound/NotFound";

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};
