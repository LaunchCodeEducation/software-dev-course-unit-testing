
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    let amount = price - (price * discountRate);
    return amount;
}


function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    let filteredProducts = products.filter(callback);
    return filteredProducts;
}



function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    inventory.sort(function(a,b) {
        let keyA = a[key];
        let keyB = b[key];

        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
    })
    return inventory;
}

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};