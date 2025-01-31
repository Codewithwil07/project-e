import { Link } from "react-router"; // Gunakan react-router-dom jika perlu
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import image from "../../assets/finance.png"

function Beranda() {
    const user = localStorage.getItem('user');

    return (
        <div className="h-screen">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="flex justify-between items-center bg-gradient-to-b from-green-300 to-white py-16 px-8">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                        Portal <span className="text-green-500">Modal Usaha</span> UMKM
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Akses mudah untuk mendapatkan modal usaha bagi UMKM dengan proses cepat dan transparan.
                    </p>
                    {!user && (
                        <Link
                            to="/register"
                            className="inline-block px-8 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold shadow-lg"
                        >
                            Daftar Sekarang
                        </Link>
                    )}
                </div>
                <div>
                    <img
                        src={image}
                        alt="Modal Usaha"
                        className="w-96 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Fitur Unggulan */}
            <div className="py-12 bg-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Fitur Unggulan</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {[
                        { title: "Proses Cepat", desc: "Pengajuan mudah dan cepat, hanya dalam beberapa langkah." },
                        { title: "Transparansi", desc: "Lacak status pengajuan kapan saja, di mana saja." },
                        { title: "Panduan Lengkap", desc: "Kami membantu Anda di setiap langkah proses." },
                    ].map((fitur, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg text-center"
                        >
                            <h3 className="text-2xl font-semibold text-green-600 mb-3">
                                {fitur.title}
                            </h3>
                            <p className="text-gray-600">{fitur.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistik */}
            <div className="py-12 bg-green-500 text-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { label: "Pengajuan", count: "1200+" },
                        { label: "Disetujui", count: "800+" },
                        { label: "Ditolak", count: "400" },
                    ].map((stat, index) => (
                        <div key={index}>
                            <h3 className="text-5xl font-bold">{stat.count}</h3>
                            <p className="text-xl">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimoni */}
            <div className="py-12 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Testimoni</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {[
                        { name: "Andi", feedback: "Proses cepat dan transparan!" },
                        { name: "Rina", feedback: "Sangat membantu UMKM seperti kami." },
                        { name: "Budi", feedback: "Panduannya jelas dan mudah." },
                    ].map((testi, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-lg shadow-lg text-center"
                        >
                            <p className="italic text-gray-600 mb-4">"{testi.feedback}"</p>
                            <h4 className="font-bold text-green-600">{testi.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="py-12 bg-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">FAQ</h2>
                </div>
                <div className="max-w-5xl mx-auto space-y-6">
                    {[
                        { question: "Bagaimana cara mendaftar?", answer: "Klik 'Daftar Sekarang' dan isi formulir." },
                        { question: "Dokumen apa saja yang diperlukan?", answer: "Identitas, izin usaha, dan laporan keuangan." },
                        { question: "Berapa lama prosesnya?", answer: "3-5 hari kerja setelah dokumen lengkap." },
                    ].map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Beranda;
