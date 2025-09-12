function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') { return `Price and Discount must be a number.`;} //When price or discountRate is not a number.
    if (discountRate < 0 || discountRate > 1) { return `Discount must be a decimal value between 0 and 1.`;} //For discounts of less than 0 or greater than 100%
    if (price <= 0) {return `Price must be a positive number.`;}
    // TODO: Implement logic
    return price * (1 - discountRate); //calculates discounted price
}



function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') {return `Please use a valid array and filter`;}
    else {return products.filter(callback);}
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') { return []; }
    // TODO: Implement sorting logic
    const sorted = [...inventory];
    return sorted.sort((a, b) => {
        if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
            const aKey = a[key];
            const bKey = b[key];
            if (typeof aKey === 'number' && typeof bKey === 'number') {
                return aKey - bKey;
            }  else if (typeof aKey === 'string' && typeof bKey === 'string' ) {
                return aKey.localeCompare(bKey);
            } return inventory;
        } else {return inventory;}
    })
}

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};