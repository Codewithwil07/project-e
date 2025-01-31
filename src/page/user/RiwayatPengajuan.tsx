import { Link } from "react-router";

const RiwayatPengajuan = () => {
    const pengajuanList = [
        { id: 1, nama: "Pengajuan A", status: "Diproses", tanggal: "2024-12-10" },
        { id: 2, nama: "Pengajuan B", status: "Diterima", tanggal: "2024-12-09" },
        { id: 3, nama: "Pengajuan C", status: "Ditolak", tanggal: "2024-12-08" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4 mt-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold text-gray-800">Riwayat Pengajuan</h1>
                <Link to={'/user/pengajuan-modal'}>
                    <button className="btn-primary active:scale-95 transform transition-transform">Buat Baru</button>
                </Link>
            </div>
            <table className="mt-4 w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nama Pengajuan</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {pengajuanList.map((pengajuan) => (
                        <tr key={pengajuan.id} className="border-t">
                            <td className="px-4 py-2 text-sm text-gray-700">{pengajuan.nama}</td>
                            <td
                                className={`px-4 py-2 text-sm font-medium ${pengajuan.status === "Diproses"
                                    ? "text-indigo-600"
                                    : pengajuan.status === "Diterima"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {pengajuan.status}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-700">{pengajuan.tanggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiwayatPengajuan;
