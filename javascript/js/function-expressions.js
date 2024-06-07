// const sayHi = function () {
//   console.log("Hi!");
// };

// const func = sayHi;

// func();
// sayHi();

// function sayHi2() {}

// callback
const sayHi = function (callback) {
  setTimeout(function () {
    console.log("After 10 sec");
    callback();
  }, 10 * 1000);
};

function sayHi2() {
  console.log("Immediately called");
}

sayHi(sayHi2);

// synchronous, asynchronous

// setTimeout()

setTimeout(function () {
  console.log("After 5 seconds");
}, 5 * 1000);

// example
function ask(question, yes, no) {
  const res = confirm(question);
  if (res) {
    yes();
  } else {
    no();
  }
}

ask(
  "Are you sure to delete?",
  function () {
    alert("Successfully deleted!");
  },
  function () {
    alert("Something wrong!");
  }
);
