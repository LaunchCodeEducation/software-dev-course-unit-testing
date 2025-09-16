const store = require('./app.js');

describe("calculateDiscount", () => {
    // Positive test
    test("should calculate discounted price correctly", () => {
        expect(store.calculateDiscount(100, 0.1)).toBe(90);
    });

    // Negative tests
    test("should return null if discountRate > 1", () => {
        expect(store.calculateDiscount(100, 10)).toBeNull();
    });

    test("should return null if price or discountRate is not a number", () => {
        expect(store.calculateDiscount("100", 0.1)).toBeNull();
        expect(store.calculateDiscount(100, "0.1")).toBeNull();
    });

    // Edge case
    test("should return the original price if discountRate is 0", () => {
        expect(store.calculateDiscount(100, 0)).toBe(100);
    });
});

describe("filterProducts", () => {
    const products = [
        { name: "Apple", category: "Fruit" },
        { name: "Carrot", category: "Vegetable" },
        { name: "Banana", category: "Fruit" }
    ];

    // Positive test
    test("should return only products matching the callback", () => {
        const result = store.filterProducts(products, p => p.category === "Fruit");
        expect(result).toEqual([
            { name: "Apple", category: "Fruit" },
            { name: "Banana", category: "Fruit" }
        ]);
    });

    // Negative test
    test("should return empty array if callback is invalid", () => {
        expect(store.filterProducts(products, null)).toEqual([]);
        expect(store.filterProducts(null, p => true)).toEqual([]);
    });

    // Edge case
    test("should return empty array if no products match", () => {
        const result = store.filterProducts(products, p => p.category === "Dairy");
        expect(result).toEqual([]);
    });
});

describe("sortInventory", () => {
    const inventory = [
        { name: "Milk", price: 3 },
        { name: "Bread", price: 2 },
        { name: "Cheese", price: 5 }
    ];

    // Positive test
    test("should sort by price ascending", () => {
        const result = store.sortInventory(inventory, "price");
        expect(result).toEqual([
            { name: "Bread", price: 2 },
            { name: "Milk", price: 3 },
            { name: "Cheese", price: 5 }
        ]);
    });

    // Negative test
    test("should return empty array if key does not exist", () => {
        expect(store.sortInventory(inventory, "quantity")).toEqual([]);
    });

    // Edge case
    test("should return empty array if inventory is empty or invalid", () => {
        expect(store.sortInventory([], "price")).toEqual([]);
        expect(store.sortInventory(null, "price")).toEqual([]);
        expect(store.sortInventory(inventory, null)).toEqual([]);
    });
});
