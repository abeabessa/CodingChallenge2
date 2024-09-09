cc_2.js

// Tip Calculation

const bill_size = 150
const tip = (bill_size >= 50 && bill_size <= 300) ? bill_size * 0.15 : bill_size * 0.20;

// Output Details

console.log(`The bill was $${bill_size} , the tip was $${tip}, and the total value is $${bill_size + tip}`); 

// Create a Function

function calculateTip (bill_size) {
    return (bill_size>= 50 && bill_size<= 300) ? bill_size * 0.15 : bill_size * 0.20;
}

// Using bill value $100

const testBill = 100;
const testTip = calculateTip(testBill);

console.log(` Considering the bill $${testBill}, the tip is $${ testTip}, and the total value is $${(testBill + testTip)} `);
