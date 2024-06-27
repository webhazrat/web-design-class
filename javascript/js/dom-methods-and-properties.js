// html (innerHTML, outerHTML), text (innerText, textContent), attribute (setAttribute, getAttribute, removeAttribute, hasAttribute), classList (add, remove, toggle), apend/prepend - before/after, insetAdjacentHTML
const delBtn = document.getElementById("delBtn");
const acc = document.querySelector(".acc-list2");
console.log(acc.innerHTML);
console.log(acc.outerHTML);

console.log(acc.innerText);
console.log(acc.textContent);

acc.setAttribute("data", "a");
acc.setAttribute("data2", "a2");
acc.removeAttribute("data2");
acc.hasAttribute("data2");

console.log(acc.getAttribute("data-toggle"));

console.log(acc.className);
acc.classList.add("new-class");
acc.classList.remove("text");
acc.classList.toggle("toggle");

const dialog = document.createElement("li");
dialog.innerText = "Ipad";

// acc.append(dialog);
acc.after(dialog);

acc.insertAdjacentHTML("beforeend", "<li>Iphone</li>");

acc.remove();

// asynchronous methods setTimeout, setInterval

const timeout = setTimeout(function () {
  console.log("after 5 sec");
}, 1000 * 5);

// clearTimeout(timeout);
const count = document.getElementById("count");

let countValue = 10;
count.innerText = countValue;
const interval = setInterval(function () {
  if (countValue === 0) {
    clearInterval(interval);
    return;
  }
  countValue--;
  count.innerText = countValue;
}, 1000);

// element height and width - clientHeight, clientWidth
console.log(count.clientHeight);

const example = document.getElementById("example");

console.log(example.offsetTop);
console.log(example.clientWidth);

console.log(window.innerHeight);
console.log(window.outerHeight);

delBtn.addEventListener("mousemove", () => console.log("You moved your mouse"));

let loader = true;
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");
  loader = false;
});
