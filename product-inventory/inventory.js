function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    let newPrice = price * (1 - discountRate);
    let roundedPrice = Math.round(newPrice * 100) / 100;
    return roundedPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort((a, b) => a[key] - b[key]);
}
const fakeProducts = [
  {
    id: 1,
    name: "Apex Wireless Mouse",
    description: "Ergonomic 2.4GHz wireless mouse with adjustable DPI and silent clicks.",
    price: 29.99
  },
  {
    id: 2,
    name: "Quantum Mechanical Keyboard",
    description: "Tactile blue switches, vibrant RGB backlighting, and a premium aluminum frame.",
    price: 89.95
  },
  {
    id: 3,
    name: "AeroStream Noise-Canceling Headphones",
    description: "Over-ear Bluetooth headphones featuring active noise cancellation and 40-hour battery life.",
    price: 149.99
  },
  {
    id: 4,
    name: "NovaCharge 10K Power Bank",
    description: "Ultra-slim 10,000mAh portable charger with USB-C Power Delivery.",
    price: 24.50
  },
  {
    id: 5,
    name: "Titanium EDC Pocket Knife",
    description: "Lightweight, corrosion-resistant folding knife with a razor-sharp drop point blade.",
    price: 45.00
  },
  {
    id: 6,
    name: "Lumina Smart LED Desk Lamp",
    description: "Dimmable desk light with adjustable color temperatures and a built-in wireless charger.",
    price: 39.99
  }
];

module.exports = inventory;