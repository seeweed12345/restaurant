import { pressNewProjectButton } from "./newproject.js";
import { pressAddNewProjectButton } from "./newproject.js";
import {
  pressAddNewTaskButton,
  pressNewTaskButton,
  displayTasks,
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

function selectProject() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      currentProject = project.textContent;
      displayTasks();
    });
  });
}
pressNewProjectButton();
pressAddNewProjectButton();
pressNewTaskButton();
pressAddNewTaskButton();
selectProject();

export { currentProject, selectProject };
