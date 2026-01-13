import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/mock-data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cat = searchParams.get("cat");

    let filtered = PRODUCTS;
    if (cat) {
        if (cat === "festive") {
            filtered = PRODUCTS.filter(p => p.isFestive);
        } else {
            filtered = PRODUCTS.filter(p => p.category === cat);
        }
    }

    return NextResponse.json(filtered);
}

export async function POST(request: Request) {
    const body = await request.json();
    // Mock creation
    const newProduct = { ...body, id: `p${Date.now()}` };
    PRODUCTS.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
}
