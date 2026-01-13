"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null);

    const handleGetLocation = () => {
        // Simulate getting GPS location (e.g., Koramangala)
        // In real app: navigator.geolocation.getCurrentPosition(...)
        setLoading(true);
        setTimeout(() => {
            setLocation({ lat: 12.935, lng: 77.624 }); // Near Store 3
            setLoading(false);
        }, 1000);
    };

    const handleOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items,
                    totalAmount: cartTotal,
                    userId: "u1",
                    deliveryType: "HOME_DELIVERY",
                    coordinates: location // Send location
                })
            });

            if (res.ok) {
                const order = await res.json();
                clearCart();
                alert("Order Placed Successfully! Nearest Store Assigned. 📍 Redirecting to Live Tracking...");
                router.push(`/track/${order.id}`);
            } else {
                alert("Failed to place order. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return <div className="p-4">Cart is empty. Redirecting...</div>;
    }

    return (
        <div className="container p-4 pb-24">
            <h1 className="text-h2 mb-6">Checkout</h1>

            <form onSubmit={handleOrder} className="grid gap-6">
                <section>
                    <h2 className="text-h3 mb-4">Delivery Location</h2>
                    <div className="card p-4 border-2 border-primary border-dashed text-center">
                        {!location ? (
                            <button
                                type="button"
                                onClick={handleGetLocation}
                                className="text-primary font-bold flex flex-col items-center gap-2 mx-auto"
                            >
                                <span className="text-2xl">📍</span>
                                <span>Use Current Location</span>
                                <span className="text-xs text-muted">(Simulate GPS)</span>
                            </button>
                        ) : (
                            <div className="text-success">
                                <span className="text-xl">✅</span>
                                <p className="font-bold">Location Pinned</p>
                                <p className="text-xs text-muted">{location.lat.toFixed(4)}, {location.lng.toFixed(4)}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 grid gap-4">
                        <input type="text" placeholder="House / Flat No" required className="p-3 border rounded w-full" />
                        <input type="text" placeholder="Landmark" className="p-3 border rounded w-full" />
                    </div>
                </section>

                <section>
                    <h2 className="text-h3 mb-4">Payment Method</h2>
                    <div className="flex gap-4">
                        <label className="card p-4 flex-1 flex items-center gap-2 cursor-pointer border-primary border-2">
                            <input type="radio" name="payment" defaultChecked />
                            <span>Cash on Delivery</span>
                        </label>
                    </div>
                </section>

                <div className="bg-surface p-4 rounded border mt-4">
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total to Pay</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading || !location}
                    className="btn btn-success w-full py-4 text-lg font-bold shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Processing..." : "Place Order 🚀"}
                </button>
            </form>
        </div>
    );
}
