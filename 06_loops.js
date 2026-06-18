// ==========================================
// TOPIC 6: Loops (For & While)
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// EXAMPLES (Commented out to prevent overriding your active experiment screens)
// headingElement.innerHTML = "Loop Engine Sandbox Activated";
// headingElement.style.color = "black";
// console.log("--- Starting Engine Run ---");
// for (let i = 1; i <= 5; i++) {
//     console.log(`Current Loop Sequence Number: ${i}`);
// }
// statusElement.innerHTML = "Open your Browser Console (F12) to see the background count sequence!";
// statusElement.style.color = "gray";

// console.log("--- Starting Security Login Verification ---");
// let userEnteredCorrectPassword = false;
// let loginAttempts = 0;
// while (userEnteredCorrectPassword === false) {
//     loginAttempts++;
//     console.log(`System Check: Attempt #${loginAttempts} processed...`);
//     if (loginAttempts === 3) {
//         console.log("Correct password detected on attempt 3!");
//         userEnteredCorrectPassword = true;
//     }
// }
// console.log("--- Security Login Verification Complete ---");


// ------------------------------------------
// EXPERIMENT 6.1: THE COUNTDOWN TIMER
// ------------------------------------------
// let timer = 3;
// while (timer > 0) {
//     console.log(`Seconds remaining: ${timer}`); // FIX: Swapped to backticks
//     timer--;
// }
// statusElement.innerHTML = "Blast off! 🚀";


// ------------------------------------------
// EXPERIMENT 6.2: THE ARRAY SCANNER
// ------------------------------------------
// let shoppingCart = ["Laptop", "Mouse", "Keyboard"];
// for (let i = 0; i < shoppingCart.length; i++) { // FIX: Added let
//     console.log(`Scanning inventory item: ${shoppingCart[i]}`); // FIX: Backticks & Square Brackets []
// }
// headingElement.innerHTML = "Scanned 3 items successfully!";


// ------------------------------------------
// EXPERIMENT 6.3: THE SELECTIVE EVEN FILTER
// ------------------------------------------
// for (let i = 1; i <= 6; i++) {
//     if (i % 2 == 0) {
//         console.log(`Found even integer: ${i}`);
//     } else {
//         continue;
//     }
// }


// ------------------------------------------
// EXPERIMENT 6.4: THE ACCUMULATOR ENGINE (ACTIVE)
// ------------------------------------------
let sumTotal = 0;
for (let i = 1; i <= 4; i++) {
    sumTotal = sumTotal + i;
    console.log(`Found sum is: ${sumTotal}`);
}
// Let's print out the final result to the DOM to complete the dashboard!
statusElement.innerHTML = `Accumulator Total calculated: ${sumTotal}`;
statusElement.style.color = "purple";
headingElement.innerHTML = "Loop Accumulator Engine Run Complete";