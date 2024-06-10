"use strict";
// Math, Number, String

const { min, max, round, random } = Math;

// object constructor
const user = new Object();
user.name = "Mr. X";

// object literal
const user2 = {};

user2.name = "Mr. X 2";

const user3 = {
  name: "Mr. X 3",
  age: 50,
  walk: () => true,
  shipping: {
    city: "Rajshahi",
    postalCode: 6290,
  },
};

user3.name = "Mr. X override";

// object destructure
const { name, age, walk, name2 } = user3;

console.log(name2);

const course = {
  _id: "sdhfjsdhfjshdfsd475f4g54fsd",
};

course.id = course._id;
delete course._id;

console.log(course);

// if (price in course) {
// }
for (let key in user3) {
  console.log(key);
}

// method

function isEmpty(obj) {
  let key;
  for (let i in obj) {
    key = i;
  }
  return key ? true : false;
}

const category = { title: "Test" };

// console.log(isEmpty(category));

const a = {};
const b = a;

const c = {};
const d = {};

console.log(c == d);

// copy, marge and update
const updatedUser3 = { ...user3, ...course };
const updatedUser4 = Object.assign({}, course);
console.log(updatedUser4);
