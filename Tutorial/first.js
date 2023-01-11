let firstName = "Ved";
let lastName = "Singh";
console.log(firstName + " " + lastName);

// Declaring variables


// let : It can change during the execution of the program
let age = 24;
age += 1;
console.log(age);

//const : It will never change once it has the value

const year = 2023;
console.log(year);

// operators

//String Literals

const ved = "I'm " + firstName + " my age is -> " + age;
console.log(ved);

const vedNew = `I'm ${firstName} and my age is -> ${age}`;
console.log(vedNew);


console.log(`String\n\with\n\multiple\line`);
console.log(`\n\ `);
console.log(`String
with
multiple
line`);

// Conditional 

const drivingAge = 19;
const isOldEnough = drivingAge >= 30;
const firstName2 = "Agastya";
if (isOldEnough) {
    console.log(`${firstName2} can drive ☺️`);
} else {
    console.log(`${firstName2} please , apply after ${30 - drivingAge} 🔥`);
}

