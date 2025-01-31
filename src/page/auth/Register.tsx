// Register.js
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [noTelp, setnoTelp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Create an Account</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setnoTelp(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="nomor telepon" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="number"
                            id="nomor_telepon"
                            name="nomor_telepon"
                            value={noTelp}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-700"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm mt-4">
                        Already have an account? <a href="/login" className="text-green-600 hover:text-green-800">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
