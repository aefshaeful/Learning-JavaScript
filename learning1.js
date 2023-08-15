// --- Exercises Level 1
// Soal 1
let age = parseInt(prompt('Enter your age:'));
if (age >= 18) {
    console.log('You are old enough to drive');
} else {
    let yearsLeft = 18 - age;
    console.log('You are left with ' + yearsLeft + ' years to drive');
}

// Soal 2
let yourAge = parseInt(prompt('Enter your age:'));
let myAge = 23;

let ageDifference = Math.abs(yourAge - myAge);

if (yourAge > myAge) {
    console.log('You are ' + ageDifference + ' years older than me');
} else if (yourAge < myAge) {
    console.log('You are ' + ageDifference + ' years younger than me');
} else {
    console.log('We are the same age');
}

// Soal 3
// Using if else
let a = 2;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// Using ternary operator
let result = (a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);

// Soal 4
function isEven(number) {
    return number % 2 === 0; // Function to check if a number is even
}

let userInput = parseInt(prompt('Enter a number:')); // Get user input

if (isEven(userInput)) {
    console.log(userInput +  ' is an even number'); // Check if the number is even 
} else {
    console.log(userInput + ' is an odd number'); // Check if the number is odd
}


// --- Exercises Level 2
// Soal 1
let score = prompt("Enter the student's score:"); // Get the student's score as input

let numericScore = parseFloat(score); // Convert the input to a number

let grade; // Check the score and assign a grade

if (numericScore >= 90) {
    grade = 'A';
} else if (numericScore >= 70) {
    grade = 'B';
} else if (numericScore >= 60) {
    grade = 'C';
} else if (numericScore >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("The student's grade is: " + grade);

// Soal 2
function getSeason(month) { 
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    if (["December", "January", "February"].includes(month)) {
      return "Winter";
    } else if (["March", "April", "May"].includes(month)) {
      return "Spring";
    } else if (["June", "July", "August"].includes(month)) {
      return "Summer";
    } else if (["September", "October", "November"].includes(month)) {
      return "Autumn";
    } else {
      return "Invalid month";
    }
}
  
const userMonth = prompt("Enter a month:");
const season = getSeason(userMonth);
  
if (season !== "Invalid month") {
    alert(`The season for ${userMonth} is ${season}.`);
} else {
    alert("Please enter a valid month.");
}
 

// --- Exercises Level 3
// Soal 1
function getDaysInMonth(month) { 
    const monthsWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    const monthsWith30Days = ['April', 'June', 'September', 'November'];
    
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    
    if (monthsWith31Days.includes(month)) {
      return 31;
    } else if (monthsWith30Days.includes(month)) {
      return 30;
    } else if (month === 'February') {
      return '28 or 29';
    } else {
      return 'Invalid month';
    }
}
  
const inputMonth = prompt("Enter a month:");
const daysInMonth = getDaysInMonth(inputMonth);
  
if (typeof daysInMonth === 'number') {
    console.log(`${inputMonth} has ${daysInMonth} days.`);
} else {
    console.log(daysInMonth);
}
  
  