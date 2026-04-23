const { calculateDiscount, filterProducts, sortInventory } = require('./inventory.js');

describe("calculateDiscount", () => {

  test("applies a valid discount", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });

});

test("calculates discount correctly", () => {
  expect(calculateDiscount(200, 0.25)).toBe(150);
});

test("returns null for invalid discount rate", () => {
  expect(calculateDiscount(100, -0.5)).toBeNull();
});

test("returns 0 when price is 0", () => {
  expect(calculateDiscount(0, 0.2)).toBe(0);
});