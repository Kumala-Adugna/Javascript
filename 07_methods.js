// ==========================================
// TOPIC 7: Object Methods & The 'this' Keyword
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// // Creating an object that contains both data and actions (methods)
// let bankAccount = {
//     owner: "Kumala",
//     balance: 500,

//     // A method to deposit money
//     deposit: function(amount) {
//         // 'this.balance' references the balance key inside THIS specific bankAccount object
//         this.balance = this.balance + amount;
//         console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
//     }
// };

// // 1. Initial UI Setup
// headingElement.innerHTML = `Account Owner: ${bankAccount.owner}`;
// headingElement.style.color = "black";
// statusElement.innerHTML = `Starting Balance: $${bankAccount.balance}`;

// // 2. Triggering the object's method action
// console.log("--- Executing Method Action ---");
// bankAccount.deposit(150); // This modifies the balance internally!

// // 3. Updating the UI to reflect the modified internal state
// statusElement.innerHTML = `Updated Wallet Balance: $${bankAccount.balance}`;
// statusElement.style.color = "green";



// // ------------------------------------------
// // EXPERIMENT 7.1: THE STATUS GREETER METHOD
// // ------------------------------------------

// let userSession  = {
//     profileName :"KumalaDev",
//     currentStatus: "Coding",

//     generateAlert: function(){
//        return `User ${this.profileName} is currently ${this.currentStatus}`;
//     }
// }

// headingElement.innerHTML = `Output here is:${userSession.generateAlert()} `;


// // ------------------------------------------
// // EXPERIMENT 7.2: THE GAME CHARACTER DAMAGE ENGINE
// // ------------------------------------------

// let hero = {
//     name:"Arthur",
//     health:100,
//     takeDamage: function(damageAmount){
//         this.health-=damageAmount;
//     }
// }
// hero.takeDamage(35);
// statusElement.innerHTML = `${hero.name} has ${hero.health} HP remaining`;


// // ------------------------------------------
// // EXPERIMENT 7.3: THE SMART SWITCHER TOGGLE
// // ------------------------------------------

// let smartLamp = {
//     room: "Study Room",
//     isPowerOn: false,
//     togglePower: function(){
//         if (this.isPowerOn== true){
//             this.isPowerOn = false;
//         }

//          else {
//             this.isPowerOn = true;
//          }   
//     }
// }
// smartLamp.togglePower();

// if (smartLamp.isPowerOn==true){
//     headingElement.innerHTML = `Lamp is ON`;
//     statusElement.innerHTML = `GREAT THE LAMP IS ON`;
//     statusElement.style.color = "green";
// }

// else{
//     headingElement.innerHTML = `Lamp is OFF`;
//     statusElement.innerHTML = `PLEASE TURN ON THE LAMP`;
//     statusElement.style.color = "Red";
// }



// ------------------------------------------
// EXPERIMENT 7.4: THE DYNAMIC INVOICE CALCULATOR
// ------------------------------------------
// YOUR TASK:
// 1. Create an object named "invoice" with these properties:
//    - items: [10, 25, 15] (An array representing prices)
//    - calculateTotal: A method function that takes no parameters.
// 2. Inside the "calculateTotal" method:
//    - Create a local tracking variable let runningSum = 0;
//    - Run a for loop through this.items to sum the prices up into runningSum.
//    - Return the final runningSum value out of the method.
// 3. Outside the object, invoke invoice.calculateTotal() and set statusElement.innerHTML to:
//    "Invoice Balance Due: $50" (Since 10 + 25 + 15 = 50).

let invoice = {
    items: [10,25,15],
    calculateTotal: function(){
        let runningSum = 0;
        for (let i=0; i<this.items.length;i++){
            runningSum+=this.items[i];
        }
        return runningSum;

    }
}
let finalInvoiceTotal = invoice.calculateTotal();
statusElement.innerHTML = `Invoice Balance Due: $${finalInvoiceTotal}`;
