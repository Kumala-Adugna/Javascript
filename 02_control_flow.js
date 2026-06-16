// // ==========================================
// // TOPIC 2: Operators & Control Flow
// // ==========================================
// let headingElement = document.getElementById("Heading1");
// let statusElement = document.getElementById("Status1");

// // Example Scenario: Movie Theater Ticket Pricing
// let age = 15;
// let hasMemberCard = false;

// if (age >= 60 || hasMemberCard === true) {
//     headingElement.innerHTML = "Ticket Price: $5 (Discount Applied)";
//     statusElement.innerHTML = "Enjoy the show!";
// } else {
//     headingElement.innerHTML = "Ticket Price: $12 (Standard Rate)";
//     statusElement.innerHTML = "Enjoy the show!";
// }

// // ==========================================
// // EXPERIMENT 2.1: THE ATM MACHINE (FIXED)
// // ==========================================
// let balance = 500;
// let withdrawalAmount = 200; // Change this to 600 to test the 'else' block!

// const name = "Kumala"; // Fix: Added the name variable
// let headingElement = document.getElementById("Heading1");
// let statusElement = document.getElementById("Status1"); // Fix: Added statusElement target

// if (withdrawalAmount <= balance) {
//     // Math: Deduct the money from the balance
//     balance = balance - withdrawalAmount; 

//     headingElement.innerHTML = `Welcome ${name}, you successfully withdrew your money. Thank you for banking with us!`;
//     headingElement.style.color = "green";
//     statusElement.innerHTML = `Withdrawn: $${withdrawalAmount} | Remaining Balance: $${balance}`;
// } else {
//     headingElement.innerHTML = "Transaction Declined: Insufficient funds for this request.";
//     headingElement.style.color = "red";
//     statusElement.innerHTML = `Current Balance: $${balance} | Requested: $${withdrawalAmount}`;
// }


// ==========================================
// EXPERIMENT 2.2: TRAFFIC LIGHT SIMULATOR
// ==========================================
let lightColor = "yellow"; // Try changing this to "green" or "red" later!

let statusElement = document.getElementById("Status1");

if(lightColor=="green"){
    statusElement.innerHTML = "GO!";
    statusElement.style.color = "green";
}
else if (lightColor=="yellow") {
    statusElement.innerHTML = "SLOW DOWN!";
    statusElement.style.color = "orange";
}
else if (lightColor== "red") {
    statusElement.innerHTML = "STOP!";
    statusElement.style.color = "red";

}
else {
    statusElement.innerHTML= "Invalid light color";
    statusElement.style.color="gray";
}


