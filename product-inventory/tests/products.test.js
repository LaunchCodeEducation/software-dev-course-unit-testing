const products = require('../products.js');

let inventory = [
    {item : "peach", price : 10},
    {item : "apple", price : 2},
    {item : "orange", price : 3},
    {item : "banana" , price : 4}
];



describe("calculate Discount", ()=>{
    test("applies a valid discount rate", () => {
        expect(products.calculateDiscount(100, 0.1)).toBe(90);
    });
    
    test("handles an invalid discount rate gracefully", () => {
        expect(products.calculateDiscount(100, -0.1)).toBe(null);
    });
    
    test("handles edge case with price of 0", () => {
        expect(products.calculateDiscount(0, 0.2)).toBe(0);
    });
});

describe("filter products", ()=>{
     test("filter products based on callback", ()=>{
        const filtered = products.filterProducts(inventory, product => product.price >1 )
        expect(filtered).toEqual([
            {item : "peach", price : 10},
            {item : "apple", price : 2},
            {item : "orange", price : 3},
            {item : "banana" , price : 4},
           
        ])
     });

     test("returns empty array if products is not an array ", ()=>{
        expect(products.filterProducts("invalid",product => product.price >1)).toEqual([]);
     });

     test("return empty array if no products match",()=>{
        expect(products.filterProducts(inventory, product => product.price ==1)).toEqual([]);
     });

     test("returns empty array if callback is not a function", ()=>{
        expect(products.filterProducts(inventory,"not a function")).toEqual([]);
     });


});

describe("sortInventory", ()=>{

    test("sorts the inventory by price in ascending order", ()=>{
        
        expect(products.sortInventory(inventory,"price")).toEqual([
            {item : "apple", price : 2},
            {item : "orange", price : 3},
            {item : "banana", price : 4},
            {item : "peach", price : 10}
          ]);

    });

    test("returns an empty array for invalid inventory",()=>{
        expect(products.sortInventory("nothing","price")).toEqual([])
    });

    test("returns an empty array for invalid key",()=>{
       
        expect(products.sortInventory(inventory,123)).toEqual([])
    });

});