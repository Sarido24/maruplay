import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
          return redirect("/seller");
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
