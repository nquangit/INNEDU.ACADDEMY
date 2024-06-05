import {
    createContext,
    useState,
    useMemo,
    useContext,
    useCallback,
} from "react";
import PropTypes from "prop-types";
import { PrimeReactContext } from "primereact/api";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const { changeTheme } = useContext(PrimeReactContext);
    const [theme, setTheme] = useState("light");

    const switchTheme = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        changeTheme(
            `lara-${theme}-amber`,
            `lara-${newTheme}-amber`,
            "theme-link",
            () => setTheme(newTheme)
        );
    }, [theme, changeTheme]);

    const contextValue = useMemo(() => {
        return { theme, switchTheme };
    }, [theme, switchTheme]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
