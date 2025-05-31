const sampleInventory = [
    { id: 1, name: "Classic Tee", category: "Apparel", price: 19.99, inStock: true, rating: 4.2 },
    { id: 2, name: "Running Sneakers", category: "Footwear", price: 89.95, inStock: false, rating: 4.8 },
    { id: 3, name: "Cozy Hoodie", category: "Apparel", price: 49.50, inStock: true, rating: 4.5 },
    { id: 4, name: "Ceramic Mug", category: "Home Goods", price: 12.00, inStock: true, rating: 4.0 },
    { id: 5, name: "Hardcover Book", category: "Books", price: 24.99, inStock: false, rating: 4.9 },
    { id: 6, name: "Wireless Mouse", category: "Electronics", price: 29.99, inStock: true, rating: 4.3 },
    { id: 7, name: "Bluetooth Headset", category: "Electronics", price: 59.99, inStock: true, rating: 4.6 },
    { id: 8, name: "Water Bottle", category: "Outdoor", price: 15.00, inStock: false, rating: 4.1 },
    { id: 9, name: "Yoga Mat", category: "Fitness", price: 35.00, inStock: true, rating: 4.7 },
    { id: 10, name: "Desk Lamp", category: "Home Goods", price: 22.50, inStock: true, rating: 4.4 }
];



function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    let discount = price - (price * discountRate)
    price = discount;
    return price;
}

function filterProducts(products, callback) {

    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic

    return products.filter(callback);

}


function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic

    return inventory.sort(function (a, b) {
        if (a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
}


module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory,
    sampleInventory
}




