//test.js

const {
  calculateDiscount,
  filterProducts,
  sortInventory
} = require("./products.js");

const products = require("./product-data.js");

describe("calculateDiscount", () => {
  test("should calculate discount correctly", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });

  test("should return null for negative discount", () => {
    expect(calculateDiscount(100, -0.1)).toBeNull();
  });

  test("should return null for discount greater than 1", () => {
    expect(calculateDiscount(100, 1.2)).toBeNull();
  });

  test("should handle price 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
  });

  test("should round to 2 decimal places", () => {
    expect(calculateDiscount(99, 0.333)).toBeCloseTo(66.03);
  });
});

describe("filterProducts", () => {
  test("should filter products under $50", () => {
    const result = filterProducts(products, p => p.price < 50);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(p => p.price < 50)).toBe(true);
  });

  test("should filter expensive products", () => {
    const result = filterProducts(products, p => p.price > 100);
    expect(result).toEqual([
      {
        id: 3,
        name: "AeroStream Noise-Canceling Headphones",
        description: "Bluetooth headphones with ANC and 40-hour battery life.",
        price: 149.99
      }
    ]);
  });

  test("should return empty array for invalid input", () => {
    expect(filterProducts(null, () => {})).toEqual([]);
  });

  test("should return empty array for invalid callback", () => {
    expect(filterProducts(products, null)).toEqual([]);
  });
});

describe("sortInventory", () => {
  test("should sort by price ascending", () => {
    const result = sortInventory(products, "price");
    const prices = result.map(p => p.price);

    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test("should sort by name alphabetically", () => {
    const result = sortInventory(products, "name");
    const names = result.map(p => p.name);

    expect(names).toEqual([...names].sort());
  });

  test("should return empty array for invalid inventory", () => {
    expect(sortInventory(null, "price")).toEqual([]);
  });

  test("should return empty array for invalid key", () => {
    expect(sortInventory(products, 123)).toEqual([]);
  });

  test("should not mutate original array", () => {
    const copy = [...products];
    sortInventory(products, "price");
    expect(products).toEqual(copy);
  });
});