import {
    createContext,
    useState,
    useCallback,
    useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const loginAction = useCallback(
        async (data) => {
            try {
                const response = await fetch("your-api-endpoint/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                const res = await response.json();
                if (res.data) {
                    setUser(res.data.user);
                    setToken(res.token);
                    localStorage.setItem("token", res.token);
                    navigate("/dashboard");
                    return;
                }
                throw new Error(res.message);
            } catch (err) {
                console.error(err);
            }
        },
        [navigate]
    );

    const logOut = useCallback(() => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    }, [navigate]);

    const contextValue = useMemo(() => {
        return { user, token, loginAction, logOut };
    }, [user, token, loginAction, logOut]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
