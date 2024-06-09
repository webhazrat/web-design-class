// function user(name, age) {
//   return { name: name, age: age };
// }

// const userData = user("Mr. X", 18);
// console.log(userData);
// const user = function (){

// }

const user = (name, age) => ({ name, age });
const userData = user("Mr. X", 18, "sdfsdf", "sdfsdfgfd");
console.log(userData);

let age = 18;

let welcome =
  age < 18 ? () => console.log("Hello") : () => console.log("Greetings");
