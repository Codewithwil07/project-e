import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className="bg-teal-900 text-white py-4 text-center">
            <p className="text-sm">© 2024 Portal Pengajuan Modal - Semua hak dilindungi.</p>
            <div className="mt-4">
                <Link to="/terms" className="text-yellow-300 hover:text-yellow-400 mx-3">Syarat & Ketentuan</Link>
                <Link to="/privacy" className="text-yellow-300 hover:text-yellow-400 mx-3">Kebijakan Privasi</Link>
            </div>
        </footer>
    )
}

export default Footer
