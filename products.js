function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 100) return null;
    let discount = price - (price * (discountRate / 100));
    return discount;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    let newProducts = products.filter(callback);
    return newProducts;
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
   let sortedInventory = inventory.sort((a,b) => a.price - b.price)
   return sortedInventory;
}

let myProducts = [
    {item: "computer", price: 200},
    {item: "soap", price: 3},
    {item: "tv", price: 400}
];

module.exports = {calculateDiscount, filterProducts, sortInventory};



