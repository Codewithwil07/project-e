import React, { useState } from "react";
import { Link } from "react-router";

const PengajuanModalUsaha = () => {
    const [formData, setFormData] = useState({
        nama: "",
        nama_usaha: "",
        deskripsi: "",
        file: "",
        no_telp: "",
        tanggal: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Data Pengajuan:", formData);
        alert("Pengajuan berhasil dikirim!");
        // Reset form
        setFormData({
            nama: "",
            nama_usaha: "",
            deskripsi: "",
            file: "",
            no_telp: "",
            tanggal: "",
        });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <Link to='/user/dashboard' className="absolute top-0 right-0 p-5">
                <button className="btn-back text-black active:scale-95 transform transition-transform">Back</button>
            </Link>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Pengajuan Modal Usaha</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Masukkan nama Anda"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nama Usaha</label>
                        <input
                            type="text"
                            name="nama_usaha"
                            value={formData.nama_usaha}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Masukkan nama usaha"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Masukkan deskripsi usaha"
                            rows={4}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Upload File (PDF/DOCX)</label>
                        <input
                            type="file"
                            name="no_telp"
                            value={formData.file}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            pattern="[0-9]{10,13}"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                        <input
                            type="tel"
                            name="no_telp"
                            value={formData.no_telp}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Masukkan nomor telepon"
                            pattern="[0-9]{10,13}"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                        <input
                            type="date"
                            name="tanggal"
                            value={formData.tanggal}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div className="flex justify-between">
                        <button className="btn-danger active:scale-95 transform transition-transform">Batal</button>
                        <button className="btn-primary active:scale-95 transform transition-transform">Ajukan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PengajuanModalUsaha;
