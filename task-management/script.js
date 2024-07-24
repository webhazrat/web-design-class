const addTaskForm = document.getElementById("addTaskForm");
const task = document.getElementById("task");
const incompletedList = document.getElementById("incompletedList");
const completedList = document.getElementById("completedList");

addTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = task.value;
  if (value !== "") {
    incompletedTasks(value);
    event.currentTarget.reset();
  }
});

function incompletedTasks(value) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");

  const rN = Math.round(Math.random() * 1000);

  input.type = "checkbox";
  input.setAttribute("id", `task${rN}`);
  label.setAttribute("for", `task${rN}`);
  label.innerText = value;
  label.prepend(input);
  li.append(label);
  incompletedList.appendChild(li);
}

incompletedList.addEventListener("click", function (event) {
  if (event.target.tagName === "LABEL") {
    let target = event.target.parentElement;
    event.target.parentElement.remove();
    const button = document.createElement("button");
    button.innerText = "Delete";
    target.appendChild(button);
    completedList.appendChild(target);
  }
});

completedList.addEventListener("click", function (event) {
  if (event.target.tagName === "LABEL") {
    let target = event.target;
    event.target.parentElement.remove();
    const li = document.createElement("li");
    li.appendChild(target);
    incompletedList.appendChild(li);
  }

  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
