import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import Restaurant from "./Pages/Restaurant";

const a = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={a}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
