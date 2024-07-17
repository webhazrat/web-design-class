function triggerForm() {
  alert("Form");
}
function triggerDiv() {
  alert("Div");
}
function triggerP(event) {
  event.stopPropagation(); // propagation
  alert("P");
}

function delFun() {
  alert("Deleted successfully!");
}

// addEventListener(eventName, callback)
// delBtn.addEventListener("click", delFun);

delBtn.onclick = delFun;

function view(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.innerText);
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  console.log(Object.fromEntries(formData));
});

// circle.addEventListener("click", () => {
//   block.style.borderRadius = "100%";
// });

// rectangle.addEventListener("click", () => {
//   block.style.borderRadius = "0";
// });

function action(event) {
  const radius = event.target.textContent === "Circle" ? "100%" : "0";
  block.style.borderRadius = radius;
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const a = dropdown.querySelector("a");
  a.addEventListener("click", (event) => {
    event.preventDefault();
    dropdown.classList.toggle("show");
  });
});

document.addEventListener("click", function (event) {
  let target = event.target;
  if (!target.closest(".dropdown")) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }
});
