"use client";

import { useState } from "react";
import { CLOUD_STORES } from "@/lib/mock-data";

// Mock data for delivery view (client-side for now, ideally API)
// We add coordinates for the demo
const INITIAL_ORDERS = [
    { id: "o1", customer: "Alice Baker", address: "123 Muffin Lane", status: "PREPARING", customerLat: 12.935, customerLng: 77.624, assignedStoreId: "store1" }
];

export default function DeliveryHome() {
    const [isOnline, setIsOnline] = useState(false);
    const [orders, setOrders] = useState(INITIAL_ORDERS);

    const toggleStatus = () => setIsOnline(!isOnline);

    const markDelivered = (id: string) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: "DELIVERED" } : o));
        alert(`Order #${id} marked as Delivered!`);
    };

    const openMap = (lat: number, lng: number) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    };

    const getStoreName = (id: string) => CLOUD_STORES.find(s => s.id === id)?.name || "Store";
    const getStoreObj = (id: string) => CLOUD_STORES.find(s => s.id === id);

    return (
        <div className="container p-4">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-h3">Delivery Partner</h1>
                <button
                    onClick={toggleStatus}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${isOnline ? "bg-success text-white border-success" : "bg-surface text-muted border-surface-dim"
                        }`}
                >
                    <span className="text-sm font-bold">{isOnline ? "Online" : "Offline"}</span>
                    <div className={`w-3 h-3 rounded-full ${isOnline ? "bg-white" : "bg-muted"}`}></div>
                </button>
            </header>

            {!isOnline ? (
                <div className="text-center mt-20 text-muted">
                    <p>You are offline. Go online to receive orders.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {orders.map(order => {
                        const store = getStoreObj(order.assignedStoreId);

                        return (
                            <div key={order.id} className={`card p-4 border-l-4 ${order.status === 'DELIVERED' ? 'border-success' : 'border-primary'}`}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold">Order #{order.id}</h3>
                                        <p className="text-sm text-primary mb-1">Pickup: {store?.name}</p>
                                        <p className="text-sm text-muted">Drop: {order.address}</p>
                                    </div>
                                    <span className="bg-surface-dim text-xs px-2 py-1 rounded uppercase font-bold">
                                        {order.status}
                                    </span>
                                </div>

                                {order.status !== "DELIVERED" && (
                                    <div className="mt-4 grid gap-2">
                                        <div className="flex gap-2">
                                            {store && (
                                                <button onClick={() => openMap(store.lat, store.lng)} className="btn btn-secondary flex-1 text-xs">
                                                    Navigate to Store 🏪
                                                </button>
                                            )}
                                            <button onClick={() => openMap(order.customerLat, order.customerLng)} className="btn btn-secondary flex-1 text-xs">
                                                Navigate to Customer 📍
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => markDelivered(order.id)}
                                            className="btn btn-primary w-full text-sm"
                                        >
                                            Mark Delivered
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {orders.length === 0 && (
                        <p className="text-center text-muted">No active orders</p>
                    )}
                </div>
            )}
        </div>
    );
}
