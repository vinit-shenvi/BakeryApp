import { ORDERS, USERS } from "@/lib/mock-data";

export default function AdminOrdersPage() {
    const getCustomerName = (id: string) => USERS.find(u => u.id === id)?.name || "Unknown";

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-h2">Orders</h1>
                <div className="flex gap-2">
                    <button className="btn btn-secondary text-sm">Filter</button>
                    <button className="btn btn-primary text-sm">Export</button>
                </div>
            </div>

            <div className="card overflow-hidden p-0">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-dim border-b border-surface-dim">
                            <th className="p-4 font-bold text-sm text-muted">Order ID</th>
                            <th className="p-4 font-bold text-sm text-muted">Customer</th>
                            <th className="p-4 font-bold text-sm text-muted">Status</th>
                            <th className="p-4 font-bold text-sm text-muted">Total</th>
                            <th className="p-4 font-bold text-sm text-muted">Date</th>
                            <th className="p-4 font-bold text-sm text-muted">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ORDERS.map((order) => (
                            <tr key={order.id} className="border-b border-surface-dim hover:bg-background transition-colors">
                                <td className="p-4 font-mono text-sm">#{order.id}</td>
                                <td className="p-4">{getCustomerName(order.userId)}</td>
                                <td className="p-4">
                                    <span className={`text-xs px-2 py-1 rounded font-bold uppercase ${order.status === 'PENDING' ? 'bg-warning text-text-muted' :
                                            order.status === 'DELIVERED' ? 'bg-success text-white' : 'bg-primary text-white'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 font-bold">${order.totalAmount.toFixed(2)}</td>
                                <td className="p-4 text-sm text-muted">Just now</td>
                                <td className="p-4">
                                    <button className="text-primary hover:underline text-sm">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {ORDERS.length === 0 && (
                    <div className="p-8 text-center text-muted">No orders found.</div>
                )}
            </div>
        </div>
    );
}
