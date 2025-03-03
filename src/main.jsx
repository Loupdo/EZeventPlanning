import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import CSS

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Home from "./components/home";
import Register from "./components/register";
import Events from "./components/events";
import Help from "./components/help";
import { ContextProvider } from "./components/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
