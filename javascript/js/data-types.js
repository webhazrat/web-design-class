// Number
let qty = "10";
let price = 50;

console.log(typeof qty);

let subTotal = qty * price;

let firstName = "Mr.";
let lastName = "X";

console.log(firstName + " " + lastName);
console.log(subTotal);

console.log(`Your name is: ${qty * price} ${lastName}`); // Your name is:

// Boolean
let isPaid = true;
let isGreater = 4 > 6;

// String
let username = "123x";

// Null
let userData = {};

let user = userData?.name ? userData : null;

// Undefined

// Object
let product = {
  name: "13.3 inch Laptop",
  quantity: 12,
  price: 500,
  total: function () {
    return this.quantity * this.price;
  },
  colors: ["blue", "red", "yellow"],
};

console.log(product.colors[0]);

let colors = ["blue", "red", "yellow", "magenda", "sky"]; // 0 1 2 3 4

console.log(colors[4]);
console.log(typeof colors);

/*
operator: typeof <whichTypeDoYouWantToKnow>
method: parseInt(<>), parseFloat(<>)

*/
