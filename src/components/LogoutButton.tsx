import React from "react";
import { useAuth } from "../page/hooks/useAuth";
const LogoutButton: React.FC = () => {
    const { logout } = useAuth();

    return (
        <button
            onClick={logout}
            className="relative px-6 py-3 rounded-full font-semibold text-green-500 border-2 border-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white focus:outline-none"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
