// import { prisma } from "@/lib/prisma";
import Link from "next/link";
import styles from "./home.module.css";

// Mock data until DB is ready
const FESTIVAL = { name: "Cricket World Cup 2026", active: true };

export default async function CustomerHome() {
    // const products = await prisma.product.findMany(); // Uncommment when DB is ready
    const products = [];

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container flex justify-between items-center">
                    <h1 className="text-h2 text-primary font-bold">Bakes & Flakes</h1>
                    <div className="flex gap-4">
                        {/* Icons for Wishlist/Cart */}
                        <span>❤️</span>
                        <span>🛒</span>
                    </div>
                </div>
            </header>

            {/* Festive Banner */}
            {FESTIVAL.active && (
                <section className={`${styles.festiveBanner} container bg-accent text-white`}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-h3">{FESTIVAL.name} Specials!</h2>
                            <p className="text-sm">Get 20% off on match snacks</p>
                        </div>
                        <Link href="/festive" className="btn btn-secondary text-sm">View All</Link>
                    </div>
                </section>
            )}

            {/* Categories / Horizontal Scrolls */}
            <section className="container mt-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-h3">Best Sellers</h3>
                    <Link href="/products?cat=bestsellers" className="text-sm text-primary">See All</Link>
                </div>
                <div className={styles.scrollRow}>
                    {/* Bestsellers: Using real mock links */}
                    <Link href="/products/p1" className="card text-center p-4 block min-w-[150px] transition-transform hover:scale-105">
                        <div style={{ height: 100, background: '#F2F0EA', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🍫</div>
                        <p className="font-bold text-sm">Choco Truffle</p>
                        <p className="text-primary text-sm font-bold">$12.00</p>
                    </Link>
                    <Link href="/products/p2" className="card text-center p-4 block min-w-[150px] transition-transform hover:scale-105">
                        <div style={{ height: 100, background: '#F2F0EA', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🍪</div>
                        <p className="font-bold text-sm">Almond Biscotti</p>
                        <p className="text-primary text-sm font-bold">$8.50</p>
                    </Link>
                    <Link href="/products/p4" className="card text-center p-4 block min-w-[150px] transition-transform hover:scale-105">
                        <div style={{ height: 100, background: '#F2F0EA', marginBottom: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🏏</div>
                        <p className="font-bold text-sm">Bat Cookie</p>
                        <p className="text-primary text-sm font-bold">$5.00</p>
                    </Link>
                </div>
            </section>

            <section className="container mt-6">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-h3">Fresh Sweets</h3>
                    <Link href="/products?cat=sweets" className="text-sm text-primary">See All</Link>
                </div>
                <div className={styles.scrollRow}>
                    {/* Mock Items */}
                    <div className="card text-center p-4" style={{ minWidth: '150px' }}>
                        <div style={{ height: 100, background: '#eee', marginBottom: '1rem' }}></div>
                        <p className="font-bold">Kaju Katli</p>
                        <p className="text-primary">$15.00</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
