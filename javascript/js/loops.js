const products = ["Mobile", "Laptop", "Keyboard", "Mouse"];

let index = 0;
while (index < products.length) {
  console.log(products[index]);
  index++;
}

let k = 0;
do {
  console.log(products[k]);
  k++;
} while (k < products.length);

for (let j = 0; j < products.length; j++) {
  console.log(products[j]);
}

// while
let num = 1;
while (num < 10) {
  console.log(num);

  num++;
}

console.log("After ending of loop");
