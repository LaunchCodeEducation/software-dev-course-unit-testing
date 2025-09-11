function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    // TODO: Implement discount logic
    if (discountRate < 0 || discountRate > 1) return null;
    
    if (discountRate < 0 && discountRate > 1) return null;

    if (price <= 0) return 0;

    return price - (price * discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return products.filter(callback);;
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic

   if (inventory.length === 0) return [];

  if (!inventory[0].hasOwnProperty(key)) return [];
  return [...inventory].sort((a, b) => (a[key] > b[key] ? 1 : -1));
}
module.exports = {calculateDiscount, filterProducts, sortInventory};