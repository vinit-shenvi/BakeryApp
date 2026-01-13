import { PRODUCTS } from "@/lib/mock-data";
import Link from "next/link";

export default function AdminProductsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-h2">Products</h1>
                <Link href="/admin/products/new" className="btn btn-primary">
                    + Add Product
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="card flex gap-4 items-center">
                        <div className="w-20 h-20 bg-surface-dim rounded flex items-center justify-center text-2xl">
                            {/* Placeholder Image */}
                            <span>🍰</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-sm text-muted uppercase tracking-wider mb-1">{product.category}</p>
                            <p className="font-bold text-primary">${product.price.toFixed(2)}</p>
                        </div>
                        <button className="p-2 text-muted hover:text-primary">
                            ✎
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
