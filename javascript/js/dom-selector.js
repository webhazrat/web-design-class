const heading = document.getElementById("heading");
console.log(heading);

const classHeadings = document.getElementsByClassName("heading");
console.log(classHeadings[0]);

const input = document.getElementsByTagName("input");
console.log(input[0]);

const qSelector = document.querySelector("#heading");
console.log(qSelector);

const qSelectorAll = document.querySelectorAll("#heading");
qSelectorAll.forEach(function (el) {
  console.log(el);
});
// console.log(qSelectorAll);
