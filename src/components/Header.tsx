import { Link } from "react-router"; // Gunakan react-router-dom, bukan react-router
import LogoutButton from "./LogoutButton";

const Header = () => {
    // Ambil data pengguna dari localStorage
    const user = localStorage.getItem("user");
    const email = user ? JSON.parse(user).email : null;

    return (
        <header className="flex justify-between items-center p-6 bg-teal-900 text-white">
            <div className="font-bold text-xl">
                <Link to="/">Ajukan<span className="text-green-600">AJA</span></Link>
            </div>
            <div className="space-x-4">
                {!email && (
                    <>
                        {/* Tampilkan jika tidak ada user yang login */}
                        <Link to="/login" className="hover:text-yellow-300">
                            Login
                        </Link>
                        <Link to="/register" className="hover:text-yellow-300">
                            Daftar
                        </Link>
                    </>
                )}

                {email === "user@gmail.com" && (
                    <>
                        <Link to="/user/dashboard" className="hover:text-yellow-300">
                            Dashboard
                        </Link>
                        <LogoutButton />
                    </>
                )}

                {email === "admin@gmail.com" && (
                    <><Link to="/admin/analitik" className="hover:text-yellow-300">
                        Dashboard
                    </Link><LogoutButton /></>
                )}

            </div>
        </header>
    );
};

export default Header;
