import { useState } from "react";

import {RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import router from "./router";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
