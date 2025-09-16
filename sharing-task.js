// # 🧪 Shared Codebase Testing Activity

// ## 🎯 Objective
// Students will work together to write unit tests for a shared codebase, verify method behavior, and provide feedback to their peers. This activity emphasizes collaboration, critical thinking, and knowledge sharing within the learning community.

// ---

// ## 🧱 Activity Overview

// ### 🔧 Setup a Shared Codebase

// Provide a starter project containing partially implemented methods (e.g., `calculateDiscount`, `filterProducts`, `sortInventory`).  
// Include minimal or no existing tests, encouraging students to create them from scratch.

// ### 📂 Partially Implemented Methods





// In a group with Aaron B, Chris L, Eric S, Oznur K

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic

    return price - (discountRate * price);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    // Return products.filter(callback) - no callback to function so just return an empty array...
    return filteredProducts;
}

function sortInventory(inventory, key) {

    // Checks  if arguments are of the correct type
    if (!Array.isArray(inventory) || typeof key !== 'string' || inventory.some(object => key in object) === false) return [];
    // TODO: Implement sorting logic

    let sortedInventory = inventory.sort((a, b) => a[key].localeCompare(b[key]));
    return sortedInventory;
    
}

console.log(calculateDiscount(100, 0.1));

let dogObject = {dogname: 'Roofus', dogType: 'Lab'};
let produceObjectList = [
    {produceName: 'carrot', produceType: 'veggie'},
    {produceName: 'pineapple', produceType: 'fruit'},
    {produceName: 'radish', produceType: 'veggie'},
    {produceName: 'apple', produceType: 'fruit'},
    {produceName: 'corn', produceType: 'veggie'}
];

console.log(sortInventory(produceObjectList, 'produceName'));

module.exports = { calculateDiscount, filterProducts, sortInventory };


// ## 👥 Form Groups

// Divide students into small groups of 3–5. Each group will be responsible for writing unit tests for one or more methods in the shared codebase.

// ### 🧑‍🤝‍🧑 Assign Roles Within the Group:

// - **Test Writer**: Writes initial test cases.
// - **Code Reviewer**: Reviews and improves the test cases.
// - **Debugger**: Ensures the implementation passes all tests.
// - **Presenter**: Summarizes the group’s contributions for sharing with the class.

// ---

// ## 📝 Instructions

// ### 🧪 Write Tests
// - Use **Jest** to write unit tests for their assigned method(s).
// - Ensure they include **positive**, **negative**, and **edge cases**.

// ### 🤝 Collaborate
// - Share and discuss test ideas within their group.
// - Ensure all possible scenarios are covered.

// ### 🧪 Run Tests
// - Use the command below to execute the test suite and refine the implementation:

// ```bash
// npm test
// ```

// ## 📄 Sample Test Code (Students Will Write)

// ```js
// test("applies a valid discount rate", () => {
//     expect(calculateDiscount(100, 0.1)).toBe(90);
// });

// test("handles an invalid discount rate gracefully", () => {
//     expect(calculateDiscount(100, -0.1)).toBe(null);
// });

// test("handles edge case with price of 0", () => {
//     expect(calculateDiscount(0, 0.2)).toBe(0);
// });
// ```