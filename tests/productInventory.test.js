const {calculateDiscount, filterProducts, sortInventory} = require('../productInventory');

// ------------------------------
// Tests for calculateDiscount
// ------------------------------

describe("Calculate discount for the product", () => {

//Positive case
test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});


//Negative cases
test('should return null if price is not a number (negative case)', () => {
    expect(calculateDiscount("100", 0.2)).toBeNull();
  });

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test('should return null if discountRate is not a number (negative case)', () => {
    expect(calculateDiscount(100, "0.2")).toBeNull();
  });

//Edge cases  
test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});

test('should return same price if discount is 0 (edge case)', () => {
    expect(calculateDiscount(50, 0)).toBe(50);
  });

  test('should return 0 if discount is 100% (edge case)', () => {
    expect(calculateDiscount(200, 1)).toBe(0);
  });

});

// ------------------------------
// Tests for filterProducts
// ------------------------------

describe("Filtered Products", () => {

 const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];

  test('should filter products based on callback (positive case)', () => {
    const result = filterProducts(products, p => p.price > 400);
    expect(result).toEqual([
      { name: 'Laptop', price: 1000 },
      { name: 'Phone', price: 500 }
    ]);
  });

  test('should return empty array if no products match (edge case)', () => {
    const result = filterProducts(products, p => p.price > 2000);
    expect(result).toEqual([]);
  });

  test('should return empty array if products is not an array (negative case)', () => {
    expect(filterProducts("not array", p => p.price > 100)).toEqual([]);
  });

    test('should return empty array if callback is not a function (negative case)', () => {
        expect(filterProducts(products, "not function")).toEqual([]);
    });
});

// ------------------------------
// Tests for filterProducts
// ------------------------------

describe('sortInventory', () => {
  const products = [
    { name: 'Laptop', quantity: 15 },
    { name: 'Phone', quantity: 30 },
    { name: 'Tablet', quantity: 10 }
  ];

  //Positive cases
  test('should sort products by quantity (ascending)', () => {
    const result = sortInventory(products, 'quantity');
    expect(result).toEqual([
      { name: 'Tablet', quantity: 10 },
      { name: 'Laptop', quantity: 15 },
      { name: 'Phone', quantity: 30 }
    ]);
  });

  test('should sort products by name alphabetically', () => {
    const result = sortInventory(products, 'name');
    expect(result).toEqual([
      { name: 'Laptop', quantity: 15 },
      { name: 'Phone', quantity: 30 },
      { name: 'Tablet', quantity: 10 }
    ]);
  });

  //Negative cases
  test('should return empty array if products is not an array (negative case)', () => {
    expect(sortInventory("not array", "quantity")).toEqual([]);
  });

  test('should return empty array if key is not a string (negative case)', () => {
    expect(sortInventory(products, 123)).toEqual([]);
  });

  //Edge cases
  test('should return empty array if key does not exist (edge case)', () => {
    const result = sortInventory(products, 'nonexistent');
    expect(result).toEqual([]);
  });

  test('should handle empty products array (edge case)', () => {
    expect(sortInventory([], 'quantity')).toEqual([]);
  });
});


