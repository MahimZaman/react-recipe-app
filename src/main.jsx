import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error404 from "./routes/Error404.jsx";
import Categories from "./routes/Categories.jsx";
import Meals from "./routes/Meals.jsx";
import MealDetails from "./routes/MealDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/categories/:catId",
        element: <Meals />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: "/recipe/:mealId",
        element: <MealDetails />,
        loader: ({ params }) => {
          return params;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
