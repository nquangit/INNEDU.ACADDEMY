import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "primeicons/primeicons.css"; // PrimeIcons

import "primeflex/primeflex.css"; // flex

import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { AuthProvider } from "./contexts/auth/AuthContext";
import { AppProvider } from "./contexts/AppContext";

import ScrollToTop from "./components/ScrollTopOnLink.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <PrimeReactProvider>
                <AuthProvider>
                    <AppProvider>
                        <ScrollToTop />
                        <App />
                    </AppProvider>
                </AuthProvider>
            </PrimeReactProvider>
        </BrowserRouter>
    </React.StrictMode>
);
