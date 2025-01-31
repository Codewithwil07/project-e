import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Simulated login validation
        if (email === "admin@gmail.com" && password === "admin123") {
            const user = { email }; // Simulated user object
            login(user); // Update global state and localStorage
            navigate('/')
        } else if (email === "user@gmail.com" && password === "user") {
            const user = { email }; // Simulated user object
            login(user); // Update global state and localStorage
            navigate('/')
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
