const cartFunctions = require('../sharing-task');


describe("Test of calculateDiscount()", function() {
    test("applies a valid discount rate", () => {
        expect(cartFunctions.calculateDiscount(100, 0.1)).toEqual(90);
    });
    test("handles an invalid discount rate gracefully", () => {
        expect(cartFunctions.calculateDiscount(100, -0.1)).toBe(null);
    });

    test("handles edge case with price of 0", () => {
        expect(cartFunctions.calculateDiscount(0, 0.2)).toBe(0);
    });
});

describe("Test of filterProducts and productFilterer()", function() {
    test("should return an array of products with 5 or more characters", () => {
        const products = ["Gameboy Advance", "PS3", "XBOX 360", "Carrots"];
        expect(cartFunctions.filterProducts(products, cartFunctions.productFilterer)).toEqual(["Gameboy Advance", "XBOX 360", "Carrots"]);
    });

    test("ensures the function responds properly when no data is passed in to filter", () => {
        const products = [];
        expect(cartFunctions.filterProducts(products, cartFunctions.productFilterer)).toEqual("Error, please enter at least one product");
    });

    test("ensures items with exactly five characters are filtered correctly", () => {
        const products = ['Apple', 'Paper'];  
        expect(cartFunctions.filterProducts(products, cartFunctions.productFilterer)).toEqual(['Apple', 'Paper']);  
    });
});

describe("Test of sortInventory()", function() {
    test("should return an array sorted by product quantity", () => {
        const inventory = [
            { name: 'milk', quantity: 2},
            { name: 'peppers', quantity: 0},
            { name: 'eggs', quantity: 5},
            { name: 'cherries', quantity: 5},
            { name: 'orange juice', quantity: 3}
        ];
        expect(cartFunctions.sortInventory(inventory, 'quantity')).toEqual([
            { name: 'peppers', quantity: 0 },
            { name: 'milk', quantity: 2 },
            { name: 'orange juice', quantity: 3 },
            { name: 'eggs', quantity: 5 },
            { name: 'cherries', quantity: 5 }
        ]);
    });

    test("should handle an invalid key", () => {
        const inventory = [
            { name: 'milk', quantity: 2},
            { name: 'peppers', quantity: 0},
            { name: 'eggs', quantity: 5},
            { name: 'cherries', quantity: 5},
            { name: 'orange juice', quantity: 3}
        ];
        expect(cartFunctions.sortInventory(inventory, 'aaaa')).toEqual(`Error, aaaa is not a valid sorting choice`);
    });

    test("verifies the code still runs when passed an empty array to sort", () => {
        const inventory = [];
        expect(cartFunctions.sortInventory(inventory, 'quantity')).toEqual([]);
    });
});
