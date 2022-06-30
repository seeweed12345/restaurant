import {
  pressNewProjectButton,
  pressAddNewProjectButton,
} from "./newproject.js";
import { pressEditbutton } from "./edittask.js";
import {
  pressAddNewTaskButton,
  pressNewTaskButton,
  displayTasks,
  deleteTask,
} from "./newtask.js";
import "./style.css";
import "./nice-date-picker.css";
import niceDatePicker from "./nice-date-picker.js";

let currentProject;

new niceDatePicker({
  dom: document.getElementById("calendar-demo-wrapper"),
  year: 2022,
  month: 6,
  mode: "en",
  onClickDate: function (date) {
    document.querySelector(".calendar-demo-msg").innerHTML = date;
  },
});

function changeCurrentProject(project) {
  currentProject = project;
}
function selectProject() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      console.log("clicked");
      project.classList.add("currentproject");
      const projectButton = document.querySelectorAll(".project");
      for (const project of projectButton) {
        if (project.textContent.includes(currentProject)) {
          project.classList.remove("currentproject");
        }
      }
      currentProject;
      currentProject = project.textContent;
      displayTasks();
      document.querySelector(".project-title").textContent = currentProject;
    });
  });
}

// document.querySelector(".tasks-list").addEventListener("click", (e) => {
//   console.log("initiated");
//   if (e.target.classList.contains("delete")) {
//     console.log("clicked");
//     let taskId = e.target.getAttribute("data-typeId");
//     deleteTask(taskId);
//   }
// });

// document.querySelector(".tasks-list").addEventListener("click", (e) => {
//   console.log("initiated");
//   if (e.target.classList.contains("edit")) {
//     console.log("clicked");
//     let taskId = e.target.getAttribute("data-typeId");
//     deleteTask(taskId);
//   }
// });

pressNewProjectButton();
pressAddNewProjectButton();
pressNewTaskButton();
pressAddNewTaskButton();
selectProject();
pressEditbutton();
export { currentProject, selectProject, changeCurrentProject };
