"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const { items, removeFromCart, cartTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="container p-4 flex flex-col items-center justify-center min-h-[50vh]">
                <h1 className="text-h2 mb-4">Your Cart is Empty</h1>
                <Link href="/" className="btn btn-primary">Start Ordering</Link>
            </div>
        );
    }

    return (
        <div className="container p-4 pb-24">
            <h1 className="text-h2 mb-6">Your Cart</h1>

            <div className="grid gap-4 mb-6">
                {items.map((item) => (
                    <div key={item.productId} className="card p-4 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-16 h-16 bg-surface-dim rounded flex items-center justify-center text-2xl">
                                {item.image ? "🍰" : "🥨"}
                            </div>
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm text-muted">{item.quantity} x ${item.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                                onClick={() => removeFromCart(item.productId)}
                                className="text-xs text-error underline"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-lg border border-surface-dim fixed bottom-20 left-4 right-4 md:static md:w-full">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-muted">Total</span>
                    <span className="text-h2 font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="btn btn-primary w-full py-4 text-lg">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
}
