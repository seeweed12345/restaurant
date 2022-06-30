import { pressEditbutton } from "./edittask";
import { currentProject } from "./index.js";

let tasks = [];
let i = 0;

class Task {
  constructor(project, taskName, notes, priorityLevel, date, time, status) {
    this.taskName = taskName;
    this.project = project;
    this.notes = notes;
    this.priorityLevel = priorityLevel;
    this.date = date;
    this.time = time;
    this.status = status;
  }
}
function pressNewTaskButton() {
  document.querySelector(".newtaskicon").addEventListener("click", () => {
    document.querySelector(".newtaskpopup").classList.remove("hidden");
    exitOutofAddNewTask();
  });
}

function pressAddNewTaskButton() {
  document.querySelector(".addtaskbutton").addEventListener("click", () => {
    let project = currentProject;
    let taskName = document.querySelector(".tasknameinput").value;
    let taskDescription = document.querySelector("#notesinput").value;
    let priorityLevel = document.querySelector("#prioritylevelinput").value;
    let time = document.querySelector("#timeinput").value;
    let date = document.querySelector(".calendar-demo-msg").innerHTML;
    let status = "pending";
    tasks[i] = new Task(
      project,
      taskName,
      taskDescription,
      priorityLevel,
      time,
      date,
      status
    );
    i++;
    displayTasks();
    document.querySelector(".newtaskpopup").classList.add("hidden");
    document.querySelector(".tasknameinput").value = "";
    document.querySelector("#notesinput").value = "";
    document.querySelector("#prioritylevelinput").value = "";
    document.querySelector("#timeinput").value = "";
    document.querySelector(".calendar-demo-msg").innerHTML = "";
  });
}

function exitOutofAddNewTask() {
  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".edit") &&
      !event.target.closest(".tasks-header") &&
      !event.target.closest(".newtaskpopup")
    ) {
      document.querySelector(".newtaskpopup").classList.add("hidden");
    }
  });
}

function displayTasks() {
  const element = document.querySelector(".tasks-list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let x = 0; x < tasks.length; x++) {
    if (tasks[x].project == currentProject) {
      let task = document.createElement("div");
      task.setAttribute(`taskId`, `${x}`);
      task.classList.add("task");
      let _taskName = document.createElement("div");
      _taskName.textContent = `${tasks[x].taskName}`;
      _taskName.setAttribute(`class`, `taskname n${x}`);
      let _taskDescription = document.createElement("div");
      _taskDescription.textContent = `${tasks[x].notes}`;
      _taskDescription.setAttribute(`class`, `notes d${x}`);
      let _priorityLevel = document.createElement("div");
      _priorityLevel.textContent = `${tasks[x].priorityLevel}`;
      _priorityLevel.setAttribute(`class`, `prioritylevel p${x}`);
      if (_priorityLevel.textContent == "!") {
        _priorityLevel.classList.add("lowp");
      } else if (_priorityLevel.textContent == "!!") {
        _priorityLevel.classList.add("medp");
      } else if (_priorityLevel.textContent == "!!!") {
        _priorityLevel.classList.add("highp");
      }
      let _time = document.createElement("div");
      _time.textContent = `${tasks[x].time}`;
      _time.setAttribute(`class`, `time t${x}`);
      let _date = document.createElement("div");
      _date.textContent = `${tasks[x].date}`;
      _date.setAttribute(`class`, `date dt${x}`);
      let _status = document.createElement("div");
      _status.textContent = `${tasks[x].status}`;
      _status.setAttribute(`class`, `pending`);
      if (_status.textContent == "pending") {
        _status.classList.add("stillpending");
      } else _status.classList.add("complete");
      _status.addEventListener("click", (e) => {
        changeStatus(`${x}`);
      });
      let _edit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      _edit.setAttributeNS(null, "viewbox", "0 0 24 24");
      _edit.setAttribute(`data-typeId`, `${x}`);
      _edit.classList = `edit e${x}`;
      let _edit_use = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      _edit_use.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "#pencilicon"
      );
      let _delete = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      _delete.setAttributeNS(null, "viewbox", "0 0 24 24");
      _delete.classList = `delete e${x}`;
      _delete.setAttribute(`data-typeId`, `${x}`);
      _delete.addEventListener("click", (e) => {
        let taskId = e.target.getAttribute("data-typeId");
        deleteTask(taskId);
      });
      let _delete_use = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      _delete_use.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "#deleteicon"
      );
      element.appendChild(task);
      task.appendChild(_taskName);
      task.appendChild(_taskDescription);
      task.appendChild(_priorityLevel);
      task.appendChild(_time);
      task.appendChild(_date);
      task.appendChild(_status);
      task.appendChild(_edit);
      _edit.appendChild(_edit_use);
      task.appendChild(_delete);
      _delete.appendChild(_delete_use);
      pressEditbutton();
    }
  }
}

function deleteTask(taskId) {
  tasks.splice(taskId, 1);
  i--;
  displayTasks();
  console.log("delete task");
}

function changeStatus(x) {
  if (tasks[x].status == "pending") {
    tasks[x].status = "completed";
  } else {
    tasks[x].status = "pending";
  }
  displayTasks();
}

export {
  pressNewTaskButton,
  pressAddNewTaskButton,
  displayTasks,
  exitOutofAddNewTask,
  deleteTask,
};
