export const FESTIVALS = [
    { id: "1", name: "Cricket World Cup 2026", active: true, bannerUrl: "/banners/cricket.jpg" },
    { id: "2", name: "Sankranti Specials", active: false, bannerUrl: "/banners/sankranti.jpg" },
];

export const PRODUCTS = [
    {
        id: "p1",
        name: "Choco Truffle",
        price: 12.0,
        category: "bestsellers",
        image: "/images/choco.jpg",
        description: "Rich chocolate truffle cake",
        isFestive: false,
    },
    {
        id: "p2",
        name: "Almond Biscotti",
        price: 8.5,
        category: "bestsellers",
        image: "/images/biscotti.jpg",
        description: "Crunchy almond biscotti",
        isFestive: false,
    },
    {
        id: "p3",
        name: "Kaju Katli",
        price: 15.0,
        category: "sweets",
        image: "/images/kaju.jpg",
        description: "Premium cashew fudge",
        isFestive: true,
    },
    {
        id: "p4",
        name: "Cricket Bat Cookie",
        price: 5.0,
        category: "festive",
        image: "/images/bat-cookie.jpg",
        description: "Special edition cookie",
        isFestive: true,
    }
];

export const USERS = [
    { id: "u1", name: "Customer One", role: "USER", email: "customer@example.com" },
    { id: "u2", name: "Delivery Guy", role: "DELIVERY_PARTNER", email: "delivery@example.com", isOnline: true },
    { id: "u3", name: "Admin User", role: "ADMIN", email: "admin@example.com" },
];

export const ORDERS = [
    {
        id: "o1",
        status: "PREPARING",
        totalAmount: 25.0,
        deliveryType: "HOME_DELIVERY",
        items: [
            { productId: "p1", quantity: 1, price: 12.0 },
            { productId: "p3", quantity: 1, price: 15.0 }, // Discounted or whatever
        ],
        userId: "u1",
        deliveryPartnerId: "u2",
        assignedStoreId: "store1",
    }
];

export const CLOUD_STORES = [
    { id: "store1", name: "Downtown Central Bakery", lat: 12.9716, lng: 77.5946, address: "MG Road, Bangalore" },
    { id: "store2", name: "Indiranagar Hub", lat: 12.9784, lng: 77.6408, address: "100ft Road, Indiranagar" },
    { id: "store3", name: "Koramangala Kitchen", lat: 12.9352, lng: 77.6245, address: "5th Block, Koramangala" },
];

export function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat1)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}
