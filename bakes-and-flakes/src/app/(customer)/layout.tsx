"use client";

import { CartProvider } from "@/context/CartContext";
import BottomNav from "@/components/BottomNav";

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CartProvider>
            <div className="pb-20"> {/* Add padding for bottom nav */}
                {children}
            </div>
            <BottomNav />
        </CartProvider>
    );
}
