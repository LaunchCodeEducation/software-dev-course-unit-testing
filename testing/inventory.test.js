const inventory = require('../inventory.js');

//Test Data
const indProd = "detergent";
const groupProd = ["softener", "dryer sheets", "lint catcher"];
const sortedProd = ["dryer sheets", "lint catcher", "softener"];
const descProd = ["softener", "lint catcher", "dryer sheets"];
const filterTest = ["softener", "dryer sheets", "lint catcher", "dryer balls"];
const sortTest = [{item: "softener", amount: 4},
                 {item: "dryer sheets", amount: 150},
                 {item: "lint catcher", amount: 2},
                 {item: "dryer balls", amount: 6}
                ];
const sortSol = [{item: "dryer sheets", amount: 150},
                 {item: "dryer balls", amount: 6}
                ];
const AlphSort = [{item: "dryer balls", amount: 6}, 
                 {item: "dryer sheets", amount: 150},
                 {item: "lint catcher", amount: 2},
                 {item: "softener", amount: 4}
                ];
const AmtSort =  [{item: "lint catcher", amount: 2},
                 {item: "softener", amount: 4},
                 {item: "dryer balls", amount: 6},
                 {item: "dryer sheets", amount: 150}
                ];



describe('calculateDiscount',()=>{
    test('should be applied discount',()=>{
        expect(inventory.calculateDiscount(100,0.2)).toEqual(80);
    });

    test('should not be applied discount',()=>{
        expect(inventory.calculateDiscount(-0.5,0.2)).toBe(`Price must be a positive number.`);
    });

    test('should not be applied discount',()=>{
        expect(inventory.calculateDiscount(100,-0.2)).toBe(`Discount must be a decimal value between 0 and 1.`);
    });

});


describe('The filterProducts() function', () => {
    test('should remove products that do not meet the criteria', () => {
        expect(inventory.filterProducts(sortTest, product => product.amount > 4)).toEqual(sortSol)
    }); 
    
    test('does not filter products that are not an Array', () => {
        expect(inventory.filterProducts(indProd,/*Any Callback*/)).toBe(`Please use a valid array and filter`)
    });

    test('should throw an error for an input that is not a function', () => {
        expect(inventory.filterProducts(sortTest,"amount > 4")).toBe(`Please use a valid array and filter`)
    });
});



describe("sortInventory function", function(){
    test("Should check  that sortInventory sorts alphabetically", function(){
    expect(inventory.sortInventory(sortTest, "item")).toEqual(AlphSort);
    });

    test("Should check that sortInventory sorts by amount", function(){
    expect(inventory.sortInventory(sortTest,"amount")).toEqual(AmtSort);
    });

});


