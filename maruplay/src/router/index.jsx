import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import RegisterPageUser from "../pages/RegisterPageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegisterPageUser/>,
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
    element: <LoginPage/>,
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
]);

export default router;
