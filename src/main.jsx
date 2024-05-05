import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts.css";
import LoginPage from "./LoginPage.jsx";
import MaterialsView from "./MaterialsView.jsx";
import SignUpPage from "./SignUpPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserGuide from "./UserGuide.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/materials",
        element: <MaterialsView />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/userguide",
        element: <UserGuide />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
