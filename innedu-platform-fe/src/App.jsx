import "./App.css";

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout/EmptyLayout";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Courses from "./pages/Courses";

import NotFound from "./pages/NotFound";

import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    useEffect(() => {
        // Vô hiệu hóa chuột phải
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });

        // Vô hiệu hóa chức năng chọn văn bản
        document.addEventListener("selectstart", (e) => {
            e.preventDefault();
        });

        // Vô hiệu hóa các tổ hợp phím copy
        const handleKeyDown = (e) => {
            if (
                (e.ctrlKey && e.key === "c") ||
                (e.ctrlKey && e.key === "v") ||
                (e.metaKey && e.key === "c") ||
                (e.metaKey && e.key === "v")
            ) {
                e.preventDefault();
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", (e) =>
                e.preventDefault()
            );
            document.removeEventListener("selectstart", (e) =>
                e.preventDefault()
            );
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="termsOfService" element={<TermsOfService />} />
                    <Route path="policy" element={<Policy />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="courses" element={<Courses />} />
                </Route>
                <Route path="/auth" element={<EmptyLayout />}>
                    <Route index element={<Auth />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
