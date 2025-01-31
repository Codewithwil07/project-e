import { useState } from "react";
import { Link } from "react-router"; // Perbaiki import Link

// Interface untuk item navigasi
interface NavBar {
    id: number;
    to: string;
    name: string;
}

// Data navigasi
const nav: NavBar[] = [
    { id: 1, name: "Analitik", to: "/admin/analitik" },
    { id: 2, name: "Data Pengajuan", to: "/admin/data-pengajuan" },
];

const AdminNav = () => {
    // State untuk navigasi
    const [activeNav, setActiveNav] = useState<number | null>(1
        
    );

    // Fungsi animasi navigasi
    const navAnimate = (id: number) => {
        setActiveNav(id); 
        
    };

    return (
        <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between w-full">
            <div className="px-6">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center px-6 gap-x-8">
                {/* Render Link untuk setiap item navigasi */}
                {nav.map((navItem) => (
                    <Link
                        className={`${activeNav === navItem.id ? "underline" : ""
                            }`} // Tambahkan class animasi jika aktif
                        key={navItem.id}
                        to={navItem.to}
                        onClick={() => navAnimate(navItem.id)}
                    >
                        {navItem.name}
                    </Link>
                ))}
                <Link to="/">
                    <button className="btn-back active:scale-95 transform transition-transform">
                        Back
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default AdminNav;
