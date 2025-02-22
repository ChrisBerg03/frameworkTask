import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Products } from "./components/Layout/Main.jsx";
import { Layout } from "./components/Layout/index.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/checkout",
        element: <h1>hello</h1>,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
