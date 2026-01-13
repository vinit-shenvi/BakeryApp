"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        { name: "Dashboard", path: "/admin", icon: "📊" },
        { name: "Orders", path: "/admin/orders", icon: "📦" },
        { name: "Products", path: "/admin/products", icon: "🍪" },
        { name: "Festive", path: "/admin/festive", icon: "🎉" },
        { name: "Deliveries", path: "/admin/deliveries", icon: "🚚" },
    ];

    return (
        <aside className="w-64 bg-surface border-r border-surface-dim h-screen fixed left-0 top-0 overflow-y-auto hidden md:block">
            <div className="p-6">
                <h1 className="text-h3 font-bold text-primary">Bakes & Flakes</h1>
                <p className="text-xs text-muted uppercase tracking-wider mt-1">Admin Panel</p>
            </div>

            <nav className="px-4">
                <ul className="grid gap-2">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive(item.path)
                                        ? "bg-secondary text-primary font-bold"
                                        : "text-muted hover:bg-surface-dim"
                                    }`}
                            >
                                <span>{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full btn btn-accent text-sm">Logout</button>
            </div>
        </aside>
    );
}
