import { Outlet } from "react-router";
import AdminNav from "../../components/AdminNav";

const PanelAdmin = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <AdminNav />

            {/* Main Content */}
            <main className="min-h-screen">
                <Outlet />
            </main>


            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm">&copy; 2024 My Perizinan App. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PanelAdmin;
