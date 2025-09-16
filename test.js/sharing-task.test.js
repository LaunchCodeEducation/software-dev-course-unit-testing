const sharingTask = require('../sharing-task.js');

describe('calculateDiscount', function() {
    test('should return applied discount', function() {
        expect(sharingTask.calculateDiscount(100, .1)).toBe(90);
    });

    test('should not return applied discount', function() {
        expect(sharingTask.calculateDiscount(100, -1)).toBe(null);
    });

    test('should not return applied discount', function() {
        expect(sharingTask.calculateDiscount("four", "five")).toBe(null);
    });
});

describe('filterProducts', function () {
    test('should return filtered array', function() {
        expect(sharingTask.filterProducts(['Squash', 'Ice', 'Sandwich', 'Corn', 'Apple'], str => str.length >= 5)).toStrictEqual(['Squash', 'Sandwich', 'Apple']);
    });

    test('should not return filtered array', function() {
        expect(sharingTask.filterProducts(['Squash', 'Ice', 'Sandwich', 'Corn', 'Apple'], 24)).toStrictEqual([]);
    });

    test('should not return filtered array', function() {
        expect(sharingTask.filterProducts(sharingTask.dogObject, str => str.length >= 5)).toStrictEqual([]);
    });

});

let produceObjectList = [ //for testing purposes
    {produceName: 'carrot', produceType: 'veggie'},
    {produceName: 'pineapple', produceType: 'fruit'},
    {produceName: 'radish', produceType: 'veggie'},
    {produceName: 'apple', produceType: 'fruit'},
    {produceName: 'corn', produceType: 'veggie'}
];

let sortedProduceObjectList = [ //for testing purposes
    {produceName: 'apple', produceType: 'fruit'},
    {produceName: 'carrot', produceType: 'veggie'},
    {produceName: 'corn', produceType: 'veggie'},
    {produceName: 'pineapple', produceType: 'fruit'},
    {produceName: 'radish', produceType: 'veggie'}
];

describe('sortInventory', function() {
    test('should return a sorted inventory', function() {
        expect(sharingTask.sortInventory(produceObjectList, 'produceName')).toStrictEqual(sortedProduceObjectList);
    });

    test('should not return a sorted inventory', function() {
        expect(sharingTask.sortInventory(produceObjectList, 45)).toStrictEqual([]);
    });

    test('should not return a sorted inventory', function() {
        expect(sharingTask.sortInventory(produceObjectList, '')).toStrictEqual([]);
    });
});