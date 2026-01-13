import { NextResponse } from "next/server";
import { ORDERS, CLOUD_STORES, getDistanceFromLatLonInKm } from "@/lib/mock-data";

export async function GET() {
    return NextResponse.json(ORDERS);
}

export async function POST(request: Request) {
    const body = await request.json();

    // Logic to find nearest store
    let assignedStoreId = "store1"; // Default

    if (body.coordinates) {
        const { lat, lng } = body.coordinates;
        let minDistance = Infinity;

        CLOUD_STORES.forEach(store => {
            const dist = getDistanceFromLatLonInKm(lat, lng, store.lat, store.lng);
            if (dist < minDistance) {
                minDistance = dist;
                assignedStoreId = store.id;
            }
        });
    }

    const newOrder = {
        id: `o${Date.now()}`,
        status: "PENDING",
        createdAt: new Date(),
        assignedStoreId, // Save the mapped store
        ...body
    };

    ORDERS.push(newOrder); // In-memory save

    return NextResponse.json(newOrder, { status: 201 });
}
