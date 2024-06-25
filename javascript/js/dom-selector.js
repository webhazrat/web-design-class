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

document.body; // select document body
document.head; // select document head
document.title; // select document title

const delBtn = document.getElementById("delBtn");
delBtn.style.color = "red";
delBtn.style.background = "black";
delBtn.style.border = "0";
delBtn.style.borderRadius = "4px";
console.log(delBtn.innerHTML);
delBtn.innerHTML = "Another new text <p>Hello</p>";
console.log(delBtn.classList);
console.log(delBtn.innerText);
// delBtn.innerText = "Another new text";
delBtn.classList.add("new-class");
// delBtn.classList.remove("new-class");
console.log(delBtn.classList);
delBtn.append("+");

const list = document.querySelectorAll(".acc-list li");
list.forEach(function (el) {
  el.append("+");
});

const accList = document.querySelector(".acc-list");
const parent = accList.closest("div");
console.log(parent);
