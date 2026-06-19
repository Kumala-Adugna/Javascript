
// ==========================================
// MILESTONE 1: JOURNEY TO CANAAN SIMULATOR
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// 1. OBJECT SPECIFICATION: israeliteCamp

let israeliteCamp = {
    leader : "Moses",
    food: 100,
    faith: 100,
    complain: function(){
        this.faith = this.faith- 25;
        this.food = this.food -10;
        console.log(`The camp murmured and complained! Faith dropped.`);
    },

    prayForManna:function(){
        this.food = this.food+40;
        this.faith = this.faith +15;
        console.log(`Moses interceded. Manna rained down from heaven!`);
    }

};

// 2. ARRAY SPECIFICATION: wildernessRoute
let wildernessRoute = [
    { location: "Red Sea", trial: "Obstacle" },
    { location: "Marah Springs", trial: "Bitter Water" },
    { location: "Desert of Sin", trial: "Hunger" },
    { location: "Mount Sinai", trial: "Idolatry" }
];

console.log("--- Departure from Egypt ---");



// 3. TRAVEL ENGINE LOOP SPECIFICATION

for (let i = 0; i < wildernessRoute.length; i++) {
    let currentStage = wildernessRoute[i];
    console.log(`\nMoving tracking to: ${currentStage.location}...`);
    
    israeliteCamp.food -= 15;

    if(israeliteCamp.food<40){
            israeliteCamp.complain();
           }
    else if(israeliteCamp.faith<50){
       console.log(`The tial caught them is : ${currentStage.trial} and ${israeliteCamp.faith-=20} `);
       }
    else{
       israeliteCamp.prayForManna(); 
    }

       

   if (israeliteCamp.food <= 0 || israeliteCamp.faith <= 0) {
        console.log(`Journey failed at this stage. Food: ${israeliteCamp.food} | Faith: ${israeliteCamp.faith}`);
        break;
    }

}

// 4. DOM REPORTING SPECIFICATION (OUTSIDE THE LOOP)
if(israeliteCamp.food > 0 && israeliteCamp.faith > 0){
    headingElement.innerHTML = `Reached the Promised Land! 🍯`;
    headingElement.style.color= "green";

}
else{
    statusElement.innerHTML= `Lost in the wilderness... Turn back to Egypt.`;
    statusElement.style.color= "red";
}