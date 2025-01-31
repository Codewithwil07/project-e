import React, { createContext, useReducer, ReactNode } from "react";
import { useNavigate } from "react-router";

// Types
interface User {
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

type AuthAction = 
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" };

interface AuthContextType extends AuthState {
    login: (user: User) => void;
    logout: () => void;
}

// Initial state
const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    isAuthenticated: !!localStorage.getItem("user"),
};

// Reducer function
function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

// Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate(); // Corrected hook usage

    const login = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "LOGIN", payload: user });
    };

    const logout = () => {
        // Clear localStorage and update state
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });

        // Navigate to login page
        navigate("/login", { replace: true }); // Prevent back navigation
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
