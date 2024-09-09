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

//Utilize Arrays Using Data Set 1

const bills = [275, 40, 430]; 
const tips = bills.map(bill => calculateTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);

console.log('Bills Amount:', bills);
console.log('Tips Amount:', tips);
console.log('Totals:', totals);
