import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet  } from "react-router-dom";

export default function GuestRoute() {
    const { user } = useAuth();
    if (!user.token) return <Navigate to="/auth/login" />;
    return <Outlet />;
}
