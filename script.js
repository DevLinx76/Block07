// Pseudocode:
// 1. Calculate the first number as 10 plus 30.
// 2. Calculate the second number as 40 divided by 2.
// 3. Calculate the third number as 50 minus 11.
// 4. Display the combination on the HTML page.
// 5. Display an alert with the combination.

// Calculation steps
const firstNumber = 10 + 30;  // Step 1
const secondNumber = 40 / 2;  // Step 2
const thirdNumber = 50 - 11;  // Step 3

// Display the combination on the HTML page
const combinationElement = document.getElementById("combination");
combinationElement.textContent = `${firstNumber} - ${secondNumber} - ${thirdNumber}`;

// Display an alert with the combination
alert(`Vault Combination: ${firstNumber} - ${secondNumber} - ${thirdNumber}`);
