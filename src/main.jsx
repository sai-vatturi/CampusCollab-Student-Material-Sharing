import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts.css";
import LoginPage from "./LoginPage.jsx";
import MaterialsView from "./MaterialsView.jsx";
import Card from "./components/Card.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MaterialsView />
    </React.StrictMode>
);
