const inventory = require('./inventory.js') 

    
describe("calculateDiscount", () => {

  test("valid discount", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);

test("zero price", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
 });});
 });

describe("filterProducts", () => {

  test("filter price less than 50", () => {
    const result = filterProducts(products, p => p.price < 50);
    expect(result.length).toBeGreaterThan(0);
  });
});
