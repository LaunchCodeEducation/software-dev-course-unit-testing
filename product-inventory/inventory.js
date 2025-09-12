// calculateDiscount

function calculateDiscount(price, discountPercent) {
    let discountRate = discountPercent / 100;
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    
    const discountAmount = price * discountRate;
    const finalPrice = price - discountAmount;
    
    return finalPrice;
}

// filterProducts
function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
  
    return products.filter(callback);
}

//sortInventory
function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort((a, b) => 
        a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
}

module.exports = { calculateDiscount, filterProducts, sortInventory };