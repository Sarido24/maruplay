import { createBrowserRouter, redirect } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import RegisterPageUser from "../pages/RegisterPageUser";
import ProductsPage from "../pages/ProductsPage";
import Chart from "../pages/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pubProducts",
    element: <ProductsPage />,
  },
  {
    path: "/register",
    element: <RegisterPageUser />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded, "< decoded");
          return redirect("/");
        } catch (err) {
          console.log(err, "< error dari jwt decode");
          return null;
        }
      } else {
        return null;
      }
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log(decoded, "< decoded");
          return redirect("/");
        } catch (err) {
          console.log(err, "< error dari jwt decode");
          return null;
        }
      } else {
        return null;
      }
    },
  },
  {
    path: "/chart",
    element: <Chart />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return null;
      } else {
        sessionStorage.setItem("errorPageMessage", "You must be login first");
        return redirect("/login");
      }
    },
  },
]);

export default router;
