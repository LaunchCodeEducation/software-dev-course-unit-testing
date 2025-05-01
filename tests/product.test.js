const { calculateDiscount } = require('../product.js');

test('calculates discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(50, 20)).toBe(40);
});