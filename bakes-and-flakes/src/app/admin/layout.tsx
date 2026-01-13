import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <AdminSidebar />
            <div className="md:ml-64 min-h-screen">
                <header className="md:hidden bg-surface p-4 border-b border-surface-dim flex justify-between items-center">
                    <span className="font-bold">Bakes Admin</span>
                    <button>☰</button>
                </header>
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
