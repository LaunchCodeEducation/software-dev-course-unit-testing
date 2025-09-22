


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    return price * (1 - discountRate);
}

function productFilterer(products) {
    if (products.length <= 0) {
        return "Error, please enter at least one product";
    }
    let filteredProducts = products.filter(product => product.length >= 5);
    return filteredProducts;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    let filteredProducts = callback(products);
    return filteredProducts;
}

const inventory = [
  { name: 'milk', quantity: 2},
  { name: 'peppers', quantity: 0},
  { name: 'eggs', quantity: 5},
  { name: 'cherries', quantity: 5},
  { name: 'orange juice', quantity: 3}
];

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') {
        return [];
    }
    if (key === 'quantity') {
        let sortedInventory = inventory.sort((a, b) => a[key] - b[key]);
        return sortedInventory;
    }
    else {
        return `Error, ${key} is not a valid sorting choice`;
    }
}

console.log(sortInventory(inventory, 'name'));

module.exports = { calculateDiscount, filterProducts, sortInventory, productFilterer };