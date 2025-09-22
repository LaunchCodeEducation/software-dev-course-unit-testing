// --- calculateDiscount(price, discountRate) ---
// Returns discounted price if valid; otherwise null.
// Rules: price >= 0, rate in [0,1]. Round to 2 decimals to avoid float artifacts.
function calculateDiscount(price, discountRate) {
  if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
  if (!Number.isFinite(price) || !Number.isFinite(discountRate)) return null;
  if (price < 0) return null;
  if (discountRate < 0 || discountRate > 1) return null;

  const result = price * (1 - discountRate);

  return Math.round((result + Number.EPSILON) * 100) / 100;
}

// --- filterProducts(products, callback) ---
// Returns a NEW array with elements for which callback returns true.
// Invalid inputs → [].
function filterProducts(products, callback) {
  if (!Array.isArray(products) || typeof callback !== 'function') return [];
 
  return products.filter((p, idx, arr) => !!callback(p, idx, arr));
}

// --- sortInventory(inventory, key) ---
// Returns a NEW array sorted ASC by the given key.
// - Handles strings and numbers
// - Undefined/missing keys are pushed to the end
// - Does not mutate original
function sortInventory(inventory, key) {
  if (!Array.isArray(inventory) || typeof key !== 'string') return [];
  const copy = inventory.slice();

  const getVal = (item) => (item && Object.prototype.hasOwnProperty.call(item, key)) ? item[key] : undefined;

  copy.sort((a, b) => {
    const va = getVal(a);
    const vb = getVal(b);

    const aU = (va === undefined || va === null);
    const bU = (vb === undefined || vb === null);
    if (aU && bU) return 0;
    if (aU) return 1; // undefined last
    if (bU) return -1;

    // number vs string compare
    const aNum = typeof va === 'number' && Number.isFinite(va);
    const bNum = typeof vb === 'number' && Number.isFinite(vb);

    if (aNum && bNum) return va - vb;

    const sa = String(va);
    const sb = String(vb);
    return sa.localeCompare(sb, undefined, { numeric: true, sensitivity: 'base' });
  });

  return copy;
}

module.exports = {
  calculateDiscount,
  filterProducts,
  sortInventory
};
