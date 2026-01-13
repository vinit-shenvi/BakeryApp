export default function AdminDashboard() {
    return (
        <div className="container grid gap-6 p-4">
            <h1 className="text-h2">Admin Dashboard</h1>

            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                <div className="card">
                    <p className="text-muted">Today's Orders</p>
                    <p className="text-h2 text-primary">24</p>
                </div>
                <div className="card">
                    <p className="text-muted">Revenue</p>
                    <p className="text-h2 text-success">$1,250</p>
                </div>
                <div className="card">
                    <p className="text-muted">Pending</p>
                    <p className="text-h2 text-warning">5</p>
                </div>
            </div>

            <div className="grid gap-4 mt-6">
                <h2 className="text-h3">Quick Actions</h2>
                <div className="flex gap-4">
                    <button className="btn btn-primary">Add Product</button>
                    <button className="btn btn-secondary">Manage Delivery Partners</button>
                </div>
            </div>
        </div>
    );
}
