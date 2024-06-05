import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
