// products.js

function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number") return null;
  if (discountRate < 0 || discountRate > 1) return null;

  const newPrice = price * (1 - discountRate);
  return Math.round(newPrice * 100) / 100;
}

function filterProducts(products, callback) {
  if (!Array.isArray(products) || typeof callback !== "function") return [];
  return products.filter(callback);
}

function sortInventory(inventory, key) {
  if (!Array.isArray(inventory) || typeof key !== "string") return [];

  return [...inventory].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]);
    }
    return a[key] - b[key];
  });
}

module.exports = {
  calculateDiscount,
  filterProducts,
  sortInventory
};