const itemName = "Wireless Mouse";
const itemPrice = 25.00;
let quantity = 2;
let totalCost = itemPrice * quantity;

console.log(`Receipt 1: You bought ${quantity} ${itemName}(s) for a total of $${totalCost}.`);

quantity = 3;
totalCost = itemPrice * quantity;

console.log(`Receipt 2: You bought ${quantity} ${itemName}(s) for a total of $${totalCost}.`);
