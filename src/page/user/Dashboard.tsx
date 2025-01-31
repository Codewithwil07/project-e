import { Link } from "react-router";
import RiwayatPengajuan from "./RiwayatPengajuan";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-black p-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
                <Link to='/'>
                    <button className="btn-back text-black active:scale-95 transform transition-transform">back</button>
                </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-medium text-gray-700">Total Pengajuan</h2>
                    <p className="mt-2 text-2xl font-bold text-indigo-600">15</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-medium text-gray-700">Pengajuan Diproses</h2>
                    <p className="mt-2 text-2xl font-bold text-green-600">5</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-medium text-gray-700">Pengajuan Ditolak</h2>
                    <p className="mt-2 text-2xl font-bold text-red-600">2</p>
                </div>
            </div>
            <RiwayatPengajuan />
        </div>
    );
};

export default Dashboard;
