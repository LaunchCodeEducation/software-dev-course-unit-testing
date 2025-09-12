const { calculateDiscount, filterProducts, sortInventory } = require("../inventory.js")

const sampleData = [
    { id: 3, name: "Desk Lamp", price: 29.99 },
    { id: 10, name: "Ceiling Lamp", price: 29.50 },
    { id: 20, name: "Laptop", price: 999.99 },
    { id: 25, name: "Table w/ chairs", price:456.99},
    { id: 40, name: "Bottled Water", price: 8.50},
    { id: 26, name: "Nuka-Cola", price: 99.99 },
    { id: 85, name: "Hot Pockets", price: 250.99 },  
];

// calculateDiscount
describe("The calculateDiscount function", () => {
  // Positive
  test("returns the original price when discount is 0 percent", () => {
    expect(calculateDiscount(42, 0)).toBe(42);
  });

  // Positive
  test("returns 0 when discount is 100 percent", () => {
    expect(calculateDiscount(42, 100)).toBe(0);
  });

  // Negative
  test("returns null when the price is not a number", () => {
    expect(calculateDiscount(" ", 10)).toBeNull();
  });

  // Negative
  test("returns null when discount is greater than 100 percent", () => {
    expect(calculateDiscount(50, 150)).toBeNull();
  });

  // Edge
  test("returns 0 when the price is 0 regardless of discount", () => {
    expect(calculateDiscount(0, 50)).toBe(0);
  });
});


// filterProducts

describe("The filterProducts function", () => {
  // Positive
  test("returns products that match the callback condition", () => {
    const result = filterProducts(sampleData, (p) => p.price > 100);
    expect(result.every((p) => p.price > 100)).toBe(true);
  });

  // Negative
  test("returns an empty array when products is not an array", () => {
    expect(filterProducts("not an array", (p) => p.price > 100)).toEqual([]);
  });

  // Negative
  test("returns an empty array when the callback is not a function", () => {
    expect(filterProducts(sampleData, "not a function")).toEqual([]);
  });

  // Edge
  test("returns an empty array when no products match the condition", () => {
    const result = filterProducts(sampleData, (p) => p.price > 5000);
    expect(result).toEqual([]);
  });
});


// sortInventory
describe("The sortInventory function", () => {
  // Positive
  test("sorts inventory by the given key in ascending order", () => {
    const result = sortInventory([...sampleData], "id");
    const ids = result.map((p) => p.id);
    expect(ids).toEqual([...ids].sort((a, b) => a - b));
  });

  // Negative
  test("returns an empty array when inventory is not an array", () => {
    expect(sortInventory("not an array", "id")).toEqual([]);
  });

  // Negative
  test("returns an empty array when the key is not a string", () => {
    expect(sortInventory(sampleData, 123)).toEqual([]);
  });

  // Edge
  test("returns an empty array when inventory is empty", () => {
    expect(sortInventory([], "id")).toEqual([]);
  });
});