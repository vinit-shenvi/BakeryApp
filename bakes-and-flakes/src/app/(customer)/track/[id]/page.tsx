"use client";

import { useEffect, useState } from "react";
import { CLOUD_STORES } from "@/lib/mock-data";
import Link from "next/link";

// Mock simulation of tracking
export default function OrderTracking({ params }: { params: Promise<{ id: string }> }) {
    // Hardcoded route for demo: Store 1 -> Customer
    const store = CLOUD_STORES[0];
    const customer = { lat: 12.935, lng: 77.624 }; // Koramangala

    // Agent starts at Store
    const [agentPos, setAgentPos] = useState({ lat: store.lat, lng: store.lng });
    const [progress, setProgress] = useState(0); // 0 to 100%

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1; // Move 1% every 100ms
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Lerp position
    useEffect(() => {
        const lat = store.lat + (customer.lat - store.lat) * (progress / 100);
        const lng = store.lng + (customer.lng - store.lng) * (progress / 100);
        setAgentPos({ lat, lng });
    }, [progress, store.lat, store.lng, customer.lat, customer.lng]);

    return (
        <div className="container p-4 pb-20">
            <Link href="/" className="text-sm text-muted mb-4 inline-block">← Back Home</Link>
            <h1 className="text-h2 mb-4">Live Tracking</h1>

            <div className="card p-0 overflow-hidden relative" style={{ height: '400px' }}>
                {/* Simple Map Visualization */}
                <div className="absolute inset-0 bg-[#e5e7eb] opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-4xl opacity-10 font-bold">MAP VIEW</span>
                </div>

                {/* Store Marker */}
                <div className="absolute text-2xl" style={{ top: '20%', left: '20%' }}>
                    🏪
                    <span className="text-xs bg-white px-1 shadow absolute top-full left-0 whitespace-nowrap">{store.name}</span>
                </div>

                {/* Customer Marker */}
                <div className="absolute text-2xl" style={{ top: '80%', left: '80%' }}>
                    🏠
                    <span className="text-xs bg-white px-1 shadow absolute top-full left-0 whitespace-nowrap">You</span>
                </div>

                {/* Agent Marker (Dynamic) */}
                <div
                    className="absolute text-2xl transition-all duration-100 ease-linear"
                    style={{
                        top: `${20 + (progress * 0.6)}%`,
                        left: `${20 + (progress * 0.6)}%`
                    }}
                >
                    🛵
                </div>

                {/* Status Text */}
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded shadow-lg">
                    <h3 className="font-bold text-primary">Arriving in {Math.max(0, 15 - Math.floor(progress * 0.15))} mins</h3>
                    <p className="text-sm text-muted">Your order is on the way!</p>
                    <div className="w-full bg-surface-dim h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-success h-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
