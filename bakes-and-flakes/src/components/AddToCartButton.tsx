"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="fixed bottom-20 left-4 right-4 md:static md:w-full">
            <button
                onClick={handleAdd}
                className={`w-full py-4 rounded-full font-bold text-lg shadow-lg transition-all ${isAdded ? "bg-success text-white" : "bg-primary text-white hover:bg-primary-dark"
                    }`}
            >
                {isAdded ? "Added to Cart! ✓" : "Add to Cart"}
            </button>
        </div>
    );
}
