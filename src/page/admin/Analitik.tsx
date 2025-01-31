import { useEffect, useState } from "react";

const Analitik = () => {
  const [pengajuan, setPengajuan] = useState<Pengajuan[]>([]);

  interface Pengajuan {
    id: number;
    nama: string;
    nama_usaha: string; // Added this field to match the table rendering
    deskripsi: string; // Added this field to match the table rendering
    no_telp: string; // Added this field to match the table rendering
    tanggal: string; // Added this field to match the table rendering
    status: string;
  }

  useEffect(() => {
    const nagalakData = async () => {
      try {
        const ngajuagiReya = await fetch("http://localhost:3001/pengajuan");
        if (ngajuagiReya.ok) {
          const data: Pengajuan[] = await ngajuagiReya.json();
          console.log(data);

          setPengajuan(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    nagalakData(); // Call the function after it's defined
  }, []); // Empty dependency array ensures it

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Total Pengguna</h2>
          <p className="text-3xl font-bold text-blue-600">1,23488888</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Pengajuan Baru</h2>
          <p className="text-3xl font-bold text-green-600">45</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Pengajuan Disetujui</h2>
          <p className="text-3xl font-bold text-indigo-600">128</p>
        </div>
      </div>

      {/* Data Pengajuan Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Data Pengajuan</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Nama Usaha</th>
                <th className="py-3 px-6 text-left">Telepon</th>
                <th className="py-3 px-6 text-left">Tanggal</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {/* Example Row */}
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                {pengajuan.map((item) => (
                  <>
                    <td className="py-3 px-6 text-left">{item.nama}</td>
                    <td className="py-3 px-6 text-left">{item.nama_usaha}</td>
                    <td className="py-3 px-6 text-left">{item.no_telp}</td>
                    <td className="py-3 px-6 text-left">{item.tanggal}</td>
                    <td className="py-3 px-6 text-left">{item.status}</td>
                  </>
                ))}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analitik;
