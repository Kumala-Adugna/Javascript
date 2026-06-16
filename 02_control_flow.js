// ==========================================
// TOPIC 2: Operators & Control Flow
// ==========================================
const name = "Kumala";
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// Example Scenario: Movie Theater Ticket Pricing
let age = 15;
let hasMemberCard = false;

if (age >= 60 || hasMemberCard === true) {
    headingElement.innerHTML = "Ticket Price: $5 (Discount Applied)";
    statusElement.innerHTML = "Enjoy the show!";
} else {
    headingElement.innerHTML = "Ticket Price: $12 (Standard Rate)";
    statusElement.innerHTML = "Enjoy the show!";
}

// ------------------------------------------
// EXPERIMENT 2.1: THE ATM MACHINE
// ------------------------------------------
let balance = 500;
let withdrawalAmount = 200; 

if (withdrawalAmount <= balance) {
    balance = balance - withdrawalAmount; 
    headingElement.innerHTML = `Welcome ${name}, transaction successful!`;
    headingElement.style.color = "green";
} else {
    headingElement.innerHTML = "Transaction Declined: Insufficient funds.";
    headingElement.style.color = "red";
}

// ------------------------------------------
// EXPERIMENT 2.2: TRAFFIC LIGHT SIMULATOR
// ------------------------------------------
let lightColor = "yellow"; 

// Using strict equality (===) for safer code
if (lightColor === "green") {
    statusElement.innerHTML = "Traffic Light: GO!";
    statusElement.style.color = "green";
} else if (lightColor === "yellow") {
    statusElement.innerHTML = "Traffic Light: SLOW DOWN!";
    statusElement.style.color = "orange";
} else if (lightColor === "red") {
    statusElement.innerHTML = "Traffic Light: STOP!";
    statusElement.style.color = "red";
} else {
    statusElement.innerHTML = "Traffic Light: Invalid color";
    statusElement.style.color = "gray";
}