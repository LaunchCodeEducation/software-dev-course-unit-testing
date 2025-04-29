function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;

    // TODO: Implement logic
    return price * discountRate;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    filteredProducts = products.filter(callback)
    return filteredProducts;
}

array = [43, 54, 23,23, 54, 5, 2, 6, 25];
hello = filterProducts(array, (num) => num >= 18)
console.log(hello)

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    sortedArray = inventory.sort(key)
    // TODO: Implement sorting logic
    return sortedArray;
}


sortedArray = sortInventory((a, b) => a - b);
console.log(sortedArray);