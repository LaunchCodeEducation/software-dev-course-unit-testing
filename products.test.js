 const { calculateDiscount, filterProducts, sortInventory} = require('./products.js')

    let myProducts = [
    {item: "computer", price: 200},
    {item: "soap", price: 3},
    {item: "tv", price: 400}
    ];
    let expensiveProducts = (item) => item.price > 50;

    let emptyArray = [];

 describe('calculateDiscount', () => {

test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -10)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 10)).toBe(0);
});

});



describe("filterProducts", () => {
test("returns array of products over $50", () => {
    expect(filterProducts(myProducts, expensiveProducts)).toEqual([
        {item: "computer", price: 200},
        {item: "tv", price: 400}
    ]);
});
test("returns [] if the first parameter is not an array (invalid input)", () =>{
    expect(filterProducts("tv, computer, soap")).toEqual([]);
});
test("returns [] if the array parameter is empty (edge case)", () => {
    expect(filterProducts(emptyArray, expensiveProducts)).toEqual([]);
});
});



describe("sortInventory", () => {
test("returns items sorted by lowest to highest price", () => { 
    expect(sortInventory(myProducts, "price")).toEqual([
      { item: "soap", price: 3 },
      { item: "computer", price: 200 },
      { item: "tv", price: 400 },
    ]);
    });
test("returns [] if the first parameter is not an array (invalid input)", () => {
    expect(sortInventory("computer, tv, soap")).toEqual([]);
});
test("returns [] if the array is empty (edge case)", () => {
    expect(sortInventory(emptyArray, "item")).toEqual([]);
});
});

