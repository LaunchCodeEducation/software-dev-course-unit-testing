const products = [
  {Item: 'Laptop', Quantity: 50,  Price: 1000},
  {Item: 'Smartphone', Quantity: 200, Price: 1200},
  {Item: 'Headphones', Quantity: 150, Price: 500},
  {Item: 'Keyboard', Quantity: 75, Price: 200},
  {Item: 'Mouse', Quantity: 120, Price: 50},
];

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') {
        return null;
    }
    if (discountRate < 0 || discountRate > 1) {
        return null;
    }

    return price-price*discountRate;
}

console.log(calculateDiscount(100, 0.1));

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function'){

     return [];
    }
		return products.filter(callback);
}
console.log(filterProducts(products, product => product.price<500));

function sortInventory(inventory, key) {
if (!Array.isArray(inventory) || typeof key !== 'string'){
	return [];
	}
    return inventory.sort((a,b) => (b[key]-a[key]));
    };
console.log(sortInventory(products, "quantity"));

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
}