import {
  changeCurrentProject,
  selectProject,
  currentProject,
} from "./index.js";
let projects = [];
let i = 0;
let lastId;

class Project {
  constructor(projectName) {
    this.projectName = projectName;
  }
}
function pressNewProjectButton() {
  document.querySelector(".newprojectbutton").addEventListener("click", () => {
    document.querySelector(".newprojectpopup").classList.remove("hidden");
    exitOutOfAddNewProject();
  });
}

function pressAddNewProjectButton() {
  document.querySelector(".addprojectbutton").addEventListener("click", () => {
    let projectName = document.querySelector(".projectinput").value;
    changeCurrentProject(projectName);
    projects[i] = new Project(projectName);
    i++;
    displayProjects();
    document.querySelector(".newprojectpopup").classList.add("hidden");
    document.querySelector(".projectinput").value = "";
    selectProject();
    document.querySelector(".project-title").textContent = currentProject;
    const projectButton = document.querySelectorAll(".project");
    for (const project of projectButton) {
      if (project.textContent.includes(currentProject)) {
        project.classList.add("currentproject");
      }
    }
  });
}

function exitOutOfAddNewProject() {
  window.addEventListener("click", function (event) {
    if (
      !event.target.closest(".newprojectpopup") &&
      !event.target.closest(".projectsheader")
    ) {
      document.querySelector(".newprojectpopup").classList.add("hidden");
      console.log("test");
    }
  });
}

function displayProjects() {
  const element = document.querySelector(".projectslist");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let x = 0; x < projects.length; x++) {
    let project = document.createElement("div");
    project.setAttribute(`class`, `project p${x}`);
    project.textContent = `${projects[x].projectName}`;
    element.appendChild(project);
  }
}

export {
  pressNewProjectButton,
  pressAddNewProjectButton,
  exitOutOfAddNewProject,
};
