import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ScrollTop } from "primereact/scrolltop";

import TransitionRoutes from "../../transitionRoutes";

export default function MainLayout() {
    return (
        <div
            style={{
                paddingTop: "105px",
            }}
        >
            <Header />
            <TransitionRoutes>
                <Outlet />
            </TransitionRoutes>
            <Footer />
            <ScrollTop threshold={100} />
        </div>
    );
}
