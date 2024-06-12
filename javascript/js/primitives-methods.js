const str = "This is javascript world";
const str2 = "Let's go";
const str3 = "Let's go";

console.log(str.length);
console.log(str[0]);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat(str2, str3));
console.log(str.includes("is"));
console.log(str.endsWith("ld"));

const num = 10.12415845121;

console.log(num.toFixed(2));
console.log(num.toString());

const user3 = {
  name: "Mr. X 3",
  age: 50,
  walk: () => true,
  shipping: {
    city: "Rajshahi",
    postalCode: 6290,
  },
};
console.log(typeof user3.toString());

// exceptional methods JSON - Javascript object notation
const userString = JSON.stringify(user3);
console.log(userString);
console.log(JSON.parse(userString));
