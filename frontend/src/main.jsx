import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BeerProvider } from "./contexts/context";

import App from "./App";
import Beers from "./pages/Beers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/beers`)
        .then((response) => {
          return response.data;
        });
    },
  },
  {
    path: "/beers/:id",
    element: <Beers />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/beers/${params.id}`)
        .then((response) => {
          return response.data;
        });
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BeerProvider>
      <RouterProvider router={router} />
    </BeerProvider>
  </React.StrictMode>
);
