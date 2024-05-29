// if...else, switch...case, ternary, nullish coalescing

let a = 5;
let b = 5;

if (b < a) {
  console.log(`Inside of if block`);
} else if (b === a) {
  console.log(`Inside of if else block`);
} else {
  console.log(`Inside of else block`);
}

let num = 10;
if (num % 2 === 0) {
  console.log(`This number ${num} is even`);
} else {
  console.log(`This number ${num} is odd`);
}

const isStatus = "suspended";

if (isStatus === "nofound") {
  console.log(`You are ${isStatus}`);
} else if (isStatus === "suspended") {
  console.log(`You are ${isStatus}`);
} else if (isStatus === "unverified") {
  console.log(`You are ${isStatus}`);
} else {
  console.log(`You are ${isStatus}`);
}

let allowed; // global variable
let age = 19; //prompt("How old are you?");

if (age > 18) {
  //let allowed = true //local variable
  allowed = true;
} else {
  //let allowed = false //local variable
  allowed = false;
}

console.log(allowed);

// if(condition){

// }else{

// }

// if(condition){

// }else if(condition){

// }else if(condition){

// }else{

// }

// ternary operator
let value = 11;
const result =
  value % 2 === 0
    ? `This number ${value} is even`
    : `This number ${value} is odd`;

console.log(result);

// nullish coalescing = null + undefined

let isUser = null;

const user = isUser ?? { name: "Default" };

console.log(user);

// switch ... case [break, default]

function dayNamePicker(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Saturday";
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wensday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    default:
      return "Your key is invalid";
  }
}

const dayName = dayNamePicker(5);
console.log(dayName);
