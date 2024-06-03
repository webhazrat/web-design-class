// || OR
const user = " ";
const result1 = user || 10 || 0;

// console.log(result1);

// && AND
const result2 = user && "AVC";
console.log(result2);

const gender = "Female";
const age = 18;
if ((age > 18 || age === 18) && gender === "Male") {
  // auth logic
} else {
  // else logic
}

// first
if (true && gender === "Male") {
  // auth logic
} else {
  // else logic
}

// second
if (true && false) {
  // auth logic
} else {
  // else logic
}

// third
if (false) {
  // auth logic
} else {
  // else logic
}

// ! NOT

const isMatch = null;

!isMatch; // false

console.log(!isMatch);

if (!isMatch) {
  console.log("Nothing match");
}
