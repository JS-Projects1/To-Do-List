let input = document.querySelector(".add-task input");
let submitButton = document.querySelector(".plus");
let tasksContent = document.querySelector(".task-contant");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function () {
  input.focus();
};

submitButton.onclick = function () {
  if (input.value == "") {
    console.log("Empty");
  } else {
    let noTaskes = document.querySelector(".no-taske");

    let taskBox = document.createElement("span");
    let deleteButton = document.createElement("span");

    taskBox.className = "task-box";
    deleteButton.className = "delete";

    let text = document.createTextNode(input.value);
    let textButton = document.createTextNode("Delete");

    taskBox.appendChild(text);
    deleteButton.appendChild(textButton);
    taskBox.appendChild(deleteButton);

    tasksContent.appendChild(taskBox);

    input.value = "";
    input.focus();

    noTaskes.remove()
    calculateTasks()

  }
};

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    if (tasksContent.childElementCount == 0) {
      noTaskesCheck();
    }
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }

  calculateTasks()
});

function noTaskesCheck() {
  let noTaskesNew = document.createElement("span");
  noTaskesNew.className = "no-taske";
  let textNoTaskesNew = document.createTextNode("No Taskes");
  noTaskesNew.appendChild(textNoTaskesNew);
  tasksContent.appendChild(noTaskesNew);
}

function calculateTasks(){
   tasksCount.innerHTML = document.querySelectorAll('.task-box').length;
  tasksCompleted.innerHTML = document.querySelectorAll('.finished').length;
  console.log(tasksCompleted)
}
