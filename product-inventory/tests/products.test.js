const { calculateDiscount, filterProducts, sortInventory } = require('../products.js');

const products = [
    { Item: 'Laptop', Quantity: 50, Price: 1000 },
    { Item: 'Smartphone', Quantity: 200, Price: 1200 },
    { Item: 'Headphones', Quantity: 150, Price: 500 },
    { Item: 'Keyboard', Quantity: 75, Price: 200 },
    { Item: 'Mouse', Quantity: 120, Price: 50 },
];

describe("apply dicount function", () => {
    test("applies a valid discount rate", () => {
        expect(calculateDiscount(100, 0.1)).toBe(90);
    });

    test("handles an invalid discount rate gracefully", () => {
        expect(calculateDiscount(100, -0.1)).toBe(null);
    });

    test("handles edge case with price of 0", () => {
        expect(calculateDiscount(0, 0.2)).toBe(0);
    });

//This test case was added later
    test("accepts numbers for price not strings",() =>{
        expect(calculateDiscount(100,"string")).toBe(null);
    })
})

const cat = "Nick";
describe("filter products by price", () => {
    test("filters products less than 500", () => {
        expect(filterProducts(products, product => product.Price < 500)).toEqual([
            { Item: 'Keyboard', Quantity: 75, Price: 200 },
            { Item: 'Mouse', Quantity: 120, Price: 50 },
        ])
    })
    test("Negative Test Case: Should give empty array for non-array first argument", () => {
        expect(filterProducts(cat, product => product.Price < 500)).toEqual([]);
    });

    test("Edge Test Case: Should handle filtering everything out of array", () => {
        expect(filterProducts(products, product => product.Price < 20)).toEqual([]);
    });
});

//sortInventory
describe("inventoryFunctions.sortInventory", function () {
    test("Sort by Quantity", () => {
        expect(sortInventory(products, "quantity")).toEqual([
            { Item: 'Laptop', Quantity: 50, Price: 1000 },
            { Item: 'Smartphone', Quantity: 200, Price: 1200 },
            { Item: 'Headphones', Quantity: 150, Price: 500 },
            { Item: 'Keyboard', Quantity: 75, Price: 200 },
            { Item: 'Mouse', Quantity: 120, Price: 50 }
        ]);
    });

    test("Number input instead of a string", () => {
        expect(sortInventory(products, 587609)).toEqual([]);
    });

    test("Empty array input", () => {
        expect(sortInventory([], "quantity")).toEqual([]);
    });
});