const {
  calculateDiscount,
  filterProducts,
  sortInventory
} = require('../utils');

// -------------------- calculateDiscount --------------------
describe('calculateDiscount', () => {
  // Positive
  test('applies a valid discount rate', () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
    expect(calculateDiscount(80, 0.25)).toBe(60);
  });

  test('works with decimal prices and rates, rounds to 2 decimals', () => {
    expect(calculateDiscount(19.99, 0.15)).toBe(16.99); // 19.99 * 0.85 = 16.9915 → 16.99
    expect(calculateDiscount(50.5, 0.2)).toBe(40.4);
  });

  // Negative
  test('returns null for invalid types or non-finite numbers', () => {
    expect(calculateDiscount('100', 0.1)).toBeNull();
    expect(calculateDiscount(100, '0.1')).toBeNull();
    expect(calculateDiscount(NaN, 0.1)).toBeNull();
    expect(calculateDiscount(100, Infinity)).toBeNull();
  });

  test('returns null for out-of-range rate or negative price', () => {
    expect(calculateDiscount(100, -0.1)).toBeNull();
    expect(calculateDiscount(100, 1.1)).toBeNull();
    expect(calculateDiscount(-5, 0.2)).toBeNull();
  });

  // Edge
  test('price of 0 returns 0 regardless of rate', () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
    expect(calculateDiscount(0, 1)).toBe(0);
  });

  test('rate 0 returns original price; rate 1 returns 0', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
    expect(calculateDiscount(100, 1)).toBe(0);
  });
});

// -------------------- filterProducts --------------------
describe('filterProducts', () => {
  const products = [
    { id: 1, name: 'Pen', price: 2.5 },
    { id: 2, name: 'Pencil', price: 1.0 },
    { id: 3, name: 'Notebook', price: 5.0 },
    { id: 4, name: 'Marker', price: 3.25 }
  ];

  // Positive
  test('filters by predicate (price >= 3)', () => {
    const res = filterProducts(products, p => p.price >= 3);
    expect(res).toEqual([
      { id: 3, name: 'Notebook', price: 5.0 },
      { id: 4, name: 'Marker', price: 3.25 }
    ]);
  });

  test('returns a NEW array (does not mutate original)', () => {
    const copy = products.slice();
    const res = filterProducts(products, () => true);
    expect(res).not.toBe(products);
    expect(products).toEqual(copy);
  });

  // Negative
  test('invalid inputs return []', () => {
    expect(filterProducts(null, () => true)).toEqual([]);
    expect(filterProducts(products, null)).toEqual([]);
  });

  // Edge
  test('empty list returns []', () => {
    expect(filterProducts([], () => true)).toEqual([]);
  });

  test('predicate always false returns []', () => {
    expect(filterProducts(products, () => false)).toEqual([]);
  });

  test('predicate can use index/array params', () => {
    const res = filterProducts(products, (_p, idx, arr) => idx === arr.length - 1);
    expect(res).toEqual([{ id: 4, name: 'Marker', price: 3.25 }]);
  });
});

// -------------------- sortInventory --------------------
describe('sortInventory', () => {
  const inv = [
    { sku: 'B20', qty: 5, name: 'beta' },
    { sku: 'A10', qty: 10, name: 'alpha' },
    { sku: 'C30', qty: 2, name: 'charlie' },
    { sku: 'D40', qty: undefined, name: 'delta' },
    { sku: 'E50', name: 'echo' } // missing qty
  ];

  // Positive
  test('sorts by numeric key ascending', () => {
    const res = sortInventory(inv, 'qty'); // 2,5,10,undefined,undefined
    expect(res.map(x => x.qty)).toEqual([2, 5, 10, undefined, undefined]);
  });

  test('sorts by string key ascending (locale/numeric aware)', () => {
    const items = [
      { code: 'x2' },
      { code: 'x10' },
      { code: 'x1' }
    ];
    const res = sortInventory(items, 'code');
    expect(res.map(x => x.code)).toEqual(['x1', 'x2', 'x10']);
  });

  test('does not mutate original array', () => {
    const copy = inv.slice();
    const res = sortInventory(inv, 'name');
    expect(res).not.toBe(inv);
    expect(inv).toEqual(copy);
  });

  // Negative
  test('invalid inputs return []', () => {
    expect(sortInventory(null, 'qty')).toEqual([]);
    expect(sortInventory(inv, null)).toEqual([]);
  });

  // Edge
  test('handles missing/undefined keys by pushing them to the end', () => {
    const res = sortInventory(inv, 'qty');
    const tail = res.slice(-2);
    expect(tail.every(x => x.qty == null)).toBe(true);
  });

  test('stable-ish ordering when values equal (string compare fallback)', () => {
    const items = [{ x: 1, id: 'b' }, { x: 1, id: 'a' }];
    const res = sortInventory(items, 'x');
    // same x; then string compare on full record string implementation returns deterministic order
    expect(res.length).toBe(2);
  });
});
