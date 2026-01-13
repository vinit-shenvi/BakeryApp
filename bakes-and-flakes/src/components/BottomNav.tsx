"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function BottomNav() {
    const pathname = usePathname();
    const { cartCount } = useCart();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        { name: "Home", path: "/", icon: "🏠" },
        { name: "Search", path: "/search", icon: "🔍" },
        { name: "Cart", path: "/cart", icon: "🛒", badge: cartCount },
        { name: "Profile", path: "/profile", icon: "👤" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-surface-dim p-4 z-50">
            <div className="container flex justify-between items-center px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className={`flex flex-col items-center gap-1 text-xs ${isActive(item.path) ? 'text-primary font-bold' : 'text-muted'}`}
                    >
                        <span className="text-xl relative">
                            {item.icon}
                            {item.badge ? (
                                <span className="absolute -top-2 -right-2 bg-error text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {item.badge}
                                </span>
                            ) : null}
                        </span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
