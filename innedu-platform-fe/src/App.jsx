import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout/EmptyLayout";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="termsOfService" element={<TermsOfService />} />
                    <Route path="policy" element={<Policy />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Route>
                <Route path="/auth" element={<EmptyLayout />} >
                    <Route index element={<Auth />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
