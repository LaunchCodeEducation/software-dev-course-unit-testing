const { calculateDiscount, filterProducts, sampleInventory, sortInventory } = require('../products.js');


describe("The shopping cart", () => {

    test("should calculate discout accuratley", () => {
        expect(calculateDiscount(100, .10)).toEqual(90)
    })

    test("should account for negative numbers", () => {
        expect(calculateDiscount(100, .10)).not.toEqual(-90);
    })


    test("should account for discount over than 1", () => {
        expect(calculateDiscount(100, 1.2)).toEqual(null);
    })

    test("should filter to find yoga mat", () => {
        expect(filterProducts(sampleInventory, (products) => products.name === "Yoga Mat")).toEqual([
  {
    id: 9,
    name: 'Yoga Mat',
    category: 'Fitness',
    price: 35,
    inStock: true,
    rating: 4.7
  }
]);
    })

    test("should return empty array if callback is not a function", () => {
        expect(filterProducts(sampleInventory, 'string')).toEqual([]);
    })

    test("should return empty array if function is broken", () => {
        expect(filterProducts(sampleInventory, () => {})).toEqual([])
    })

    test("should sort item names in alphbetical order", () => {
        expect(sortInventory(sampleInventory, "name" )).toMatchSnapshot();
    })

    test("should return empty array if inventory is not an array", () => {
        expect(sortInventory("inventory", "name")).toEqual([]);
    })

    test("should return 0 if key is not found in array", () => {
        expect(sortInventory(sampleInventory, undefined)).toEqual([])
    })

});










