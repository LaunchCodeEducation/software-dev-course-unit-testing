const {
  calculateDiscount,
  filterProducts,
  sortInventory,
} = require("../functions.js");

test("applies a valid discount rate", () => {
  expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
  expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
  expect(calculateDiscount(0, 0.2)).toBe(0);
});

describe("should filter products ", () => {
  test("should filter the products based on callback condtion", () => {
    const expenciveProducts = filterProducts(
      (products) => products.price > 100
    );
    expect(expenciveProducts).toEqual([
      { name: "Laptop", price: 1000 },
      { name: "Monitor", price: 50 },
    ]);
  });
});

test("should return an empty array when key is not a string  ", () => {
  expect(sortInventory(inventory, 123)).toEqual([]);
});
