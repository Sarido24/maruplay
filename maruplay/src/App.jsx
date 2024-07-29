import { useState } from "react";

import {RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import router from "./router";
import store from "./store";
import { Provider } from 'react-redux'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>;
    </Provider>
  );
}

export default App;
