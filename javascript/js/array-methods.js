const arr = [
  { p: "Laptop", price: 100 },
  { p: "Laptop", price: 200 },
  { p: "Mobile", price: 50 },
];

let prices = [];

// for (let i = 0; i < arr.length; i++) {
//   prices.push(arr[i].price);
// }

// asynchronous loop : map, forEach
const updatedArr = arr.map(function (item) {
  return { ...item, price: item.price * 2 };
});

// console.log(updatedArr);

const forEachUpdated = arr.forEach(function (item) {
  return item.p;
});

console.log(forEachUpdated);

// find
const laptop = arr.find(function (item) {
  return item.p === "Laptop";
});

//console.log(laptop);

// filter
const filteredLaptop = arr.filter(function (item) {
  return item.p !== "Laptop";
});

console.log(filteredLaptop);

const str = "Laptop,Mobile,Keyboard,Mouse";

const strArr = str.split(",");
console.log(strArr);

const catArr = ["Laptop", "Mobile", "Keyboard", "Mouse"];

console.log(catArr.join("✅"));
