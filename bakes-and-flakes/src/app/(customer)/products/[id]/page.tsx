import { PRODUCTS } from "@/lib/mock-data";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container p-4 pb-24">
            <Link href="/" className="text-sm text-muted mb-4 inline-block">
                ← Back to Menu
            </Link>

            <div className="bg-surface rounded-lg shadow-sm overflow-hidden border border-surface-dim">
                <div className="h-64 bg-secondary flex items-center justify-center text-primary-dark">
                    {/* Placeholder for Image */}
                    <span className="text-4xl">🍰</span>
                </div>

                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h1 className="text-h2 leading-tight">{product.name}</h1>
                        <span className="text-h3 text-primary">${product.price.toFixed(2)}</span>
                    </div>

                    <span className="inline-block bg-secondary text-xs px-2 py-1 rounded-full mb-4 uppercase tracking-wider font-bold text-muted">
                        {product.category}
                    </span>

                    <p className="text-body text-muted mb-8">
                        {product.description || "A delicious treat freshly baked for you."}
                    </p>

                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
}
