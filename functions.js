function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number")
    return null;
  if (price < 0) return null;
  if (price === 0) return 0;
  if (discountRate < 0 || discountRate > 1) return null;
  if (discountRate > 0 || discountRate < 1) return price - price * discountRate;
  // TODO: Implement logic
  return null;
}

function filterProducts(products, callback) {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
  ];
  if (typeof callback !== "function ") return [];
  return products.filter(callback);
  // TODO: Implement filtering logic
  return [];
}

function sortInventory(inventory, key) {
  if (!Array.isArray(inventory) || typeof key !== "string") return [];
  // TODO: Implement sorting logic
  return [];
}

module.exports = {
  calculateDiscount,
  filterProducts,
  sortInventory,
};
