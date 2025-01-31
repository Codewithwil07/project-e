import { useEffect, useState } from "react";

// Define the type of data you expect to receive

const DataPengajuan = () => {
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
  // Fetch data from the API when the component mounts and set it to the state variable
  useEffect(() => {
    const nagalakData = async () => {
      try {
        const ngajuagiReya = await fetch("http://localhost:3001/pengajuan");
        if (ngajuagiReya.ok) {
          const data: Pengajuan[] = await ngajuagiReya.json();
          setPengajuan(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    nagalakData(); // Call the function after it's defined
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  const updateStatus = async (id: number, currentStatus: string) => {
    // Determine the next status
    const nextStatus =
      currentStatus === "Disetujui"
        ? "Ditolak"
        : currentStatus === "Ditolak"
        ? "Menunggu"
        : "Disetujui";

    // Update status locally
    setPengajuan((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item
      )
    );
    // Make API call to update status on the server
    try {
      const response = await fetch(`http://localhost:3001/pengajuan/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Edit Daftar Pengajuan</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Nama Usaha</th>
                <th className="py-3 px-6 text-left">Deskripsi</th>
                <th className="py-3 px-6 text-left">Telepon</th>
                <th className="py-3 px-6 text-left">Tanggal</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {pengajuan.length > 0 ? (
                pengajuan.map((item) => (
                  <tr
                    key={item.id} // Use item.id as the unique key instead of index
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{item.nama}</td>
                    <td className="py-3 px-6 text-left">{item.nama_usaha}</td>
                    <td className="py-3 px-6 text-left">{item.deskripsi}</td>
                    <td className="py-3 px-6 text-left">{item.no_telp}</td>
                    <td className="py-3 px-6 text-left">{item.tanggal}</td>
                    <td
                      className="py-3 px-6 text-left cursor-pointer"
                      onClick={() => updateStatus(item.id, item.status)}
                    >
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          item.status === "Disetujui"
                            ? "bg-green-200 text-green-600"
                            : item.status === "Ditolak"
                            ? "bg-red-200 text-red-600"
                            : "bg-yellow-200 text-yellow-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 text-xs">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-3 px-6 text-center text-gray-500"
                  >
                    Tidak ada data pengajuan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPengajuan;
