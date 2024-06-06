function total(arr) {
  return arr.reduce((prev, current) => prev + current.price * current.qty, 0);
}

const numbers = [
  {
    name: "A",
    price: 40,
    qty: 5,
  },
  {
    name: "B",
    price: 998,
    qty: 1,
  },
  {
    name: "C",
    price: 125.5,
    qty: 11,
  },
];

console.log(`Total ${total(numbers)}`);

// let's create a function

function msgText() {
  return "Message text";
}

// global variable
let message = "Global message variable";

function showMessage(msg, type = "failed") {
  // local variable
  let message2 = "Message 2";
  console.log(message);
  console.log(message2);
  alert(`${type} : ${msg}`);
}

showMessage(message, "success");
// showMessage("Second message", "failed");

let userName = "John";

function showMessage() {
  userName = "Bob";

  let message = "Hello, " + userName;
  console.log(message);
}

console.log(userName);

showMessage();

console.log(userName);
