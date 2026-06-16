// ==========================================
// TOPIC 5: Objects in JavaScript
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// 1. Creating an Object (Commented out to prevent overwriting)
// let smartphone = {
//     brand: "Apple",
//     model: "iPhone 15",
//     storageGB: 128,
//     isFullyCharged: true
// };
// headingElement.innerHTML = `Device: ${smartphone.brand} ${smartphone.model}`;
// headingElement.style.color = "black";
// statusElement.innerHTML = `Storage: ${smartphone.storageGB}GB | Charged: ${smartphone.isFullyCharged}`;


// ------------------------------------------
// EXPERIMENT 5.1: THE USER PROFILE UPDATE (Commented out)
// ------------------------------------------
// let userAccount ={
//     username: "KumalaDev",
//     role: "Student",
//     status: "Active"
// }
// userAccount.status ="Suspended";
// headingElement.innerHTML = `User ${userAccount.username} is currently ${userAccount.status}`;


// ------------------------------------------
// EXPERIMENT 5.2: THE FEATURE CHECKER (ACTIVE)
// ------------------------------------------
let car = {
    make: "Toyota",
    model: "Corolla",
    hasAutopilot: false
};

if (car.hasAutopilot === true) {
    headingElement.innerHTML = "Vehicle Diagnostics";      
    statusElement.innerHTML = "Autopilot System: ENGAGED";
    statusElement.style.color = "green";
} else {
    headingElement.innerHTML = "Vehicle Diagnostics";
    statusElement.innerHTML = "Autopilot System: NOT AVAILABLE";
    statusElement.style.color = "red";
}