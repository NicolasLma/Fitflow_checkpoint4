import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Connection from "./pages/Connection";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Exercices from "./pages/Exercices";
import FilteredExercices from "./pages/FilteredExercices";
import DetailsFilteredExercices from "./pages/DetailsFilteredExercices";
import Programs from "./pages/Programs";
import DetailsPrograms from "./pages/DetailsPrograms";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/connexion",
        element: <Connection />,
      },
      {
        path: "/insciption",
        element: <Registration />,
      },
      {
        path: "/exercices",
        element: <Exercices />,
      },
      {
        path: "/exercicesfiltrés",
        element: <FilteredExercices />,
      },
      {
        path: "/détailsexercices",
        element: <DetailsFilteredExercices />,
      },
      {
        path: "/programmes",
        element: <Programs />,
      },
      {
        path: "/programmesdetails",
        element: <DetailsPrograms />,
      },
      {
        path: "/profil",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
