
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

describe("The filterProducts () function", () => {
    test('should return a filtered array', () => {

        let initArray = ["Pizza", "Burger", "Fries"];
        let solutionArray = ["Pizza", "Fries"];
        expect(store.filterProducts(initArray, function(entry) {
            return entry !== "Burger";
        })).toEqual(solutionArray);
    })
    test('should return an empty string for invalid function', () => {

        let initArray = ["Pizza", "Burger", "Fries"];

        expect(store.filterProducts(initArray, null)).toEqual([]);
    })
    test('should return an empty string for removing everything', () => {
        let initArray = ["Pizza", "Burger", "Fries"];

        expect(store.filterProducts(initArray, function(){ return false })).toEqual([]);
    })
})

describe("The sortInventor () function", () => {
    test('should return a sorted array', () => {

        let initArray = [
            {"num": 30},
            {"num": 20},
            {"num": 32},
            {"num": 10},
        ];
        let solutionArray = [
            {"num": 10},
            {"num": 20},
            {"num": 30},
            {"num": 32},
        ];
        expect(store.sortInventory(initArray, "num")).toEqual(solutionArray);
    })
    test('should return an empty array for no key', () => {

        let initArray = [
            {"num": 30},
            {"num": 20},
            {"num": 32},
            {"num": 10},
        ];

        expect(store.sortInventory(initArray, null)).toEqual([]);
    })
    test('should return the same array for no change in sorting', () => {
        
        let initArray = [
            {"num": 30},
            {"num": 20},
            {"num": 60},
            {"num": 10},
        ];

        expect(store.sortInventory(initArray, "key")).toEqual(initArray);
    })
})
