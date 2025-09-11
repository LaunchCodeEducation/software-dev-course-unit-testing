const store = require('../app.js');

describe("The calculateDiscount () function", () => {
    test('should return the discounted amount', () => {
        expect(store.calculateDiscount(100, 0.1)).toEqual(90);
    })
    test('should return null for invalid discount rate', () => {
        expect(store.calculateDiscount(100, 10)).toEqual(null);
    })
    test('should return null for invalid for non-numbers', () => {
        expect(store.calculateDiscount(100, 0)).toEqual(100);
    })
})

// describe("The filterProducts () function", () => {
//     test('should return the discounted amount', () => {
//         expect(store.calculateDiscount(100, 0.1)).toEqual(90);
//     })
//     test('should return null for invalid discount rate', () => {
//         expect(store.calculateDiscount(100, 10)).toEqual(null);
//     })
//     test('should return null for invalid for non-numbers', () => {
//         expect(store.calculateDiscount('100', 10)).toEqual(null);
//     })
// })






// function filterProducts(products, callback) {
//     if (!Array.isArray(products) || typeof callback !== 'function') return [];
//     // TODO: Implement filtering logic
//     return [];
// }

// function sortInventory(inventory, key) {
//     if (!Array.isArray(inventory) || typeof key !== 'string') return [];
//     // TODO: Implement sorting logic
//     return [];
// }
